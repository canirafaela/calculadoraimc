const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');

    console.log("Valor do peso:", weightInput.value);
    console.log("Valor da altura:", heightInput.value);

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    console.log("Peso convertido:", weight);
    console.log("Altura convertida:", height);

    const bmi = (weight / (height * height)).toFixed(2);

    console.log("IMC:", bmi);

    const value = document.getElementById('value');
    value.textContent = bmi;

    let description = '';

    value.classList.add('attention')


    if (bmi < 18.5) {
        description = 'Você está abaixo do peso.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        description = 'Seu peso está normal.';
        value.classList.remove('attention')
        value.classList.add('normal')

    } else if (bmi >= 25 && bmi < 29.9) {
        description = 'Você está com sobrepeso.';
    } else {
        description = 'Você está obeso.';
    }

    const descriptionSpan = document.getElementById('description');
    descriptionSpan.textContent = description;

    const infos = document.getElementById('infos');
    infos.classList.remove('hidden');
});