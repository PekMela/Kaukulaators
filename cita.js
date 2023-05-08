function rekinaa() {
    
    sum = 0;
    let agri = document.getElementById("minn");
    let peach = agri.options[agri.selectedIndex].value;
    let mario = parseFloat(document.getElementById("name").value);
    let luigi = parseFloat(document.getElementById("texti").value);

     if (peach == 1){
        sum=mario*luigi;
    } else if (peach == 2){
        let poyu = luigi*60;
        sum = poyu*mario;
    } else if (peach ==0){
        sum=0;
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


    let sun = sum / 60;
    var fixsun = sun.toFixed(2);

    let sub = sun / 24;
    let sud = sub.toFixed(2);

    document.getElementById("min").innerHTML = sum.toFixed(2);
    document.getElementById("ho").innerHTML = fixsun;
    document.getElementById("die").innerHTML = sud;
}