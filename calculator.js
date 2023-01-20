class calculator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.isOpen = false;
    this.shadowRoot.innerHTML = `
            <style>
                #container{
                    display: grid;
                    grid-template-columns: 70px 70px 70px 70px; 
                    grid-template-rows: 70px 70px 70px 70px 70px 70px; 
                    gap: 10px;
                    grid-template-areas:
                    "header header header header"
                    "oblicz oblicz oblicz oblicz"
                    "cyfr cyfr cyfr oblicz"
                    "cyfr cyfr cyfr oblicz"
                    "cyfr cyfr cyfr oblicz"
                    "cyfr cyfr cyfr oblicz";
                    justify-content: center;
                }
                #tablica{
                    background-color: #BAD7E9;
                    grid-column: 1/ -1;
                    border: none;
                    font-size: 30px;
                }
                div{
                    font-size: 30px;
                    background-color: #EB455F;
                    border: none;
                    font-weight: 700;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            </style>
                <section id="container">
                  <div id="tablica"></div>                                                            //currentNumber
                  <div class="operator" style="background-color: 13005A;">+</div>
                  <div class="operator" style="background-color: 13005A;">-</div>
                  <div class="operator" style="background-color: 13005A;">*</div>
                  <div class="operator" style="background-color: 13005A;">/</div>
                  <div id="wynik" style="grid-row: 3 / 7; grid-column: 4">=</div>
                  <div class="liczba" style="background-color: #FCFFE7;">7</div>
                  <div class="liczba" style="background-color: #FCFFE7;">8</div>
                  <div class="liczba" style="background-color: #FCFFE7;">9</div>
                  <div class="liczba" style="background-color: #FCFFE7;">4</div>
                  <div class="liczba" style="background-color: #FCFFE7;">5</div>
                  <div class="liczba" style="background-color: #FCFFE7;">6</div>
                  <div class="liczba" style="background-color: #FCFFE7;">1</div>
                  <div class="liczba" style="background-color: #FCFFE7;">2</div>
                  <div class="liczba" style="background-color: #FCFFE7;">3</div>
                  <div class="liczba" style="background-color: #FCFFE7;">0</div>
                  <div class="liczba" style="background-color: #FCFFE7;">.</div>
                  <div id="reset" style="background-color: #FCFFE7;">AC</div>
             </section>
        `;
    const buttons = this.shadowRoot.querySelectorAll(".btn");
    buttons.forEach((el) => {
      const Bcss = el.style.backgroundColor;
      el.addEventListener("click", () => {
        el.style.opacity = "0.8";
        setTimeout(() => {
          el.style.opacity = "1";
        }, 100);
      });
    });

    const tablica = this.shadowRoot.getElementById("tablica");
    const operatory = this.shadowRoot.querySelectorAll(".operator");
    const liczby = this.shadowRoot.querySelectorAll(".liczba");
    const reset = this.shadowRoot.getElementById("reset");
    const wynik = this.shadowRoot.getElementById("wynik");

    operatory.forEach((operato) => {
      operato.addEventListener("click", operator); // displaynumbers
    });

    liczby.forEach((liczbaa) => {
      liczbaa.addEventListener("click", liczba); // displaynumbers
    });

    wynik.addEventListener("click", wyn);
    reset.addEventListener("click", res);

    const operator = () => {
      if (tablica.innerHTML === "" && this.textContent === "-") {
        tablica.innerHTML = "-";
        return;
      } else if (tablica.innerHTML === "") {
        return;
      }
    };

    const liczba = () => {
      if (this.textContent === "." && tablica.innerHTML.includes(".")) {
        return;
      }
      if (this.textContent === "." && tablica.innerHTML.includes("")) {
        return (tablica.innerHTML = ".0");
      }
      tablica.innerHTML += this.textContent;
    };

    const wyn = () => {
      let a = Number(tablica.innerHTML);
    };

    const res = () => {};
  }
}
customElements.define("uc-calculator", calculator);

// operatory.forEach((op) => {
//   op.addEventListener("click", () => {
//     const a = $(wynik).text();
//     const b = a.length;
//     if (
//       a[b - 1] == "-" ||
//       a[b - 1] == "+" ||
//       a[b - 1] == "*" ||
//       a[b - 1] == "/"
//     ) {
//       window.alert("nie możesz dać 2 operatorów pod rząd");
//       wynik.textContent = wynik.textContent;
//     } else {
//       console.log(a[b - 1]);
//       wynik.textContent += op.textContent;
//       console.log(wynik.textContent);
//     }
//   });
// });

// liczby.forEach((liczba) => {
//   let l = liczba.textContent;
//   liczba.addEventListener("click", () => {
//     wynik.textContent += l;
//     console.log(wynik.textContent);
//   });
// });

// wyn.addEventListener("click", () => {
//   let a = $(wynik).text().length;
//   let b = $(wynik).text();
//   let c = parseInt(b);
//   wynik.value = $(wynik).text();
//   console.log(b);
// });
