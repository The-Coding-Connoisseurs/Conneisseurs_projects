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


function populateNameInputs() {
    const fnameContainer = document.getElementById('fnameContainer');
    const lnameContainer = document.getElementById('lnameContainer')


    addLetterInputs(4, fnameContainer, "fname");
    addLetterInputs(8, lnameContainer, "lname")
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

// Load functions when content is loaded
addEventListener("DOMContentLoaded", (event) => {
    populateNameInputs();
    populatePhoneSlider();
});

