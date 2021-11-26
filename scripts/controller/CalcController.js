class CalcController {

  constructor() {    
    this._locale = 'pt-BR';
    this._displayCalEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this._displayCalc = "0"
    this._currentDate;
    this.initialize();
    this.initButtonsEvents();
  }

  initialize(){
    this.setDisplayDateTime();
    setInterval(() => {
      this.setDisplayDateTime();
    }, 1000);

  }

  addEventListenerAll(element, events, fn) {

    events.split(' ').forEach(event => {
      element.addEventListener(event, fn, false);
    });
  }

  initButtonsEvents() {

    let buttons = document.querySelectorAll("#buttons > g, #parts > g");

    buttons.forEach((btn, index) => {
      this.addEventListenerAll(btn, "click drag", e => {

        let textBtn = btn.className.baseVal.replace("btn-", "");
          
        console.log(textBtn);
      });
      
    });
  }

  setDisplayDateTime(){
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {day: "2-digit", month: "long", year: "numeric"});
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  }

  get displayDate() {
    return this._dateEl.innerHTML;
  }

  set displayDate(value) {
    this._dateEl.innerHTML = value;
  }

  get displayTime() {
    return this._timeEl.innerHTML;
  }

  set displayTime(value) {
    this._timeEl.innerHTML = value;
  }

  get displayCalc() {
    return this._displayCalEl.innerHTML;
  }
  
  set displayCalc(value) {
    this._displayCalc = value;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(value) {
    this._currentDate = value;
  }
}