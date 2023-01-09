
document.addEventListener('DOMContentLoaded', e => {

  document.getElementById('calculate').addEventListener('click', function () {
    /* ----- Get values ---- */
    NaClO = document.getElementById('NaClO').value;
    descon = document.getElementById('descon').value;
    desvol = document.getElementById('desvol').value;

    /* -------- Validate ------- */
    valid = true;
    if (NaClO == '') valid = false;
    if (descon == '') valid = false;
    if (descon == '') valid = false;


    /* ----- refine values ---- */
    NaClO = NaClO; 			// convert to ml
    desvol = desvol; 		// convert to ml
    availNaClO = (NaClO / 1.05) * 10;  	// unknown
    bleach = (descon * desvol) / availNaClO;
    result = bleach.toFixed(1);
    h2o = ((desvol) - (bleach / 1000)).toFixed(1);


    //    			result  	= Math.round((ppm * vol) / (concentrate * 100));
    //    			h2o			= (((vol * 1000) - result)/1000).toFixed(3);
    if (valid == true) {
      var strHTML = 'To make your chlorine solution add ' + result + ' millilitres of bleach to ' + h2o + ' litres of water. ';
      document.getElementById('result').innerHTML = strHTML;
      //return false;
    } else {
      document.getElementById('result').innerHTML = "Please enter numbers in all the fields";
    }
  });
});
