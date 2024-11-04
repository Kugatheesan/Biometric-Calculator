document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let classification = '';

        if (bmi < 18.5) {
            classification = 'Underweight';
        } else if (bmi < 24.9) {
            classification = 'Normal weight';
        } else if (bmi < 29.9) {
            classification = 'Overweight';
        } else {
            classification = 'Obesity';
        }

        document.getElementById('result').innerHTML = `Your BMI is ${bmi}. Classification: ${classification}`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter a valid height.';
    }
});
