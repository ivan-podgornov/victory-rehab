import Cookie from '../../assets/javascript/cookie';
import Marginizer from '../../assets/javascript/marginizer';

/**
 * @typedef {Object} Review
 * @property {String} name
 * @property {String} text
 * @property {String} [id]
 * @property {String} [phone]
 * @property {Boolean} [approved]
 */

class Reviews {
    /**
     * @constructor
     * @param {HTMLUListElement} element
     */
    constructor(element) {
        this.element = element;
        const loadMoreButton = this.renderLoadMoreButton();
        this.element.appendChild(loadMoreButton);
    }

    /**
     * @private Рендерит кнопку "Больше отзывов"
     * @returns {HTMLButtonElement}
     */
    renderLoadMoreButton() {
        const button = document.createElement('button');
        button.className = 'our-reviews__add-more';
        button.type = 'button';
        button.textContent = 'Больше отзывов';

        button.addEventListener('click', async (event) => {
            event.preventDefault();
            event.target.parentElement.removeChild(event.target);
            const reviews = await this.loadMore();
            this.add(reviews);
            Marginizer.marginize(this.element.querySelector('.our-reviews__list'));
        });

        return button;
    }

    /**
     * @private Подгружает ещё отзывы
     * @returns {Promise<Array<Review>>}
     */
    async loadMore() {
        const token = Cookie.get('token') || '';
        const response = await fetch('/api', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `query { reviews(token: "${token}") { id, name, text, phone, approved } }`,
            }),
        });

        const body = await response.json();
        return body.data.reviews;
    }

    /**
     * @private Добавляет указанные элементы к отзывам
     * @param {Array<Review>} reviews
     * @returns {Promise<NodeList>}
     */
    add(reviews) {
        const review = this.element.querySelector('.our-reviews__item');
        const newReviews = reviews.map((reviewInfo) => {
            const newReview = review.cloneNode(true);
            if (typeof reviewInfo.approved === 'boolean') this.renderAdminButtons(newReview, reviewInfo);
            newReview.querySelector('.our-reviews__text').textContent = reviewInfo.text;
            newReview.querySelector('.our-reviews__author').textContent = reviewInfo.name;
            return newReview;
        });
        const fragment = document.createDocumentFragment();
        newReviews.forEach((el) => fragment.appendChild(el));
        this.element.querySelector('.our-reviews__list').appendChild(fragment);
        return Promise.resolve(newReviews);
    }

    /**
     * @private Рендерит кнопки администратора
     * @param {HTMLElement} review
     * @param {Review} options
     * @returns {void}
     */
    renderAdminButtons(review, options) {
        if (options.approved === false) {
            const ok = document.createElement('button');
            ok.className = 'our-reviews__approve our-reviews__approve--ok';
            ok.type = 'button';
            ok.addEventListener('click', () => {
                this.approve(options.id, true);
                ok.parentElement.removeChild(ok);
            });
            review.appendChild(ok);
        }

        const close = document.createElement('button');
        close.className = 'our-reviews__approve our-reviews__approve--close';
        close.type = 'button';
        close.addEventListener('click', async () => {
            await this.approve(options.id, false);
            review.parentElement.removeChild(review);
            Marginizer.marginize(review.parentElement);
        });
        review.appendChild(close);
    }

    /**
     * @private Помечает отзыв как подтверждённый или наоборот
     * @param {String} id
     * @param {Boolean} ok
     * @returns {void}
     */
    async approve(id, ok) {
        const token = Cookie.get('token') || '';
        const response = await fetch('/api', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `mutation($token: String!, $id: String!, $ok: Boolean!) { approveReview(token: $token, id: $id, ok: $ok) }`,
                operationType: 'approveReview',
                variables: { token, id, ok },
            }),
        });

        const body = await response.json();
        alert(body.data.approveReview);
    }
}

[...document.querySelectorAll('.our-reviews')]
    .forEach((element) => new Reviews(element));
