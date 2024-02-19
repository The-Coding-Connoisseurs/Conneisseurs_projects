const phoneslider = document.getElementById('phoneslider');
const output = document.getElementById('phoneslider-output');

phoneslider.addEventListener('input', function() {
    output.innerText = this.value;
});


