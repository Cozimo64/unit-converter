const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
const inputBox = document.getElementById("inputBox");
const convertBtn = document.getElementById("convertBtn");

function lengthCalc(input) {
  let meters = (input * 0.3048).toFixed(3);
  let feet = (input * 3.28084).toFixed(3);
  length.textContent = `${input} meters = ${feet} feet | ${input} feet = ${meters} meters`;
}

function volumeCalc(input) {
  let liters = (input * 4.546092).toFixed(3);
  let gallons = (input * 0.264172).toFixed(3);
  volume.textContent = `${input} liters = ${gallons} gallons | ${input} gallons = ${liters} liters`;
}

function massCalc(input) {
  let kilos = (input * 0.45359237).toFixed(3);
  let lbs = (input * 2.20462).toFixed(3);
  mass.textContent = `${input} kilograms = ${lbs} pounds | ${input} pounds = ${kilos} kilograms`;
}

function validateInput(input) {
  // Remove non-numeric characters
  input.value = input.value.replace(/[^0-9]/g, '');
}

inputBox.addEventListener("keyup", function () {
  let input = parseFloat(inputBox.value);
  if (isNaN(input)) {
    alert("Please enter a valid number.");
  } else {
    lengthCalc(input);
    volumeCalc(input);
    massCalc(input);
  }
});

inputBox.style.width = inputBox.scrollWidth + 'px'
