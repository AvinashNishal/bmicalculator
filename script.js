document.getElementById('calculate-btn').addEventListener('click', calculateBMI);

function calculateBMI() {
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const bmiValue = document.getElementById('bmi');
  const bmiCategory = document.getElementById('bmi-grp');

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  const yr = String('You are')
  const yh = String('You have a')

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert('Please enter valid height and weight values.');
    return;
  }

  const bmi = weight / ((height / 100) ** 2);
  bmiValue.textContent = bmi.toFixed(2);

  if (bmi < 18.5) {
    bmiCategory.textContent = yr + ' Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory.textContent = yh + ' Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory.textContent = yr + ' Overweight';
  } else {
    bmiCategory.textContent = yr + ' Obese';
  }
}
