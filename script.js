$(document).ready(onReady);
function onReady() {
    console.log('jQuery is connected!');
    $('#red-btn').on('click', appendRed);
    $('#blue-btn').on('click', appendBlue);
    $('#green-btn').on('click', appendGreen);
    $('#yellow-btn').on('click', appendYellow);
    $('#blocks').on('click', '.block', removeBlock);
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