import sendSms from '../../assets/javascript/send-sms';

class WriteUs {
    /**
     * @constructor
     * @param {HTMLFormElement} element
     */
    constructor(element) {
        element.addEventListener('submit', this.OnSubmit.bind(this));
    }

    async OnSubmit(event) {
        event.preventDefault();
        const name = event.target.elements['variables[name]'].value;
        const phone = event.target.elements['variables[phone]'].value;
        const text = event.target.elements['variables[text]'].value;
        const result = await sendSms({ name, phone, text });
        alert(result);
    }
}

[...document.querySelectorAll('.write-us')]
    .forEach((element) => new WriteUs(element));
