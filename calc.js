const buttons = document.querySelectorAll("div");
buttons.forEach((el) => {
  const Bcss = el.style.backgroundColor;
  el.addEventListener("click", () => {
    el.style.opacity = "0.8";
    setTimeout(() => {
      el.style.opacity = "1";
    }, 100);
  });
});

const tablica = document.getElementById("tablica");
const operatory = document.querySelectorAll(".operator");
const liczby = document.querySelectorAll(".liczba");
const reset = document.getElementById("reset");
const wynik = document.querySelector(".wynik");

const obwynik = document.querySelector('.curNumber')
const znak = document.querySelector('.znak')
const pop_wynik = document.querySelector('.prevNumber1')

let result = '';


function liczbyp () {
    if(this.textContent === '.' && obwynik.innerHTML.includes('.')) return;
    if(this.textContent === '.' && obwynik.innerHTML === '') return obwynik.innerHTML = '.0'

    obwynik.innerHTML += this.textContent;
}



function dzialanie () {
    if(obwynik.innerHTML === '' && this.textContent ==='-'){
        obwynik.innerHTML = '-';
        return;
    }
     else if (obwynik.innerHTML === '') {
        return;
     }
     if(znak.innerHTML !== '') {
        wyn();
     }
     pop_wynik.innerHTML = obwynik.innerHTML;
     znak.innerHTML = this.textContent;
     obwynik.innerHTML ='';
}



function wyn () {
    if(pop_wynik.innerHTML === '' || obwynik.innerHTML === '') return;
    let a = Number(obwynik.innerHTML);
    let b = Number(pop_wynik.innerHTML);
    let operator = znak.innerHTML;
    switch(operator) {
        case '+':
        result = a + b;
        break;
        case '-':
        result = b - a;
        break;
        case '*':
        result = a * b;
        break;
        case '/':
        result = b / a;
        break;
    }
    obwynik.innerHTML = result;
    pop_wynik.innerHTML = '';
    znak.innerHTML = '';
    if(obwynik.innerHTML === '0'){
        obwynik.innerHTML='';
    }
}

function res () {
    result = '';
    obwynik.innerHTML = '';
    pop_wynik.innerHTML = '';
    znak.innerHTML = '';
}



operatory.forEach((button) => button.addEventListener('click', dzialanie))

wynik.addEventListener('click', wyn);

reset.addEventListener('click', res);

liczby.forEach((button) => {
    button.addEventListener('click', liczbyp)
})
