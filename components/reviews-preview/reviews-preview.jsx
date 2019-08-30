import './reviews-preview.scss';
import ArticleSection from '../article-section/article-section';
import Heading from '../heading/heading';
import LayoutPositioner from '../layout-positioner/layout-positioner';

export default function ReviewsPreview() {
    return (
        <ArticleSection className="article-section--dark-primary reviews-preview" tag="noindex" style="display: block;">
            <LayoutPositioner className="reviews-preview__content">
                <Heading level={2}>Измененные жизни</Heading>
                {[1, 2, 3].map((number, i) => <ReviewInput key={i} number={number} />)}
                <ul className="reviews-preview__list">
                    <li className="reviews-preview__item">
                        <p className="reviews-preview__text">
                            Спасибо, ребята, что я живу! Я воскресла, когда приехала в РЦ Виктори, я
                            научилась доверять, брать ответственность, общаться с людьми. Сейчас я в
                            хороших отношениях с семьей, мое здоровье идет на поправку, я работаю,
                            строю планы и иду к ним!
                        </p>
                        <span className="reviews-preview__author">Анастасия Белан</span>
                    </li>
                    <li className="reviews-preview__item">
                        <p className="reviews-preview__text">
                            Центр очень хороший, профессиональный и квалифицированный персонал,
                            условия нахождения я оценил на отлично!!! Благодарен Юрию и Александру
                            за то что в прямом смысле спасли моего друга!!!
                        </p>
                        <span className="reviews-preview__author">Владислав Николаевич</span>
                    </li>
                    <li className="reviews-preview__item">
                        <p className="reviews-preview__text">
                            Огромное спасибо вашему центру за выздоровление сына
                        </p>
                        <span className="reviews-preview__author">Кузнецов Владимир Иванович</span>
                    </li>
                </ul>
                <div className="reviews-preview__labels" aria-hidden="true">
                    {[1, 2, 3].map((number) => (
                        <label
                            className="reviews-preview__label"
                            key={number}
                            htmlFor={`reviews-slider-${number}`}
                        >{number}</label>
                    ))}
                </div>
            </LayoutPositioner>
        </ArticleSection>
    );
};

function ReviewInput(props) {
    return (
        <React.Fragment>
            <input
                className="reviews-preview__input"
                type="radio"
                defaultChecked={props.number === 1}
                name="reviews-preview-slider"
                id={`reviews-slider-${props.number}`}
                tabIndex="-1"
                aria-hidden="true"
            />
        </React.Fragment>
    );
}
