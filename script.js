$(document).ready(onReady);
function onReady() {
    console.log('TEST: jQuery is connected!');

    $('#red-btn').on('click', appendRed);
    $('#blue-btn').on('click', appendBlue);
    $('#green-btn').on('click', appendGreen);
    $('#yellow-btn').on('click', appendYellow);
    $('#red-btn').on('click', rCount);
    $('#blue-btn').on('click', bCount);
    $('#green-btn').on('click', gCount);
    $('#yellow-btn').on('click', yCount);

    // $('#blocks').on('click', '.block', removeBlock);
}
// console.log('🟥 🟦 🟩 🟨');

function appendRed() {
    $('#blocks').append('<div class="block red-fill"><div>');
}
function appendBlue() {
    $('#blocks').append('<div class="block blue-fill"><div>');
}
function appendGreen() {
    $('#blocks').append('<div class="block green-fill"><div>');
}
function appendYellow() {
    $('#blocks').append('<div class="block yellow-fill"><div>');
}
function removeBlock() {
    $(this).remove();
}
// PART 2 ATTEMPT:
// This took some tinkering... one color block per color is already 
// present without doing anything, hence color count starts at 1

let redCount = 1;
let blueCount = 1;
let greenCount = 1;
let yellowCount = 1;

function rCount() {
    redCount++;
    $('#red-count').text(redCount);
}
function bCount() {
    blueCount++;
    $('#blue-count').text(blueCount);
}
function gCount() {
    greenCount++;
    $('#green-count').text(greenCount);
}
function yCount() {
    yellowCount++;
    $('#yellow-count').text(yellowCount);
}