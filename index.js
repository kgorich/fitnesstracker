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

let lastID = 1000;
let deleteID = 0;

let WorkoutObject = function(pID, pDate, pWorkout, pExercise, pReps, pWeight) {
    this.ID = pID;
    this.Date = pDate;
    this.Workout = pWorkout;
    this.Exercise = pExercise;
    this.Reps = pReps;
    this.Weight = pWeight;
}

workoutArray.push(new WorkoutObject(1001, new Date("02/21/2021").toISOString().slice(0,10), "Bodyweight", "Lunges", 45, 0));
workoutArray.push(new WorkoutObject(1002, new Date("02/22/2021").toISOString().slice(0,10), "Bodyweight", "Push-ups", 30, 0));
workoutArray.push(new WorkoutObject(1003, new Date("02/22/2021").toISOString().slice(0,10), "Weightlifting", "Squats", 10, 150));
workoutArray.push(new WorkoutObject(1004, new Date("02/23/2021").toISOString().slice(0,10), "Weightlifting", "Deadlift", 10, 135));
workoutArray.push(new WorkoutObject(1005, new Date("02/23/2021").toISOString().slice(0,10), "Weightlifting", "Overhead Press", 10, 35));
workoutArray.push(new WorkoutObject(1006, new Date("02/24/2021").toISOString().slice(0,10), "Bodyweight", "Plank", 10, 0));
workoutArray.push(new WorkoutObject(1007, new Date("02/24/2021").toISOString().slice(0,10), "Bodyweight", "Squats", 25, 0));
workoutArray.push(new WorkoutObject(1008, new Date("02/25/2021").toISOString().slice(0,10), "Bodyweight", "Lateral Leg Lifts", 10, 0));
workoutArray.push(new WorkoutObject(1009, new Date("02/26/2021").toISOString().slice(0,10), "Weightlifting", "Bench Press", 10, 95));
workoutArray.push(new WorkoutObject(1010, new Date("02/27/2021").toISOString().slice(0,10), "Weightlifting", "Row", 10, 25));
workoutArray.push(new WorkoutObject(1011, new Date("02/28/2021").toISOString().slice(0,10), "Bodyweight", "Lunges", 50, 0));
workoutArray.push(new WorkoutObject(1012, new Date("02/24/2021").toISOString().slice(0,10), "Bodyweight", "Squats", 20, 0));

document.getElementById("divFormB").style.display = "none";
document.getElementById("divFormW").style.display = "none";
document.getElementById("formBStartButton").addEventListener("click", formBStartEvent);
document.getElementById("formWStartButton").addEventListener("click", formWStartEvent);
document.getElementById("formBEndButton").addEventListener("click", formBEndEvent);
document.getElementById("formWEndButton").addEventListener("click", formWEndEvent);
document.getElementById("formBSaveButton").addEventListener("click", formBSaveEvent);
document.getElementById("formWSaveButton").addEventListener("click", formWSaveEvent);

$(document).on("pagebeforeshow", "#bodyweight", function () {
    refreshBodyweightData();
    document.getElementById("formBEndButton").style.display = "none";
    document.getElementById("divFormB").style.display = "none";
    document.getElementById("formBStartButton").style.display = "block";
    document.getElementById("formB").reset();
});

$(document).on("pagebeforeshow", "#weightlifting", function () {
    refreshWeightliftingData();
    document.getElementById("formWEndButton").style.display = "none";
    document.getElementById("divFormW").style.display = "none";
    document.getElementById("formWStartButton").style.display = "block";
    document.getElementById("formW").reset();
});

$(document).on("pagebeforeshow", "#log", function () {
    refreshLogData();
});

function formBStartEvent(){
    document.getElementById("formBStartButton").style.display = "none";
    document.getElementById("formBEndButton").style.display = "block";
    document.getElementById("divFormB").style.display = "block";
    document.getElementById("formBDateInput").select();
}
function formWStartEvent(){
    document.getElementById("formWStartButton").style.display = "none";
    document.getElementById("formWEndButton").style.display = "block";
    document.getElementById("divFormW").style.display = "block";
    document.getElementById("formWDateInput").select();
}

function formBEndEvent(){
    document.getElementById("formBEndButton").style.display = "none";
    document.getElementById("divFormB").style.display = "none";
    document.getElementById("formBStartButton").style.display = "block";
}

function formWEndEvent(){
    document.getElementById("formWEndButton").style.display = "none";
    document.getElementById("divFormW").style.display = "none";
    document.getElementById("formWStartButton").style.display = "block";
}

function formBSaveEvent(){
    maxID();
    let workout = new WorkoutObject((lastID + 1), document.getElementById("formBDateInput").value, "Bodyweight", document.getElementById("formBExerciseInput").value, document.getElementById("formBRepsInput").value, 0);
    if (!workout.isValid()) {
        alert('Error: Invalid data.')
    } else {
        workoutArray.push(workout);
        lastID++;
        refreshBodyweightData();
        document.getElementById("formB").reset();
        document.getElementById("formBDateInput").select();
    };
}

function formWSaveEvent(){
    maxID();
    let workout = new WorkoutObject((lastID + 1), document.getElementById("formWDateInput").value, "Weightlifting", document.getElementById("formWExerciseInput").value, document.getElementById("formWRepsInput").value, document.getElementById("formWWeightInput").value);
    if (!workout.isValid()) {
        alert('Error: Invalid data.')
    } else {
        workoutArray.push(workout);
        lastID++;
        refreshWeightliftingData();
        document.getElementById("formW").reset();
        document.getElementById("formWDateInput").select();
    };
}

function createTrackerTable() {
    let divLogData = document.getElementById("divLogData");
    let trackertable = document.createElement("table");
    trackertable.id = "trackerTable";
    let header = trackertable.createTHead();
    let row = header.insertRow(0);
    $(row).append("<th>ID</th>" +
        "<th>Date</th>" +
        "<th>Workout</th>" +
        "<th>Exercise</th>" +
        "<th>Reps</th>" +
        "<th>Weight</th>" +
        "<th></th>");
    let body = document.createElement("tbody");
    trackertable.appendChild(body);
    divLogData.appendChild(trackertable);
    
    workoutArray.forEach(function(pElement) {
        $("#trackerTable tbody").append("<tr><td>" + pElement.ID +
            "</td><td>" + pElement.Date +
            "</td><td>" + pElement.Workout +
            "</td><td>" + pElement.Exercise +
            "</td><td>" + pElement.Reps + " reps" +
            "</td><td>" + pElement.Weight + " lb." +
            "</td><td class='deleteButton' data-parm=" + pElement.ID + ">" + "Delete");
    });
    createEventListener();
}

function createBodyweightMaxTable() {
    maxBodyweight();
    let divBodyweightData = document.getElementById("divBodyweightData");
    let table = document.createElement("table");
    table.id = "bodyweightTable";
    let header = table.createTHead();
    let row = header.insertRow(0);
    $(row).append("<th>Exercise</th>" + "<th>Target Reps</th>");
    let body = document.createElement("tbody");
    table.appendChild(body);
    divBodyweightData.appendChild(table);

    workoutArray.forEach(function(pElement) {
        if (pElement.Workout === "Bodyweight" && pElement.Exercise === "Squats" && pElement.Reps >= maxBodyweightEx1) {
            $("#bodyweightTable tbody").append("<tr><td>" + pElement.Exercise +
            "</td><td>" + (parseInt(pElement.Reps) + 5) + " reps");
        }
        if (pElement.Workout === "Bodyweight" && pElement.Exercise === "Lunges" && pElement.Reps >= maxBodyweightEx2) {
            $("#bodyweightTable tbody").append("<tr><td>" + pElement.Exercise +
            "</td><td>" + (parseInt(pElement.Reps) + 5) + " reps");
        }
        if (pElement.Workout === "Bodyweight" && pElement.Exercise === "Lateral Leg Lifts" && pElement.Reps >= maxBodyweightEx3) {
            $("#bodyweightTable tbody").append("<tr><td>" + pElement.Exercise +
            "</td><td>" + (parseInt(pElement.Reps) + 5) + " reps");
        }
        if (pElement.Workout === "Bodyweight" && pElement.Exercise === "Plank" && pElement.Reps >= maxBodyweightEx4) {
            $("#bodyweightTable tbody").append("<tr><td>" + pElement.Exercise +
            "</td><td>" + (parseInt(pElement.Reps) + 5) + " reps");
        }
        if (pElement.Workout === "Bodyweight" && pElement.Exercise === "Push-ups" && pElement.Reps >= maxBodyweightEx5) {
            $("#bodyweightTable tbody").append("<tr><td>" + pElement.Exercise +
            "</td><td>" + (parseInt(pElement.Reps) + 5) + " reps");
        }
    });
}

function createWeightliftingMaxTable() {
    maxWeightlifting();
    let divWeightliftingData = document.getElementById("divWeightliftingData");
    let table = document.createElement("table");
    table.id = "weightliftingTable";
    let header = table.createTHead();
    let row = header.insertRow(0);
    $(row).append("<th>Exercise</th>" + "<th>Reps</th>" + "<th>Target Weight</th>");
    let body = document.createElement("tbody");
    table.appendChild(body);
    divWeightliftingData.appendChild(table);

    workoutArray.forEach(function(pElement) {
        if (pElement.Workout === "Weightlifting" && pElement.Exercise === "Deadlift" && pElement.Weight >= maxWeightliftingEx1) {
            $("#weightliftingTable tbody").append("<tr><td>" + pElement.Exercise +
            "</td><td>" + 10 + " reps</td><td>" + (parseInt(pElement.Weight) + 5) + " lb.</td>");
        }
        if (pElement.Workout === "Weightlifting" && pElement.Exercise === "Squats" && pElement.Weight >= maxWeightliftingEx2) {
            $("#weightliftingTable tbody").append("<tr><td>" + pElement.Exercise +
            "</td><td>" + 10 + " reps</td><td>" + (parseInt(pElement.Weight) + 5) + " lb.</td>");
        }
        if (pElement.Workout === "Weightlifting" && pElement.Exercise === "Row" && pElement.Weight >= maxWeightliftingEx3) {
            $("#weightliftingTable tbody").append("<tr><td>" + pElement.Exercise +
            "</td><td>" + 10 + " reps</td><td>" + (parseInt(pElement.Weight) + 5) + " lb.</td>");
        }
        if (pElement.Workout === "Weightlifting" && pElement.Exercise === "Bench Press" && pElement.Weight >= maxWeightliftingEx4) {
            $("#weightliftingTable tbody").append("<tr><td>" + pElement.Exercise +
            "</td><td>" + 10 + " reps</td><td>" + (parseInt(pElement.Weight) + 5) + " lb.</td>");
        }
        if (pElement.Workout === "Weightlifting" && pElement.Exercise === "Overhead Press" && pElement.Weight >= maxWeightliftingEx5) {
            $("#weightliftingTable tbody").append("<tr><td>" + pElement.Exercise +
            "</td><td>" + 10 + " reps</td><td>" + (parseInt(pElement.Weight) + 5) + " lb.</td>");
        }
    });
}

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
}

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
}

function maxID(){
    workoutArray.forEach(function(pElement) {
        if(pElement.ID > lastID) {
            lastID = pElement.ID;
        }
    });
}

WorkoutObject.prototype.isValid = function(){
    switch (this.Workout) {
        case "Bodyweight":
            if (this.Date === "" || this.Reps === "" || isNaN(this.Reps) || this.Reps > 9999 || this.Reps < 1) {
                return false;
            } else {
                return true;
            };
        case "Weightlifting":
            if (this.Date === "" || this.Reps === "" || isNaN(this.Reps) || this.Reps > 9999 || this.Reps < 1) {
                return false;
            } else {
                return true;
            };
    }
}

function refreshBodyweightData() {
    let divBodyweightData = document.getElementById("divBodyweightData");
    while (divBodyweightData.firstChild) {
        divBodyweightData.removeChild(divBodyweightData.firstChild);
    };
    createBodyweightMaxTable();
}

function refreshWeightliftingData() {
    let divWeightliftingData = document.getElementById("divWeightliftingData");
    while (divWeightliftingData.firstChild) {
        divWeightliftingData.removeChild(divWeightliftingData.firstChild);
    };
    createWeightliftingMaxTable();
}

function refreshLogData() {
    let divLogData = document.getElementById("divLogData");
    while (divLogData.firstChild) {
        divLogData.removeChild(divLogData.firstChild);
    };
    createTrackerTable();
}

function createEventListener() {
    let tableRowDeleteArray = document.getElementsByClassName("deleteButton");
    for (i = 0; i < tableRowDeleteArray.length; i++) {
        tableRowDeleteArray[i].addEventListener('click', function () {
            deleteID = this.getAttribute("data-parm");
            deleteItem(deleteID);
        });
    }
}

function deleteItem(which) {
    let arrayPointer = GetArrayPointer(which);
    workoutArray.splice(arrayPointer, 1);
    refreshLogData();
}

function GetArrayPointer(localID) {
    for (let i = 0; i < workoutArray.length; i++) {
        if (localID === workoutArray[i].ID) {
            return i;
        }
    }
}
