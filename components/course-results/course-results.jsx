import './course-results.scss';
import ArticleSection from '../article-section/article-section';
import ButtonBase from '../button-base/button-base';
import Heading from '../heading/heading';
import HowTo from '../how-to/how-to';
import LayoutPositioner from '../layout-positioner/layout-positioner';

export default function CourseResults(props) {
    return (
        <ArticleSection className="course-results">
            <LayoutPositioner className="column__container column__container--space-between course-results__content">
                <Heading className="column course-results__heading" level="2">
                    <span className="course-results__heading-text">
                        Результаты прохождения программы реабилитации
                    </span>
                </Heading>
                <section className="column column--4-12">
                    <p className="course-results__intro">
                        Результатом прохождения всех этапов программы является:
                    </p>
                    <ul className="course-results__list">
                        <li className="course-results__item">
                            Знание клиентом концепции заболевания;
                        </li>
                        <li className="course-results__item">
                            Прекращение употребления с тенденцией на <strong>долгосрочную</strong>
                            {' '}ремиссию;
                        </li>
                        <li className="course-results__item">
                            Умение <strong>самостоятельно</strong> организовывать личную
                            профилактику срыва;
                        </li>
                        <li className="course-results__item">
                            Наличие <strong>эффективного</strong> и <strong>индивидуального</strong>
                            {' '}плана выздоровления.
                        </li>
                    </ul>
                    <ButtonBase className="column course-results__contact" href="/contacts.html" tag="a">
                        Связаться с нами
                    </ButtonBase>
                </section>
                <section className="column column--2-12">
                    <p className="course-results__paragraph course-results__paragraph--small">
                        Данные знания, при условии их интеграции в свою жизнь, помогают
                        противостоять употреблению, находясь в нынешней социальной среде.
                    </p>
                    <p className="course-results__paragraph course-results__paragraph--important">
                        Благодаря по-новому сформированному опыту, участник программы приобретает
                        навык переживать трудности и удачи, оставаясь трезвым.
                    </p>
                </section>
                <HowTo className="course-results__how-to how-to--single column column--5-12" />
            </LayoutPositioner>
        </ArticleSection>
    );
};
