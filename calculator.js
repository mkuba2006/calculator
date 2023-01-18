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
                input{
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
                    <input type="number" id="tablica"/>
                    <div id="btn" style="background-color: 13005A;">+</div>
                    <div id="btn" style="background-color: 13005A;">-</div>
                    <div id="btn" style="background-color: 13005A;">x</div>
                    <div id="btn" style="background-color: 13005A;">/</div>
                    <div id="btn" style="grid-row: 3 / 7; grid-column: 4">=</div>
                    <div id="btn" style="background-color: #FCFFE7;">7</div>
                    <div id="btn" style="background-color: #FCFFE7;">8</div>
                    <div id="btn" style="background-color: #FCFFE7;">9</div>
                    <div id="btn" style="background-color: #FCFFE7;">4</div>
                    <div id="btn" style="background-color: #FCFFE7;">5</div>
                    <div id="btn" style="background-color: #FCFFE7;">6</div>
                    <div id="btn" style="background-color: #FCFFE7;">1</div>
                    <div id="btn" style="background-color: #FCFFE7;">2</div>
                    <div id="btn" style="background-color: #FCFFE7;">3</div>
                    <div id="btn" style="background-color: #FCFFE7;">0</div>
                    <div id="btn" style="background-color: #FCFFE7;">.</div>
                    <div id="btn" style="background-color: #FCFFE7;">AC</div>
                </section>
        `;
    const buttons = this.shadowRoot.querySelectorAll("#btn");
    buttons.forEach((el) => {
      const Bcss = el.style.backgroundColor;
      el.addEventListener("click", () => {
        el.style.opacity = "0.8";
        setTimeout(() => {
          el.style.opacity = "1";
        }, 100);
      });
    });
  }
}
customElements.define("uc-calculator", calculator);
