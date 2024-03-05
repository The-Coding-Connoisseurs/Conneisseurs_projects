'use strict';

// console.log('[debug] oceanScript works!');

// Get reference to the boat element
const boat = document.querySelector('.boat');

// Function to animate boat with waves
function animateBoat() {
    // Adjust the boat's vertical position based on wave animations
    const currentTime = Date.now();
    const waveAmplitude = 50; // Adjust this value based on the wave animation
    const boatSpeed = 0.002; // Adjust the boat's speed based on your preference

    // Calculate the boat's new vertical position
    const newY = waveAmplitude * Math.sin(boatSpeed * currentTime);

    // Apply the new position to the boat
    boat.style.bottom = `${50 + newY}px`; // Adjust the base bottom position
}

// Start the animation loop
function startAnimationLoop() {
    setInterval(animateBoat, 10); // Adjust the interval as needed for smoothness
}

// Start the animation loop when the page loads
window.addEventListener('load', startAnimationLoop);

