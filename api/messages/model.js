import fetch from 'node-fetch';

export default class Message {
    /**
     * Отправляет сообщение и сохраняет в базе данных
     * @param {MessageInfo} messageInfo
     * @returns {Promise<String>}
     */
    static async send({ name, phone, text }) {
        const result = await this.sendSMS(`${name}:\n${text}\n${phone}`);

        return result
            ? 'Спасибо! Сообщение отправлено'
            : 'При отправке сообщения возникла ошибка. Попробуйте позже';
    }

    /**
     * @private Отправляет сообщение и возвращает true, если всё ок.
     * @param {String} message
     * @returns {Promise<Boolean>}
     */
    static async sendSMS(message) {
        const to = ['380954530298'];
        const response = await fetch('http://sms-fly.com/api/api.noai.php', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Authorization': 'Basic MzgwOTU0NTMwMjk4OmF5T2NvdHFlYm9ubzEyMw==',
                'Content-Type': 'application/xml',
            },
            body: '' +
                '<?xml version="1.0" encoding="utf-8"?>' +
                '<request>' +
                    '<operation>SENDSMS</operation>' +
                    '<message start_time="AUTO" end_time="AUTO" lifetime="4" rate="5" desc="description" type="single">' +
                        to.map((phone) => `<recipient>${phone}</recipient>`) +
                        `<body>${message}</body>` +
                    '</message>' +
                '</request>',
        });

        const body = await response.text();
        return body.includes('<state code="ACCEPT"');
    }
};
