let result = document.querySelector(".result");
let state = "";
let validWeight = false;
let validHeight = false;

function calcular() {
    $('#result').empty();
    var peso = document.getElementById("txtPeso").value;
    var altura = document.getElementById("txtAltura").value;

    if (peso >= 2 && peso <= 300) {
        validWeight = true;
    } else {
        let resultText = document.createElement('h1');
        resultText.innerHTML = `<h1 class = "text-center"> Enter a valid weight between 2kg and 300kg</h1>`;
        result.appendChild(resultText);
    }

    if (altura >= 50 && altura <= 250) {
        validHeight = true;
    } else {
        let resultText = document.createElement('h1');
        resultText.innerHTML = `<h1 class = "text-center"> Enter a valid height between 50cm and 250cm</h1>`;
        result.appendChild(resultText);
    }

    if (validHeight && validWeight) {
        var newaltura = altura / 100;
        var imc = (peso / (newaltura * newaltura)).toFixed(2);

        if (imc < 18.5) {
            state = "Underweight"
        } else if (imc > 18.5 && imc < 24.9) {
            state = "Healthy Weight";
        } else if (imc > 25 && imc < 29.9) {
            state = "Overweight";
        } else {
            state = "Obesity";
        }

        let resultText = document.createElement('h1');
        resultText.innerHTML = `<h1 class = "text-center">Your BMI Index is <span>${imc}</span><br>
                                State: <span>${state}</span></h1>`;
        result.appendChild(resultText);

    }
    validHeight = false;
    validWeight = false;

}
