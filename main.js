//requires inquirer for personalization and exer for the exercise data
const inquirer = require("inquirer");
const Workout = require("./exer.js");

const { fstat } = require("fs");
const { info } = require("console");

// //Entry questionaire to personalize the program
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "list",
            message: "Choose a Split:",
            choices: ["Push / Pull / Legs", "Upper / Lower", "Arnold", "Bro", "Full-Body"],
            name: "split"
        },
        {
            type: "list",
            message: "Choose a Volume Level:",
            choices: ["low", "medium", "high"],
            name: "volume"
        },
    ])
    .then(function (response) {
        //create a new object with the person's info for the workout prompts to use
        const work = new Workout();
        //volume calculator
        const volume = response.volume
        //adjust number of suggested sets based on volume chosen
        if (response.volume === "low") {
            { work.sets = 4 }
        };
        if (response.volume === "medium") {
            { work.sets = 6 }
        };
        if (response.volume === "high") {
            { work.sets = 8 }
        };
        //display a personalized title
        console.log(response.name + "'s " + response.volume + " volume " + response.split + " workout!")
        
        //generates an "Arnold" split
        if (response.split === "Arnold") {
            //arnold split array
            const arnie = ["chest", "back", "delt", "bicep", "tricep", "quad", "ham", "core"]
            //loop through the arnie array
            for (const muscle of arnie) {
                
                console.log(work.sets + " sets of " + work.lift(4, work[muscle]) + " for " + work.minReps + " - " + work.maxReps + " reps")
            }
        };
        if (response.split === "Push / Pull / Legs") {
            //arnold split array
            const ppl = ["chest", "tricep", "quad", "core", "back", "delt", "bicep", "ham"]
            //loop through the arnie array
            for (const muscle of ppl) {
                
                console.log(work.sets + " sets of " + work.lift(4, work[muscle]) + " for " + work.minReps + " - " + work.maxReps + " reps")
            }
        };
        if (response.split === "Upper / Lower") {
            //arnold split array
            const ul = ["chest", "back", "delt", "bicep", "tricep", "core", "quad", "ham"]
            //loop through the arnie array
            for (const muscle of ul) {
                
                console.log(work.sets + " sets of " + work.lift(4, work[muscle]) + " for " + work.minReps + " - " + work.maxReps + " reps")
            }
        };
        if (response.split === "Full-Body") {
            //arnold split array
            const full = ["chest", "ham", "back", "quad", "bicep", "core", "tricep", "delt"]
            //loop through the arnie array
            for (const muscle of full) {
                
                console.log(work.sets + " sets of " + work.lift(4, work[muscle]) + " for " + work.minReps + " - " + work.maxReps + " reps")
            }
        };
        if (response.split === "Bro") {
                           
            console.log("c'mon bro don't do that...")
       
        };

    });

// console.log(user.workChest(4));
// console.log(response.name)
// console.log(response.split)
// console.log(response.volume)