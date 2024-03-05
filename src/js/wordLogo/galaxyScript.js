console.log('[debug] galaxyScript works!');

document.body.addEventListener('click', playIntro, true); 
let introSound = new Audio("../../assets/audio/astralChoir.mp3");
introSound.volume = 0.3;
introSound.loop = true;

function playIntro() {
    introSound.play();
}

