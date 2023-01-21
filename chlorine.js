// TO_START_EDITING: This contains almost exactly the the same code as you
// see after exercise 3. The first two lines just mean "When the page is loaded,
// and when the user clicks on the calculate button..."
//
// There's also a backup of this file. If you make changes and something breaks, and you
// can't figure out why, copy the contents of chlorine.bak.js into this file and start
// over.
document.addEventListener('DOMContentLoaded', e => {
  document.getElementById('calculate').addEventListener('click', () => {
    const bleachConcentration = document.getElementById('bleachConcentration').value;
    const desiredConcentration = document.getElementById('desiredConcentration').value;
    const desiredVolume = document.getElementById('desiredVolume').value;

    const valid = ![bleachConcentration, desiredConcentration, desiredVolume].includes('');

    const availableBleach = (bleachConcentration / 1.05) * 10;
    const requiredBleach = (desiredConcentration * desiredVolume) / availableBleach;
    const requiredWater = ((desiredVolume) - (requiredBleach / 1000)).toFixed(1);
    const requiredWaterPerPersonPerDay = 3;
    const numberOfPeople = (requiredWater / requiredWaterPerPersonPerDay).toFixed(1);

    if (valid == true) {
      let strHTML = `To make your chlorine solution add ${requiredBleach.toFixed(1)} milliliters of bleach to ${requiredWater} litres of water.`;
      strHTML += ` That's enough for ${numberOfPeople} people`;
      document.getElementById('result').innerHTML = strHTML;
    } else {
      document.getElementById('result').innerHTML = "Please enter numbers in all the fields";
    }

    document.getElementById('result').style.display = 'block';

    const imgs = [...document.querySelector('.cholera-container').querySelectorAll('img')];
    imgs.forEach((e) => e.style.display = 'inline-block');
    imgs.slice(100 - desiredConcentration).forEach((e) => e.style.display = 'none');
  });
});
