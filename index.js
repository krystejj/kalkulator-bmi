// Gdy przycisk "Oblicz" zostanie naciśnięty
document.getElementById('calculateButton').addEventListener('click', () => {
    // Obliczenie BMI
    const heightCm = parseInt(document.getElementById('heightInput').value);
    const weightKg = parseInt(document.getElementById('weightInput').value);
    const bmi = weightKg / (heightCm / 100)**2;

    // Wyświetlenie informacji
    const bmiSpan = document.getElementById('bmiSpan');
    bmiSpan.textContent = `${Math.round(bmi * 100) / 100} - ${getBMIRangeText(bmi)}`;
    bmiSpan.style.color = getBMIRangeColor(bmi);
    document.getElementById('resultDiv').hidden = false;
});

// Funkcja zwracająca opis dla wartości BMI
function getBMIRangeText(bmi) {
    if (bmi < 18.5) {
        return 'niedowaga';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'normalna';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'nadwaga';
    } else if (bmi >= 30) {
        return 'otyłość';
    }
}

// Funkcja zwracająca kolor dla wartości BMI
function getBMIRangeColor(bmi) {
    if (bmi < 18.5) {
        return 'rgb(0, 148, 166)';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'rgb(0, 158, 82)';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'rgb(201, 148, 2)';
    } else if (bmi >= 30) {
        return 'rgb(181, 53, 0)';
    }
}
