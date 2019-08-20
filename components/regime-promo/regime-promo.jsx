import './regime-promo.scss';
import ArticleSection from '../article-section/article-section';
import ButtonBase from '../button-base/button-base';
import LayoutPositioner from '../layout-positioner/layout-positioner';
import RegimeDaily from '../regime-daily/regime-daily';

export default function RegimePromo() {
    return (
        <ArticleSection className="regime-promo">
            <LayoutPositioner className="column__container column__container--space-between">
                <section className="column column--6-12 regime-promo__promo">
                    <p className="regime-promo__paragraph regime-promo__paragraph--letter">
                        Зависимости способствует неудовлетворённость жизнью или неорганизованный
                        режим дня. Больному на протяжении всего курса дают понять, что спиртное и
                        алкоголь делают жизнь чёрно-белой, а не помогает расслабиться.
                    </p>
                    <p className="regime-promo__paragraph">
                        Так же у нас имеется своя образовательная программа и проводятся сеансы
                        арт-терапии. Когда человек страдает от зависимости его окружение делится на
                        таких же зависимых и здоровых.
                    </p>
                    <p className="regime-promo__paragraph">
                        Первые побуждают употреблять дальше, а вторые это всячески порицают. В
                        результате больной чувствует себя одиноко и ему сложно самостоятельно
                        бороться с недугом. Реабилитация в нашем центре предусматривает групповое
                        взаимодействие с людьми которые борются и уже побороли зависимость. Это
                        укрепляет желание и даёт мощную мотивацию на дальнейшую борьбу.
                    </p>
                    <p className="regime-promo__paragraph">
                        Многие пациенты реабилитационного центра нашли в себе таланты о которых и
                        знать не знали и вернулись к нормальной жизни.{' '}
                        <span className="regime-promo__call">Взгляните на пример режима дня в нашем
                        центре:</span>
                    </p>
                    <ButtonBase className="regime-promo__call" tag="a" href="/contacts.html">
                        Связаться с нами
                    </ButtonBase>
                </section>
                <section className="column column--6-12">
                    <RegimeDaily />
                </section>
            </LayoutPositioner>
        </ArticleSection>
    );
};
