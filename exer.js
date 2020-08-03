//Object to store all the exercises and functions to choose them at random, by group
function Workout() {
    //track reps and sets
    this.minReps = [8]
    this.maxReps = [12]
    this.sets = [0]
    //function to pick one of 4 exercises for a given muscle at random
    this.lift = function (number, group) {
        const random = Math.floor(Math.random() * Math.floor(number));
        const pick = group[random]
        return pick
    }
    {
    //chest
        this.chest = ["Bench Press", "Incline Bench Press", "Weighted Dips", "Chest Fly"]
        this.chest.push = true
        this.chest.upper = true
    }
    //back
    {
        this.back = ["Wide Grip Pulldown", "Close Grip Pulldown", "Barbell Row", "Seated/Supported Row"]
        this.back.pull = true
        this.back.upper = true
    }
    //delt
    {
        this.delt = ["Lateral Raise", "Upright Row", "Overhead Press", "Arnold Press"]
        this.delt.pull = true
        this.delt.push = true
        this.delt.upper = true
    }
    //bicep
    {
        this.bicep = ["Barbell Curl", "Hammer Curl", "Dumbbell Curl", "Concentration Curl"]
        this.bicep.pull = true
        this.bicep.upper = true
    }
    //tricep
    {
        this.tricep = ["Overhead Tricep Push", "Tricep Push-Down", "Skullcrusher", "Close-Grip Press"]
        this.tricep.push = true
        this.tricep.upper = true
    }
    //quad
    {
        this.quad = ["Squat", "Leg Extension", "Front Squat", "Leg Press"]
        this.quad.push = true
        this.quad.lower = true
    }
    //ham & glute
    {
        this.ham = ["Deadlift", "Hamstring Curl", "Hip Thrust", "Weighted Lunge"]
        this.ham.pull = true
        this.ham.lower = true
    }
    //calf & forearm
    {
        this.calf = ["Standing Calf Raise", "Seated Calf Raise", "Forearm Curl", "Reverse Forearm Curl"]
        this.calf.push = true
        this.calf.lower = true
    }
    //core
    {
        this.core = ["Leg Raises", "Crunches", "Bicycle Crunch", "Russian Twist"]
        this.core.pull = true
        this.core.lower = true
    }
}

module.exports = Workout;
// module.exports = inquirer;

//********************/

// console.log(user.workChest(4));

// console.log("6 sets of " + user.workChest(4) + " for 12 reps")

