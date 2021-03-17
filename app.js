let express = require('express');
let path = require('path');

//leaving in the bodyParser in case we ever send up form data and need to get data out of form
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))

// insert our data code here
// start by creating data so we don't have to type it in each time
let serverWorkoutArray = [];
let lastID = 1000;

// define a constructor to create Workout objects
let WorkoutObject = function(pDate, pWorkout, pExercise, pReps, pWeight) {
    this.ID = ++lastID;
    this.Date = pDate;
    this.Workout = pWorkout;
    this.Exercise = pExercise;
    this.Reps = pReps;
    this.Weight = pWeight;
}

// start with sample data
serverWorkoutArray.push(new WorkoutObject(new Date("02/21/2021").toISOString().slice(0,10), "Bodyweight", "Lunges", 45, 0));
serverWorkoutArray.push(new WorkoutObject(new Date("02/22/2021").toISOString().slice(0,10), "Bodyweight", "Push-ups", 30, 0));
serverWorkoutArray.push(new WorkoutObject(new Date("02/22/2021").toISOString().slice(0,10), "Weightlifting", "Squats", 10, 150));
serverWorkoutArray.push(new WorkoutObject(new Date("02/23/2021").toISOString().slice(0,10), "Weightlifting", "Deadlift", 10, 135));
serverWorkoutArray.push(new WorkoutObject(new Date("02/23/2021").toISOString().slice(0,10), "Weightlifting", "Overhead Press", 10, 35));
serverWorkoutArray.push(new WorkoutObject(new Date("02/24/2021").toISOString().slice(0,10), "Bodyweight", "Plank", 10, 0));
serverWorkoutArray.push(new WorkoutObject(new Date("02/24/2021").toISOString().slice(0,10), "Bodyweight", "Squats", 25, 0));
serverWorkoutArray.push(new WorkoutObject(new Date("02/25/2021").toISOString().slice(0,10), "Bodyweight", "Lateral Leg Lifts", 10, 0));
serverWorkoutArray.push(new WorkoutObject(new Date("02/26/2021").toISOString().slice(0,10), "Weightlifting", "Bench Press", 10, 95));
serverWorkoutArray.push(new WorkoutObject(new Date("02/27/2021").toISOString().slice(0,10), "Weightlifting", "Row", 10, 25));
serverWorkoutArray.push(new WorkoutObject(new Date("02/28/2021").toISOString().slice(0,10), "Bodyweight", "Lunges", 50, 0));
serverWorkoutArray.push(new WorkoutObject(new Date("02/24/2021").toISOString().slice(0,10), "Bodyweight", "Squats", 20, 0));

// index page , serve the HTML
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

/* GET workoutList. */
app.get('/workoutList', function(req, res) {
    res.json(serverWorkoutArray);
});

/* POST to addWorkoutB */
app.post('/addWorkoutB', function(req, res) {
    console.log(req.body);
    serverWorkoutArray.push(req.body);
    // set the res(ponse) object's status propery to a 200 code, which means success
    res.status(200).send(JSON.stringify('success'));
});

/* POST to addWorkoutW */
app.post('/addWorkoutW', function(req, res) {
    console.log(req.body);
    serverWorkoutArray.push(req.body);
    // set the res(ponse) object's status propery to a 200 code, which means success
    res.status(200).send(JSON.stringify('success'));
});

// delete workout
app.delete('/deleteWorkout/:id', (req, res) => {
    let id = req.params.id;
    for (let i = 0; i < serverWorkoutArray.length; i++) {
        if (serverWorkoutArray[i].ID == id) {
            serverWorkoutArray.splice(i, 1);  // remove 1 element at loc i
            res.send('success');
        }
    }
    res.status(404);  // if not found
});

// error page 
app.get('/error', function(req, res) {
    // should get real data from some real operation, but instead ...
    let message = "some text from someplace";
    let errorObject ={
        status: "this is real bad",
        stack: "somebody called #$% somebody who called somebody <awful>"
    };
    res.render('pages/error', {  // pass the data to the page renderer
        message: message,
        error: errorObject
    });
});

app.listen(3000);  // setting port number 
console.log('3000 is the magic port');

module.exports = app;