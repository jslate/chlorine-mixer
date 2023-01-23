// TO_START_EDITING: This contains almost exactly the the same code as you
// see after exercise 3. The first two lines just mean "When the page is loaded,
// and when the user clicks on the calculate button..."
//
// There's also a backup of this file. If you make changes and something breaks, and you
// can't figure out why, copy the contents of chlorine.bak.js into this file and start
// over.
document.addEventListener('DOMContentLoaded', e => {
  document.getElementById('calculate').addEventListener('click', () => {
    // Update the round number
    const roundElement = document.getElementById('round');
    roundElement.innerHTML = parseInt(roundElement.innerHTML) + 1;

    // Get values from the form and assign them to constants
    const amountOfWater = document.getElementById('amountOfWater').value;
    const amountOfChlorine = document.getElementById('amountOfChlorine').value;

    // Get the ratio of chlorine to water
    const ratio = amountOfChlorine / amountOfWater;

    // Get the face element to update
    const faceElement = document.querySelector('#face img');
    const resultString = document.getElementById('resultString');

    // Choose the correct face type & update the result string
    let faceType = 'happy'
    if (ratio < 0.1) {
      faceType = 'sick';
      resultString.innerHTML = 'There is still cholera in the water!';
    } else if (ratio > 0.2) {
      faceType = 'yuck';
      resultString.innerHTML = 'There is too much chlorine in the water!';
    } else {
      resultString.innerHTML = 'There is just the right amount of chlorine in the water!';
    }

    // Update the face element
    faceElement.src = `images/${faceType}.svg`;
    faceElement.alt = `${faceType} face`;

    // Get the cholera count to display
    let choleraCount = Math.floor(ratio * 1000);

    // If it's more than 100, show 100
    choleraCount = choleraCount >= 100 ? 100 : choleraCount;

    // Get all the cholera images
    const imgs = [...document.querySelector('.cholera-container').querySelectorAll('img')];

    // Start by showing all of them
    imgs.forEach((e) => e.style.display = 'inline-block');

    // Then hide 100 - choleraCount of them
    imgs.slice(100 - choleraCount).forEach((e) => e.style.display = 'none');
  });
});

/*
  Hey there! I'm so glad you decided to dig into the source code!

  This application could be just the beginning of your coding adventure. When I visited Malawi in 2022,
  I was very impressed with the positive attitude, dedication, and determination of the young people I met.
  I'm 100% sure that some of you could be great coders, if you put in the time. This application is a
  trivial example of all the amazing things you can do if you learn to work with code.

  If you make something you are proud of, I'd love to see it. People at K2 TASO know how to reach me.

  Best of luck,
  Jonathan
*/
