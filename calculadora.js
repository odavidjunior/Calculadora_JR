console.log("Seja Bem Vindo !!!");

let display = document.getElementById('display');

function clr() {
    display.value = null;
}

function del() {
    display.value = display.value.slice(0, -1)
}

function additm(Num) {
    display.value += Num;
}

function equal() {
    display.value = eval(display.value);
}