'use strict';

// Store the images
const boat = document.querySelector('.boat');
const sharkFin = document.querySelector('.shark-fin');
const lifebuoy = document.querySelector('.lifebuoy');

// Function to animate images
function animateImages() {
  const currentTime = Date.now();
  // Adjust the wave animation
  const waveAmplitude = 50;
  // Adjust the boat's speed
  const boatSpeed = 0.0016;

  // Calculate the vertical position for the images
  const boatY = waveAmplitude * Math.sin(boatSpeed * currentTime);
  const sharkFinY = waveAmplitude * Math.sin(boatSpeed * currentTime + 0.5);
  const lifebuoyY = waveAmplitude * Math.sin(boatSpeed * currentTime - 0.3);

  // Apply the new positions to the elements
  boat.style.bottom = `${50 + boatY}px`;
  sharkFin.style.bottom = `${100 + sharkFinY}px`;
  lifebuoy.style.bottom = `${100 + lifebuoyY}px`;
}

// Start animation loop
function startAnimationLoop() {
    setInterval(animateImages, 10);
}

// Start animation loop when content is loaded
window.addEventListener('DOMContentLoaded', startAnimationLoop);
