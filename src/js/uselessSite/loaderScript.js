let percentageElement = document.querySelector('.percentage-text');

function updatePercentage() {
    let percentage = parseInt(percentageElement.innerText);
    percentage = (percentage + 1) % 5001;
    percentageElement.innerText = percentage + "%";
    setTimeout(updatePercentage, 40);
}

updatePercentage();
