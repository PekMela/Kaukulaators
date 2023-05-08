function btn() {
    const targetDiv = document.getElementById("third");
    const targettDiv = document.getElementById("thirdd");
    const tarttDiv = document.getElementById("thhird");
    const btnn = document.getElementById("toggle");
    const bttnn = document.getElementById("togglee");
    const bbtn = document.getElementById("tooggle");
    if (targetDiv.style.display !== "block") {
        targetDiv.style.display = "block";
        targettDiv.style.display = "none" 
        tarttDiv.style.display = "none" 
        btnn.innerHTML = "Sezona 1  ▲";
        bttnn.innerHTML = "Sezona 2  ▼";
        bbtn.innerHTML = "Sezona 3  ▼";
    } else {
        targetDiv.style.display = "none";
        btnn.innerHTML = "Sezona 1  ▼"
    }
}

function bbtn() {
    const targetDiv = document.getElementById("third");
    const targettDiv = document.getElementById("thirdd");
    const tarttDiv = document.getElementById("thhird");
    const btnn = document.getElementById("toggle");
    const bttnn = document.getElementById("togglee");
    const bbtn = document.getElementById("tooggle");
    if (tarttDiv.style.display !== "block") {
        targetDiv.style.display = "none";
        targettDiv.style.display = "none" 
        tarttDiv.style.display = "block" 
        btnn.innerHTML = "Sezona 1  ▼";
        bttnn.innerHTML = "Sezona 2  ▼";
        bbtn.innerHTML = "Sezona 3 ▲";
    } else {
        tarttDiv.style.display = "none";
        bbtn.innerHTML = "Sezona 3  ▼"
    }
}


function bttnn() {
    const targetDiv = document.getElementById("third");
    const targettDiv = document.getElementById("thirdd");
    const tarttDiv = document.getElementById("thhird");
    const btnn = document.getElementById("togglee");
    const bttnn = document.getElementById("toggle");
    const bbtn = document.getElementById("tooggle");
    if (targettDiv.style.display !== "block") {
        targetDiv.style.display = "none";
        targettDiv.style.display = "block" 
        tarttDiv.style.display = "none" 
        btnn.innerHTML = " Sezona 2  ▲";
        bttnn.innerHTML = "Sezona 1  ▼";
        bbtn.innerHTML = "Sezona 3  ▼";
    } else {
        targettDiv.style.display = "none";
        btnn.innerHTML = "Sezona 2  ▼";
    }
}


function rekinaa() {
    let sum = 0;

    if (document.getElementById("gravy1").checked == true) {
        sum += parseFloat(document.getElementById("gravy1").value);
    }
    if (document.getElementById("gravy2").checked == true) {
        sum += parseFloat(document.getElementById("gravy2").value);
    }
    if (document.getElementById("gravy3").checked == true) {
        sum += parseFloat(document.getElementById("gravy3").value);
    }
    if (document.getElementById("gravy4").checked == true) {
        sum += parseFloat(document.getElementById("gravy4").value);
    }
    if (document.getElementById("gravy5").checked == true) {
        sum += parseFloat(document.getElementById("gravy5").value);
    }
    if (document.getElementById("gravy6").checked == true) {
        sum += parseFloat(document.getElementById("gravy6").value);
    }
    if (document.getElementById("gravy7").checked == true) {
        sum += parseFloat(document.getElementById("gravy7").value);
    }
    if (document.getElementById("gravy8").checked == true) {
        sum += parseFloat(document.getElementById("gravy8").value);
    }
    if (document.getElementById("gravy9").checked == true) {
        sum += parseFloat(document.getElementById("gravy9").value);
    }
    if (document.getElementById("gravy10").checked == true) {
        sum += parseFloat(document.getElementById("gravy10").value);
    }

    
    if (document.getElementById("gravvy1").checked == true) {
        sum += parseFloat(document.getElementById("gravvy1").value);
    }
    if (document.getElementById("gravvy2").checked == true) {
        sum += parseFloat(document.getElementById("gravvy2").value);
    }
    if (document.getElementById("gravvy3").checked == true) {
        sum += parseFloat(document.getElementById("gravvy3").value);
    }
    if (document.getElementById("gravvy4").checked == true) {
        sum += parseFloat(document.getElementById("gravvy4").value);
    }
    if (document.getElementById("gravvy5").checked == true) {
        sum += parseFloat(document.getElementById("gravvy5").value);
    }
    if (document.getElementById("gravvy6").checked == true) {
        sum += parseFloat(document.getElementById("gravvy6").value);
    }
    if (document.getElementById("gravvy7").checked == true) {
        sum += parseFloat(document.getElementById("gravvy7").value);
    }
    if (document.getElementById("gravvy8").checked == true) {
        sum += parseFloat(document.getElementById("gravvy8").value);
    }
    if (document.getElementById("gravvy9").checked == true) {
        sum += parseFloat(document.getElementById("gravvy9").value);
    }
    if (document.getElementById("gravvy10").checked == true) {
        sum += parseFloat(document.getElementById("gravvy10").value);
    }
  

    if (document.getElementById("ggravy1").checked == true) {
        sum += parseFloat(document.getElementById("ggravy1").value);
    }
    if (document.getElementById("ggravy2").checked == true) {
        sum += parseFloat(document.getElementById("ggravy2").value);
    }
    if (document.getElementById("ggravy3").checked == true) {
        sum += parseFloat(document.getElementById("ggravy3").value);
    }
    if (document.getElementById("ggravy4").checked == true) {
        sum += parseFloat(document.getElementById("ggravy4").value);
    }
    if (document.getElementById("ggravy5").checked == true) {
        sum += parseFloat(document.getElementById("ggravy5").value);
    }
    if (document.getElementById("ggravy6").checked == true) {
        sum += parseFloat(document.getElementById("ggravy6").value);
    }
    if (document.getElementById("ggravy7").checked == true) {
        sum += parseFloat(document.getElementById("ggravy7").value);
    }
    if (document.getElementById("ggravy8").checked == true) {
        sum += parseFloat(document.getElementById("ggravy8").value);
    }
    if (document.getElementById("ggravy9").checked == true) {
        sum += parseFloat(document.getElementById("ggravy9").value);
    }
    if (document.getElementById("ggravy10").checked == true) {
        sum += parseFloat(document.getElementById("ggravy10").value);
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

    var pop = sum.toFixed(2);

    let sun = sum / 60;
    var fixsun = sun.toFixed(2);

    let sub = sun / 24;
    let sud = sub.toFixed(2);

    document.getElementById("min").innerHTML = pop;
    document.getElementById("ho").innerHTML = fixsun;
    document.getElementById("die").innerHTML = sud;
}

function Check(chk) {
    if (document.myform.Check_ctr.checked == true) {
        for (i = 0; i < chk.length; i++) {
            chk[i].checked = true
        }
    } else {
        for (i = 0; i < chk.length; i++)
            chk[i].checked = false
    }
}

function Checkk(chk) {
    if (document.myform.Check_ctrr.checked == true) {
        for (z = 0; z < chk.length; z++) {
            chk[z].checked = true
        }
    } else {
        for (z = 0; z < chk.length; z++)
            chk[z].checked = false
    }
}

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

function Chheck(chk) {
    if (document.myform.Check_bal.checked == true) {
        for (z = 0; z < chk.length; z++) {
            chk[z].checked = true
        }
    } else {
        for (z = 0; z < chk.length; z++)
            chk[z].checked = false
    }
}

function Chheckk(chk) {
    if (document.myform.Check_cap.checked == true) {
        for (z = 0; z < chk.length; z++) {
            chk[z].checked = true
        }
    } else {
        for (z = 0; z < chk.length; z++)
            chk[z].checked = false
    }
}