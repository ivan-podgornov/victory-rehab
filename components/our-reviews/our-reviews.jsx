import './our-reviews.scss';

export default function OurReviews() {
    return (
        <div className="our-reviews">
            <ul className="our-reviews__list column__container column__container--space-between">
                <li className="our-reviews__item column column--3-12">
                    <p className="our-reviews__text">
                        Спасибо, ребята, что я живу! Я воскресла, когда приехала в РЦ Виктори, я
                        научилась доверять, брать ответственность, общаться с людьми. Сейчас я в
                        хороших отношениях с семьей, мое здоровье идет на поправку, я работаю, строю
                        планы и иду к ним!
                    </p>
                    <span className="our-reviews__author">Анастасия Белан</span>
                </li>
                <li className="our-reviews__item column column--3-12">
                    <p className="our-reviews__text">
                        Спасибо большое центру за новый этап жизни, трезвость и знания, которые
                        получил!!! Я проходил много способов: бабок, дедок, пытался сам, максимум
                        хватало на пару месяцев, и снова болото! Если бы не Вы, скорей всего был бы
                        уже в за решёткой или в могиле!!!!Спасибо, что вы есть!!!!
                    </p>
                    <span className="our-reviews__author">Сергей</span>
                </li>
                <li className="our-reviews__item column column--3-12">
                    <p className="our-reviews__text">
                        Центр очень хороший, профессиональный и квалифицированный персонал, условия
                        нахождения я оценил на отлично! Благодарен Юрию и Александру за то что в
                        прямом смысле спасли моего друга!
                    </p>
                    <span className="our-reviews__author">Владислав Николаевич</span>
                </li>
                <li className="our-reviews__item column column--3-12">
                    <p className="our-reviews__text">
                        Огромное спасибо вашему центру за выздоровление сына
                    </p>
                    <span className="our-reviews__author">Кузнецов Владимир Иванович</span>
                </li>
            </ul>
        </div>
    );
};
