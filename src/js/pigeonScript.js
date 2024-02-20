document.getElementById('poopBtn').addEventListener('click', function() {
    const container = document.querySelector('#poops');
    const pigeon = document.querySelector('#pigeonObj');
    
    const poop = document.createElement('div');
    poop.classList.add('poop');
    
    const pos = pigeon.getBoundingClientRect();
    poop.style.left = pos.left + 'px';
    poop.style.top = pos.top + 'px';
    
    poop.style.animation = 'fall 2s ease-in forwards'

    container.appendChild(poop);

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`@keyframes fall {
        0% {
            top: ${pos.top}px;
        }
        100% {
            top: 90%;
        }
    }`, styleSheet.cssRules.length);
  });