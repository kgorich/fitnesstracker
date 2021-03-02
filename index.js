let workoutArray = [];

let maxBodyweightEx1 = 1;
let maxBodyweightEx2 = 1;
let maxBodyweightEx3 = 1;
let maxBodyweightEx4 = 1;
let maxBodyweightEx5 = 1;

let maxWeightliftingEx1 = 1;
let maxWeightliftingEx2 = 1;
let maxWeightliftingEx3 = 1;
let maxWeightliftingEx4 = 1;
let maxWeightliftingEx5 = 1;

let WorkoutObject = function(pID, pDate, pWorkout, pExercise, pReps, pWeight) {
    this.ID = pID;
    this.Date = pDate;
    this.Workout = pWorkout;
    this.Exercise = pExercise;
    this.Reps = pReps;
    this.Weight = pWeight;
}
class Movie {

    constructor(title, rating) {
        this.movieTitle = title.trim();
        this.movieRating = rating.trim();
    }

    validate() {

        if (this.movieTitle == '') {
            return false;
        }
        else if (this.movieRating == '' || this.movieRating < 1 || this.movieRating > 5) {
            return false;
        }
        else {
            return true;
        }
    }

    toString() {
        return `${this.movieTitle} `;
    }
}


workoutArray.push(new WorkoutObject(1001, new Date("02/21/2021"), "Bodyweight", "Lunges", 45, 0));
workoutArray.push(new WorkoutObject(1002, new Date("02/22/2021"), "Bodyweight", "Push-ups", 30, 0));
workoutArray.push(new WorkoutObject(1003, new Date("02/22/2021"), "Weightlifting", "Squats", 10, 150));
workoutArray.push(new WorkoutObject(1004, new Date("02/23/2021"), "Weightlifting", "Deadlift", 10, 135));
workoutArray.push(new WorkoutObject(1005, new Date("02/23/2021"), "Weightlifting", "Overhead Press", 10, 35));
workoutArray.push(new WorkoutObject(1006, new Date("02/24/2021"), "Bodyweight", "Plank", 10, 0));
workoutArray.push(new WorkoutObject(1007, new Date("02/24/2021"), "Bodyweight", "Squats", 25, 0));
workoutArray.push(new WorkoutObject(1008, new Date("02/25/2021"), "Bodyweight", "Lateral Leg Lifts", 10, 0));
workoutArray.push(new WorkoutObject(1009, new Date("02/26/2021"), "Weightlifting", "Bench Press", 10, 95));
workoutArray.push(new WorkoutObject(1010, new Date("02/27/2021"), "Weightlifting", "Row", 10, 25));
workoutArray.push(new WorkoutObject(1011, new Date("02/28/2021"), "Bodyweight", "Lunges", 50, 0));
workoutArray.push(new WorkoutObject(1012, new Date("02/24/2021"), "Bodyweight", "Squats", 20, 0));

createTrackerList();
createBodyweightMaxList();
createWeightliftingMaxList();

function createTrackerList() {
    let divWorkoutList = document.getElementById("divWorkoutList");
    let ul = document.createElement("ul");

    workoutArray.forEach(function(pElement) {
        let li = document.createElement("li");
        li.innerHTML = "ID: " + pElement.ID + " - Date: " +  pElement.Date.toDateString() + " - Workout: " +  pElement.Workout + " - Exercise: " +  pElement.Exercise + " - Reps: " +  pElement.Reps + " - Weight: " +  pElement.Weight + " <a href=''>Edit</a>";
        ul.appendChild(li);
    });
    divWorkoutList.appendChild(ul);
};

function createBodyweightMaxList() {
    maxBodyweight();
    let divBodyweightList = document.getElementById("divBodyweightList");
    let ul = document.createElement("ul");
    workoutArray.forEach(function(pElement) {
        if (pElement.Workout === "Bodyweight" && pElement.Exercise === "Squats" && pElement.Reps >= maxBodyweightEx1) {
            let li = document.createElement("li");
            li.innerHTML = pElement.Exercise + " " +  (pElement.Reps + 5) + " reps";
            ul.appendChild(li);
        }
        divBodyweightList.appendChild(ul);
        if (pElement.Workout === "Bodyweight" && pElement.Exercise === "Lunges" && pElement.Reps >= maxBodyweightEx2) {
            let li = document.createElement("li");
            li.innerHTML = pElement.Exercise + " " +  (pElement.Reps + 5) + " reps";
            ul.appendChild(li);
        }
        divBodyweightList.appendChild(ul);
        if (pElement.Workout === "Bodyweight" && pElement.Exercise === "Lateral Leg Lifts" && pElement.Reps >= maxBodyweightEx3) {
            let li = document.createElement("li");
            li.innerHTML = pElement.Exercise + " " +  (pElement.Reps + 5) + " reps";
            ul.appendChild(li);
        }
        divBodyweightList.appendChild(ul);
        if (pElement.Workout === "Bodyweight" && pElement.Exercise === "Plank" && pElement.Reps >= maxBodyweightEx4) {
            let li = document.createElement("li");
            li.innerHTML = pElement.Exercise + " " +  (pElement.Reps + 5) + " reps";
            ul.appendChild(li);
        }
        divBodyweightList.appendChild(ul);
        if (pElement.Workout === "Bodyweight" && pElement.Exercise === "Push-ups" && pElement.Reps >= maxBodyweightEx5) {
            let li = document.createElement("li");
            li.innerHTML = pElement.Exercise + " " +  (pElement.Reps + 5) + " reps";
            ul.appendChild(li);
        }
        divBodyweightList.appendChild(ul);
    });
};

function createWeightliftingMaxList() {
    maxWeightlifting();
    let divWeightliftingList = document.getElementById("divWeightliftingList");
    let ul = document.createElement("ul");
    workoutArray.forEach(function(pElement) {
        if (pElement.Workout === "Weightlifting" && pElement.Exercise === "Deadlift" && pElement.Weight >= maxBodyweightEx1) {
            let li = document.createElement("li");
            li.innerHTML = pElement.Exercise + " " + pElement.Reps + " reps " + (pElement.Weight + 5) + " lb.";
            ul.appendChild(li);
        }
        divWeightliftingList.appendChild(ul);
        if (pElement.Workout === "Weightlifting" && pElement.Exercise === "Squats" && pElement.Weight >= maxBodyweightEx2) {
            let li = document.createElement("li");
            li.innerHTML = pElement.Exercise + " " + pElement.Reps + " reps " + (pElement.Weight + 5) + " lb.";
            ul.appendChild(li);
        }
        divWeightliftingList.appendChild(ul);
        if (pElement.Workout === "Weightlifting" && pElement.Exercise === "Row" && pElement.Weight >= maxBodyweightEx3) {
            let li = document.createElement("li");
            li.innerHTML = pElement.Exercise + " " + pElement.Reps + " reps " + (pElement.Weight + 5) + " lb.";
            ul.appendChild(li);
        }
        divWeightliftingList.appendChild(ul);
        if (pElement.Workout === "Weightlifting" && pElement.Exercise === "Bench Press" && pElement.Weight >= maxBodyweightEx4) {
            let li = document.createElement("li");
            li.innerHTML = pElement.Exercise + " " + pElement.Reps + " reps " + (pElement.Weight + 5) + " lb.";
            ul.appendChild(li);
        }
        divWeightliftingList.appendChild(ul);
        if (pElement.Workout === "Weightlifting" && pElement.Exercise === "Overhead Press" && pElement.Weight >= maxBodyweightEx5) {
            let li = document.createElement("li");
            li.innerHTML = pElement.Exercise + " " + pElement.Reps + " reps " + (pElement.Weight + 5) + " lb.";
            ul.appendChild(li);
        }
        divWeightliftingList.appendChild(ul);
    });
};

function maxBodyweight(){
    workoutArray.forEach(function(pElement) {
        if (pElement.Workout === "Bodyweight") {
            switch(pElement.Exercise) {
                case "Squats":
                    if(pElement.Reps > maxBodyweightEx1) {
                        maxBodyweightEx1 = pElement.Reps;
                    }
                    break;
                case "Lunges":
                    if(pElement.Reps > maxBodyweightEx2) {
                        maxBodyweightEx2 = pElement.Reps;
                    }
                    break;
                case "Lateral Leg Lifts":
                    if(pElement.Reps > maxBodyweightEx3) {
                        maxBodyweightEx3 = pElement.Reps;
                    }
                    break;
                case "Plank":
                    if(pElement.Reps > maxBodyweightEx4) {
                        maxBodyweightEx4 = pElement.Reps;
                    }
                    break;
                case "Push-ups":
                    if(pElement.Reps > maxBodyweightEx5) {
                        maxBodyweightEx5 = pElement.Reps;
                    }
                    break;
            }
        }
    });
};

function maxWeightlifting(){
    workoutArray.forEach(function(pElement) {
        if (pElement.Workout === "Weightlifting") {
            switch(pElement.Exercise) {
                case "Deadlift":
                    if(pElement.Weight > maxWeightliftingEx1) {
                        maxWeightliftingEx1 = pElement.Weight;
                    }
                    break;
                case "Squats":
                    if(pElement.Weight > maxWeightliftingEx2) {
                        maxWeightliftingEx2 = pElement.Weight;
                    }
                    break;
                case "Row":
                    if(pElement.Weight > maxWeightliftingEx3) {
                        maxWeightliftingEx3 = pElement.Weight;
                    }
                    break;
                case "Bench Press":
                    if(pElement.Weight > maxWeightliftingEx4) {
                        maxWeightliftingEx4 = pElement.Weight;
                    }
                    break;
                case "Overhead Press":
                    if(pElement.Weight > maxWeightliftingEx5) {
                        maxWeightliftingEx5 = pElement.Weight;
                    }
                    break;
            }
        }
    });
};
