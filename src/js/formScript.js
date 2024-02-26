'use strict';

// construct Capital Alhpabet
const alphabetObj = {}
for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    alphabetObj[letter] = letter;
}

function populatePhoneSlider() {

    const phoneslider = document.getElementById('phoneslider');
    const output = document.getElementById('phoneslider-output');
    
    phoneslider.addEventListener('input', function() {
        output.innerText = this.value;
    });
}

function populateNameInputs(lastNameDigits, firstNameDigits) {
    const fnameContainer = document.getElementById('fnameContainer');
    const lnameContainer = document.getElementById('lnameContainer')

    addLetterInputs(firstNameDigits, fnameContainer, "fname");
    addLetterInputs(lastNameDigits, lnameContainer, "lname");
}

function addLetterInputs(amount, container, name) {

    //de kindermoord
    container.innerHTML = '';

    for (let index = 0; index < amount; index++) {

    const select = document.createElement('select');
    select.setAttribute('id', `${name}${index}`);
    select.setAttribute('name',`${name}${index}`);

    for (let letter in alphabetObj) {
        const option = document.createElement('option');
        option.value = alphabetObj[letter];
        option.textContent = alphabetObj[letter];
        select.appendChild(option);
    }

    container.appendChild(select);
        
    }
    
}

function submitForm() {
    const form = document.getElementById('informForm');
    const formData = new FormData(form);

    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    console.log(jsonData);
}

const submitButton = document.getElementById('submitForm');
submitButton.addEventListener('click', submitForm);

const nameDigitsContainer = document.querySelector('#name-digits');

nameDigitsContainer.addEventListener('change', () => {
    // Store name digits based on the user input
    const lnameDigits = document.querySelector('#last-name-digits');
    const fnameDigits = document.querySelector('#first-name-digits');
    
    // Pass the value of the input fiels to the populate function
    populateNameInputs(lnameDigits.value, fnameDigits.value);

    console.log(lnameDigits.value + ', ' + fnameDigits.value);

});

// Load functions when content is loaded
window.addEventListener("DOMContentLoaded", (event) => {
    // populateNameInputs();
    populatePhoneSlider();
});
