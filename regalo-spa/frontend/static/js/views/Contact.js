import AbstractView from "./AbstractView.js";

const selectorOptions = [
  { name: "Outro", value: "0" },
  { name: "Aposentadoria", value: "1" },
  { name: "Auxilio Acidente", value: "2" },
  { name: "Auxilio Doença", value: "3" },
  { name: "Auxilio Idoso", value: "4" },
  { name: "LOAS", value: "5" },
  { name: "Pensão por Morte", value: "6" },
  { name: "Período Rural", value: "7" },
  { name: "Revisão de Aposentadoria ou Benefício", value: "8" },
  { name: "Revisão da Vida Toda", value: "9" },
  { name: "Salário Maternidade", value: "10" },
];

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Fale Conosco | Regalo Assessoria");
  }

  async getHtml() {
    return `
        <div class="app-container">
          <h1 class="heading">Fale Conosco</h1>
          <div class="contact-page-container">
            <div class="contact-info">
              <div class="message">
                <h2>Entre em contato</h2>
                <p>Nos deixe uma mensagem. Vamos entrar em contato e esclarecer todas as suas dúvidas o mais rápido possível!</p>
                <h3>Onde nos encontrar?</h3>
              </div>
              <div class="box">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="white" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                </div>
                <div class="text">
                  <h3>Email</h3>
                  <p>contato@regaloassessoria.com.br</p>
                </div>
              </div>
              <div class="box">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="white" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                </div>
                <div class="text">
                  <h3>WhatsApp / Telefone</h3>
                  <p>+55 51 99635-9752</p>
                </div>
              </div>
              <div class="box">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="white" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </div>
                <div class="text">
                  <h3>Instagram</h3>
                  <p>@regalo.assessoria</p>
                </div>
              </div>
              <div class="box">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="white" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                </div>
                <div class="text">
                  <h3>Facebook</h3>
                  <p>@RegaloAssessoria</p>
                </div>
              </div>
              <div class="box">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="white" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
                </div>
                <div class="text">
                  <h3>Tik Tok</h3>
                  <p>@RegaloAssessoria</p>
                </div>
              </div>
            </div>
            <div class="contact-form">
              <h2>Envie uma mensagem</h2>
              <form>
                <div class=name-phone>
                  <div class="input-box">
                    <input type="text" name="" required="required">
                    <span>Nome</span>
                  </div>
                  <div class="input-box">
                    <input type="text" name="" required="required">
                    <span>Telefone</span>
                  </div>
                </div>
                <div class="input-box">
                  <input type="text" name="" required="required">
                  <span>E-mail</span>
                </div>
                <div class="input-box">
                  <select name="services" class="selector" required="required">
                    <option value="">Selecione uma área de interesse</option>
                    <option value="${selectorOptions[1].value}">${selectorOptions[1].name}</option>
                    <option value="${selectorOptions[2].value}">${selectorOptions[2].name}</option>
                    <option value="${selectorOptions[3].value}">${selectorOptions[3].name}</option>
                    <option value="${selectorOptions[4].value}">${selectorOptions[4].name}</option>
                    <option value="${selectorOptions[5].value}">${selectorOptions[5].name}</option>
                    <option value="${selectorOptions[6].value}">${selectorOptions[6].name}</option>
                    <option value="${selectorOptions[7].value}">${selectorOptions[7].name}</option>
                    <option value="${selectorOptions[8].value}">${selectorOptions[8].name}</option>
                    <option value="${selectorOptions[9].value}">${selectorOptions[9].name}</option>
                    <option value="${selectorOptions[10].value}">${selectorOptions[10].name}</option>
                    <option value="${selectorOptions[0].value}">${selectorOptions[0].name}</option>
                  </select>
                </div>
                <div class="input-box">
                  <textarea required="required"></textarea>
                  <span>Digite sua mensagem</span>
                </div>
                <div class="input-box">
                  <input type="submit" name="" value="Enviar">
                </div>
              </form>
            </div>
          </div>
        </div>
    `;
  }
}
