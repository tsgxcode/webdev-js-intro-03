"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const hardestChoreElement = document.getElementById("hardest-chore");
const easiestChoreElement = document.getElementById("easiest-chore")
const choreLengthElement = document.getElementById("chore-length")
const submissionBtn = document.getElementById("submission-btn")

const chores = ["Clean the gutters", "taking a poop", "Dishes"]
const choreLength = chores.length
let hardestChore = chores[1]
let easiestChore = chores[2]

// Declare your variables here.

function updateHardestChore() {
    // write the logic
    hardestChoreElement.innerText = hardestChore;
}

function updateEasiestChore() {
    // Update this function 
    easiestChoreElement.innerText = easiestChore;
}

function updateChoreLength() {
    // Finish writing this function
    choreLengthElement.innerText = choreLength;
}

function render() {
    updateChoreLength();
    updateEasiestChore();
    updateHardestChore();
}

submissionBtn.addEventListener("click", function () {
    // Finish writing this function
    render();
})
