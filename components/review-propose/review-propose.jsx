import './review-propose.scss';
import ArticleSection from '../article-section/article-section';
import ButtonBase from '../button-base/button-base';
import Heading from '../heading/heading';
import LayoutPositioner from '../layout-positioner/layout-positioner';
import ModalWindow from '../modal-window/modal-window';
import TextField from '../text-field/text-field';

export default function ReviewPropose() {
    return (
        <ArticleSection className="article-section--dark-primary review-propose__container">
            <LayoutPositioner className="review-propose column column--6-12 column--center-aligned">
                <Heading className="review-propose__heading" level="2" tag="div">
                    Поделитесь своим опытом реабилитации в нашем центре!
                </Heading>
                <ButtonBase tag="label" htmlFor="review-propose">Оставить отзыв</ButtonBase>
                <ModalWindow name="review-propose" heading="Оставить отзыв">
                    <form className="column__container column__container--space-between" action="#" method="POST">
                        <TextField className="text-field--dark column column--6-12" label="Имя" name="name" type="text" />
                        <TextField className="text-field--dark column column--6-12" label="Телефон" name="phone" type="tel" />
                        <TextField className="text-field--dark column column--6-12" label="Ваша почта" name="email" type="text" />
                        <TextField className="text-field--dark column column--6-12" label="Город" name="city" type="text" />
                        <TextField className="text-field--dark column" label="Сообщение" name="message" rows="4" />
                        <ButtonBase className="column" type="submit">Отправить</ButtonBase>
                    </form>
                </ModalWindow>
            </LayoutPositioner>
        </ArticleSection>
    );
};
