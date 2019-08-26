class ReviewPropose {
    /**
     * @constructor
     * @param {HTMLFormElement} element
     */
    constructor(element) {
        element.addEventListener('submit', this.OnSubmit.bind(this));
    }

    /**
     * @private
     * @param {Event} event
     * @param {HTMLFormElement} event.target
     * @returns {Promise<void>}
     */
    async OnSubmit(event) {
        event.preventDefault();
        const query = event.target.elements.query.value;
        const operationType = event.target.elements.operationType.value;
        const variables = {
            name: event.target.elements['variables[name]'].value,
            phone: event.target.elements['variables[phone]'].value,
            text: event.target.elements['variables[text]'].value,
        };

        const response = await this.createReview({ query, operationType, variables });
        alert(response);
    }

    /**
     * Создаёт новый отзыв
     * @param {Object} options
     * @returns {Promise<String>}
     */
    async createReview(options) {
        const response = await fetch('/api', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(options),
        });

        const body = await response.json();
        return body.data[options.operationType];
    }
}

[...document.querySelectorAll('.review-propose__form')]
    .forEach((element) => new ReviewPropose(element));
