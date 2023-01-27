var n = 0;
let array = [
        "1x1",
        "1x2",
        "1x3",
        "2x1",
        "2x2",
        "2x3",
        "3x1",
        "3x2",
        "3x3",
    ]

function tat(t){
    m = mal(n);
    
    // vEZ DO PC
    if (m == "O") {
        sc = spilenComputer(m);
    }else{
        if (document.getElementById(t).innerHTML == ".") {
            document.getElementById(t).innerHTML = m;
            n++;
        }else{
            alert("Posição já escolhida");
        }
    }
    
    prüfen(m, n);
}

function mal(n){
    var r = n % 2 == 0 ? 'X' : 'O'; 
    // PAR / IMPAR
    return r;
}

function prüfen(m, n) {
    if (document.getElementById("1x1").innerHTML == m && 
    document.getElementById("2x1").innerHTML == m && 
    document.getElementById("3x1").innerHTML == m) {
        text(m)
    }
    else if (document.getElementById("1x2").innerHTML == m && 
    document.getElementById("2x2").innerHTML == m && 
    document.getElementById("3x2").innerHTML == m) {
        text(m)
    }
    else if (document.getElementById("1x3").innerHTML == m && 
    document.getElementById("2x3").innerHTML == m && 
    document.getElementById("3x3").innerHTML == m) {
        text(m)
    }
    else if (document.getElementById("1x1").innerHTML == m && 
    document.getElementById("1x2").innerHTML == m && 
    document.getElementById("1x3").innerHTML == m) {
        text(m)
    }
    else if (document.getElementById("1x1").innerHTML == m && 
    document.getElementById("1x2").innerHTML == m && 
    document.getElementById("1x3").innerHTML == m) {
        text(m)
    }
    else if (document.getElementById("2x1").innerHTML == m && 
    document.getElementById("2x2").innerHTML == m && 
    document.getElementById("2x3").innerHTML == m) {
        text(m)
    }
    else if (document.getElementById("3x1").innerHTML == m && 
    document.getElementById("3x2").innerHTML == m && 
    document.getElementById("3x3").innerHTML == m) {
        text(m)
    }
    else if (document.getElementById("1x1").innerHTML == m && 
    document.getElementById("2x2").innerHTML == m && 
    document.getElementById("3x3").innerHTML == m) {
        text(m)
    }
    else if (document.getElementById("1x3").innerHTML == m && 
    document.getElementById("2x2").innerHTML == m && 
    document.getElementById("3x1").innerHTML == m) {
        text(m)
    }
    else if (n == 9) {
        document.getElementById("result").innerHTML = `
        <marquee behavior="scroll" direction="left" style="color: yellow">Empate</marquee>
        `;
        setTimeout(function() {
            putzen();
        }, 2000);
    }
}

function getRandom() {
    return Math.floor(Math.random() * (8 - 0 + 1)) + 0;
}

function spilenComputer(m) {
    var idpc = array[getRandom()]
    if (document.getElementById(idpc).innerHTML == ".") {
        document.getElementById(idpc).innerHTML = m;
        n++;
        return 1;
    }else{
        spilenComputer(m);
    }
}

function text(m) {
    if (m == "X") {
        document.getElementById("result").innerHTML = `
        <marquee behavior="scroll" direction="left" style="color: blue">Parabéns!!! Vitória.</marquee>
        `;
        setTimeout(function() {
            putzen();
        }, 2000);
    } else {
        document.getElementById("result").innerHTML = `
        <marquee behavior="scroll" direction="left" style="color: red">Tente novamente. Derrota.</marquee>
        `;
        setTimeout(function() {
            putzen();
        }, 2000);
    }
}

function putzen() {
    for (let index = 0; index < array.length; index++) {
        document.getElementById(array[index]).innerHTML = "."
        n = 0;
    }
}
