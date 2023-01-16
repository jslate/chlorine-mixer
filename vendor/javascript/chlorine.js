document.addEventListener('DOMContentLoaded', e => {
  document.getElementById('calculate').addEventListener('click', () => {
    /* ----- Get values ---- */
    const bleachConcentration = document.getElementById('bleachConcentration').value;
    const desiredConcentration = document.getElementById('desiredConcentration').value;
    const desiredVolume = document.getElementById('desiredVolume').value;

    /* -------- Validate ------- */
    const valid = ![bleachConcentration, desiredConcentration, desiredVolume].includes('');

    /* ----- refine values ---- */
    const availableBleach = (bleachConcentration / 1.05) * 10;
    const requiredBleach = (desiredConcentration * desiredVolume) / availableBleach;
    const requiredWater = ((desiredVolume) - (requiredBleach / 1000)).toFixed(1);

    if (valid == true) {
      var strHTML = `To make your chlorine solution add ${requiredBleach.toFixed(1)} milliliters of bleach to ${requiredWater} litres of water.`;
      document.getElementById('result').innerHTML = strHTML;
    } else {
      document.getElementById('result').innerHTML = "Please enter numbers in all the fields";
    }
  });
});
