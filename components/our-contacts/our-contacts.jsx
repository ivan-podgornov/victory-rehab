import './our-contacts.scss';
import ArticleSection from '../article-section/article-section';
import Heading from '../heading/heading';
import LayoutPositioner from '../layout-positioner/layout-positioner';
import WriteUs from '../write-us/write-us';

export default function OurContacts(props) {
    return (
        <ArticleSection className="our-contacts">
            <LayoutPositioner className="our-contacts__content column__container column__container__space-between">
                <div className="column column--7-12">
                    <Heading tag={props.heading ? 'div' : 'h2'} level="2">
                        {props.heading || (
                            <span>
                                Есть вопросы?<br />
                                Звоните прямо <span className="heading__accent">сейчас!</span>
                            </span>
                        )}
                    </Heading>
                    <ul className="our-contacts__contact our-contacts__contact--tels column__container--skip-heading_1">
                        <li className="our-contacts__tel-item">
                            <a className="our-contacts__tel" href="tel:+380508351483">
                                +38 (050) 835-14-83
                            </a>
                        </li>
                        <li className="our-contacts__tel-item">
                            <a className="our-contacts__tel" href="tel:+380721043535">
                                +38 (072) 104-35-35
                            </a>
                        </li>
                        <li className="our-contacts__tel-item">
                            <a className="our-contacts__tel" href="tel:+380958912910">
                                +38 (095) 891-29-10
                            </a>
                        </li>
                        <li className="our-contacts__tel-item">
                            <a className="our-contacts__tel" href="tel:+380721044646">
                                +38 (072) 104-46-46
                            </a>
                        </li>
                    </ul>
                    <address className="our-contacts__contact our-contacts__contact--location column__container--skip-heading_1">
                        91000, г. Луганск<br />
                        ул. Вознесенская 22<br />
                        с 9.00 до 18.00, без выходных
                    </address>
                </div>
                <WriteUs className="column column--4-12 our-contacts__write-us" />
            </LayoutPositioner>
        </ArticleSection>
    );
};
