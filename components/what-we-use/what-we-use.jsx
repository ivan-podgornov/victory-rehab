import './what-we-use.scss';
import ArticleSection from '../article-section/article-section';
import Heading from '../heading/heading';
import LayoutPositioner from '../layout-positioner/layout-positioner';

export default function WhatWeUse() {
    return (
        <ArticleSection className="what-we-use">
            <LayoutPositioner className="column__container column__container--space-between">
                <section className="column column--3-12 what-we-use__text">
                    <p>
                        Если в результате ломки здоровье больного ухудшается, мы отправляем его на
                        детоксикацию.
                    </p>
                    <p>По её завершению мы продолжаем психологическую реабилитацию.</p>
                </section>
                <section className="column column--9-12">
                    <Heading className="what-we-use__heading" tag="h2" level={3}>
                        В своей работе мы используем:
                    </Heading>
                    <ul className="what-we-use__list column__container column__container--space-between">
                        <li className="what-we-use__item column column--4-12">
                            Индивидуальные и общие консультации с психологами.
                        </li>
                        <li className="what-we-use__item column column--4-12">
                            Гештальт-психотерапию и соц. поддержу;
                        </li>
                        <li className="what-we-use__item column column--4-12">
                            Эмотивно-рациональную психотерапию;
                        </li>
                        <li className="what-we-use__item column column--4-12">
                            Программу «12 Шагов» и терапевтическое сообщество;
                        </li>
                        <li className="what-we-use__item column column--4-12">
                            Когнитивно-бихевиоральный подход;
                        </li>
                        <li className="what-we-use__item column column--4-12">
                            Групповое взаимодействие;
                        </li>
                        <li className="what-we-use__item column column--4-12">
                            Семейную терапию;
                        </li>
                        <li className="what-we-use__item column column--4-12">
                            Улучшение мотивации;
                        </li>
                        <li className="what-we-use__item column column--4-12">
                            Кризисную интервенцию.
                        </li>
                    </ul>
                </section>
            </LayoutPositioner>
        </ArticleSection>
    );
};
