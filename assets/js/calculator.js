// Car Installments Calculator - Simple Version

// Inputs
var carSelect = document.getElementById('carSelect');
var carPrice = document.getElementById('carPrice');
var downPayment = document.getElementById('downPayment');
var period = document.getElementById('period');
var calcForm = document.getElementById('calcForm');

// Results
var monthlyElement = document.getElementById('monthlyInstallment');
var rateBadge = document.getElementById('interestBadge');
var resultPrice = document.getElementById('resultCarPrice');
var resultDown = document.getElementById('resultDown');
var resultRemaining = document.getElementById('resultFinanced');
var resultMonths = document.getElementById('resultPeriod');
var resultInterest = document.getElementById('resultInterest');
var resultTotal = document.getElementById('resultPayable');
var resultCar = document.getElementById('resultCarLabel');

// Interest rate for each period (years)
var rates = {
  1: 0.10,
  2: 0.19,
  3: 0.32,
  4: 0.45,
  5: 0.51,
  7: 0.79
};

// Add commas to a number, example: 1000000 -> 1,000,000
function formatNumber(value) {
  return Math.round(value).toLocaleString('en-US');
}

function formatMoney(value) {
  return formatNumber(value) + ' EGP';
}

// Runs when the user picks a car from the list
carSelect.onchange = function () {
  var selected = carSelect.options[carSelect.selectedIndex];

  // The price is stored in the option value
  if (selected && selected.value !== '') {
    carPrice.value = selected.value;
    resultCar.textContent = selected.text.split(' — ')[0];
  } else {
    carPrice.value = 0;
    resultCar.textContent = 'Select a car to begin';
  }

  calculateInstallment();
};

// Main calculation
function calculateInstallment() {
  var price = Number(carPrice.value) || 0;
  var down = Number(downPayment.value) || 0;
  var years = Number(period.value);

  var remaining = price - down;
  if (remaining < 0) remaining = 0; // avoid a negative value

  var interest = remaining * rates[years];
  var total = remaining + interest;
  var totalMonths = years * 12;
  var monthly = total / totalMonths;

  // Show the results
  monthlyElement.textContent = formatMoney(monthly);
  rateBadge.textContent = Math.round(rates[years] * 100) + '% total';
  resultPrice.textContent = formatMoney(price);
  resultDown.textContent = formatMoney(down);
  resultRemaining.textContent = formatMoney(remaining);
  resultMonths.textContent = totalMonths + ' months';
  resultInterest.textContent = formatMoney(interest);
  resultTotal.textContent = formatMoney(total);
}

// Recalculate when the user changes any input
downPayment.oninput = calculateInstallment;
period.onchange = calculateInstallment;
carPrice.oninput = calculateInstallment;

// Prevent the page from refreshing when pressing Enter
calcForm.onsubmit = function (event) {
  event.preventDefault();
};

// Run once when the page loads
calculateInstallment();