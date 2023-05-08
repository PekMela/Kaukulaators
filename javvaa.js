
function Checck(chk) {
    if (document.myform.Check_alu.checked == true) {
        for (z = 0; z < chk.length; z++) {
            chk[z].checked = true
        }
    } else {
        for (z = 0; z < chk.length; z++)
            chk[z].checked = false
    }
}

function btn() {
    const targetDiv = document.getElementById("third");
    const btnn = document.getElementById("toggle");
    if (targetDiv.style.display !== "block") {
        targetDiv.style.display = "block";
        btnn.innerHTML = "Sezona 1  ▲";
    } else {
        targetDiv.style.display = "none";
        btnn.innerHTML = "Sezona 1  ▼"
    }
}

function rekinna() {
    let sum = 0;
    let ch1 = document.getElementById("good1");
    let ch2 = document.getElementById("good2");
    let ch3 = document.getElementById("good3");
    let ch4 = document.getElementById("good4");
    let ch5 = document.getElementById("good5");
    let ch6 = document.getElementById("good6");
    let chek = parseFloat(document.getElementById("good1").value);

    if (ch1.checked == true) {
        sum += chek;
    }

    if (ch2.checked == true) {
        sum += chek;
    }

    if (ch3.checked == true) {
        sum += chek;
    }
    if (ch4.checked == true) {
        sum += chek;
    }
    if (ch5.checked == true) {
        sum += chek;
    }
    if (ch6.checked == true) {
        sum += chek;
    }

    let atr1 = document.getElementById("atrum1");
    let atr2 = document.getElementById("atrum2");
    let atr3 = document.getElementById("atrum3");
    let atr4 = document.getElementById("atrum4");
    let atr5 = document.getElementById("atrum5");
    let atval1 = parseFloat(document.getElementById("atrum1").value);
    let atval2 = parseFloat(document.getElementById("atrum2").value);
    let atval3 = parseFloat(document.getElementById("atrum3").value);
    let atval4 = parseFloat(document.getElementById("atrum4").value);
    let atval5 = parseFloat(document.getElementById("atrum5").value);

    if (atr1.checked) {
        sum = sum / atval1;
    } else if (atr2.checked) {
        sum = sum / atval2;
    } else if (atr3.checked) {
        sum = sum / atval3;
    } else if (atr4.checked) {
        sum = sum / atval4;
    } else if (atr5.checked) {
        sum = sum / atval5;
    } else{
        sum = 0;
    }

    var kol = sum.toFixed(2);

    let sun = sum / 60;
    var fixsun = sun.toFixed(2);

    let sub = sun / 24;
    let sud = sub.toFixed(2);

    document.getElementById("min").innerHTML = kol;
    document.getElementById("ho").innerHTML = fixsun;
    document.getElementById("die").innerHTML = sud;
}