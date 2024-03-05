'use strict';

// Boat element
const boat = document.querySelector('.boat');

// Function to animate boat
function animateBoat() {
    const currentTime = Date.now();
    // Value based on the wave animation
    const waveAmplitude = 25;
    // Boat's speed
    const boatSpeed = 0.0015;

    // Boat's new vertical position
    const newY = waveAmplitude * Math.sin(boatSpeed * currentTime);

    // New boat position
    boat.style.bottom = `${50 + newY}px`;
}

// Start animation loop
function startAnimationLoop() {
    setInterval(animateBoat, 10);
}

// Start animation loop when the page loads
window.addEventListener('DOMContentLoaded', startAnimationLoop);

