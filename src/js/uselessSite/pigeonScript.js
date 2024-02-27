const poopContainer = document.querySelector('#poops');
const pigeon = document.querySelector('#pigeonObj');
const viewWith = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
console.log('[debug]', parseFloat(getComputedStyle(document.documentElement).fontSize));
console.log('[debug] pigen width', pigeon.width);

const poopSvg = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
<path d="M61.7,325.1c-8.1-17.3-1.8-32,12.4-44.6c3.4-3,7-5.8,10.8-8.3c15.9-10.6,15.8-10.3,31,0.2c25.2,17.4,54.2,24.2,84,28
c8.3,1.1,16.6,1.4,25.2,2.1c-20.1-4.9-40.4-8.2-59.4-15c-14.6-5.3-29.2-13.2-41-23.2c-23.2-19.8-18.7-44.7,8.7-58.1
c3.8-1.8,8-2.8,11.6-4.9c2.4-1.4,5.1-4.1,5.5-6.6c4.7-25.6,20.4-41.2,45.8-41.9c42.3-1.1,48.4-18.7,52.6-52.7
c1.9-15.2,5-30.9,11-44.9c8.4-19.6,32.2-30.3,50.6-25.2c-3.3,2.5-6.3,4.6-9,6.9c-17.5,14.8-22.3,39.4-9.1,58.6
c7.9,11.5,19.2,20.8,29.3,30.8c8.5,8.5,18.3,15.7,25.7,25c17.7,22.2,15.7,48.4-7.1,65.1c-16.2,11.8-35.6,19.3-53.7,28.6
c-2.8,1.4-5.9,2.2-8.5,5c7.4-1.7,15-3,22.2-5.3c24.8-8.1,48.7-17.8,66.9-37.9c1.4-1.5,5.9-1.7,8.2-0.7c23.7,9.9,29,27.3,16,52.9
c5.9,3.2,12.1,5.9,17.6,9.7c7.4,5.1,15.1,10.3,21.3,16.8c15.6,16.4,14.5,36.1-2.5,52.4c-19.7,18.7-44.4,27.4-70,34.3
c-38.5,10.3-77.8,13.8-117.5,13.3c-4.1,0-8.2,0-12.2,1.4c79.9,4.2,159,4.1,229.5-48.3c11.3,4.5,23.8,11.7,33.8,22.6
c10,11,9.2,23.7,4.9,36.5c-6,17.6-19.1,29-34.7,37.8c-25.2,14.2-52.9,21.2-81.1,25.6c-79.3,12.4-159,12.5-238.7,4.5
c-26.9-2.7-53.8-8-80.1-14.3c-19.1-4.6-35.5-15.7-48-31.6c-19.9-25.4-16.4-55.2,10-73.7C35,338,48.2,332.4,61.7,325.1z"/>
</svg>`


/* START FLYING PIGEON */
document.getElementById('flyButton').addEventListener('click', event => {
  pigeonFly();
  console.log('Fly button clicked');
});

function pigeonFly() {
  document.getElementById('pigeonObj').style.display = 'block';

  document.getElementById('pigeonStatic').style.display = 'none';

  document.getElementById('flyButton').style.display = 'none';

  document.getElementById('poopButton').style.display = 'block';
}

/* ---- */

//* Event listeners for different types of ways to trigger.
// By clicking the pigeon.
document.getElementById('pigeonObj').addEventListener('click', event => {
  pigeonPoops()
});
// By clicking the poop button.
document.getElementById('poopButton').addEventListener('click', event => {
  pigeonPoops()
});
// By pressing the space bar.
document.body.onkeyup = function(event) {
  // keyCode 32 corresponds to the spacebar.
  if(event.key == ' ' || event.keyCode == 32){
    pigeonPoops()
}
};

// Main function
function pigeonPoops() {
  playPoopSound();
  const poop = createPoop();
  placeElmentInCenterOf(pigeon, poop);
  poop.style.animation = 'fall 2s linear forwards'

  poopContainer.appendChild(poop);
}

function playPoopSound() {
  const audio = new Audio("/src/assets/audio/poopSound.mp3");
  audio.play();
}

function createPoop() {
  const poop = document.createElement('div');
  // poop.src = "assets/vectors/poopie.svg";
  poop.innerHTML = poopSvg;
  poop.classList.add('poop');
  return poop;
}

function placeElmentInCenterOf(targetElement, placedElement) {
  const position = targetElement.getBoundingClientRect();
  placedElement.style.left = (position.left + (targetElement.width  / 2)) + 'px';
  placedElement.style.top = position.top + (targetElement.height / 2) + 'px';
  return placedElement;
}