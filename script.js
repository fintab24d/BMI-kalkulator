window.onload = function() {
    let form = document.getElementById("kalkulatorform");

    form.onsubmit = function(esemeny) {
        esemeny.preventDefault();

        let elemek = document.getElementsByTagName("input");
        let magassagCm = Number(elemek[0].value);
        let sulyKg = Number(elemek[1].value);
        let eredmenyBekezdes = document.getElementsByTagName("p")[2];

        if (magassagCm <= 0 || sulyKg <= 0) {
            eredmenyBekezdes.innerHTML = "A testsúly és a magasság nem lehet 0 vagy annál kisebb!";
            return;
        }

        let magassagM = magassagCm / 100;
        let bmi = sulyKg / (magassagM * magassagM);

        let kategoria = "";

        if (bmi <= 15.9) {
            kategoria = "Súlyos soványság";
        } else if (bmi <= 16.9) {
            kategoria = "Mérsékelt soványság";
        } else if (bmi <= 18.4) {
            kategoria = "Enyhe soványság";
        } else if (bmi <= 24.9) {
            kategoria = "Normál testsúly";
        } else if (bmi <= 29.9) {
            kategoria = "Túlsúlyos";
        } else if (bmi <= 34.9) {
            kategoria = "Elhízott (I. fokú)";
        } else if (bmi <= 39.9) {
            kategoria = "Elhízott (II. fokú)";
        } else {
            kategoria = "Súlyosan elhízott (III. fokú)";
        }

        eredmenyBekezdes.innerHTML = "Az állapotod: " + kategoria + "<br>(BMI: " + bmi.toFixed(1) + ")";
    };
};