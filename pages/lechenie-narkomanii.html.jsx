import Head from '@termite/components/head/head';
import ArticleSection from '../components/article-section/article-section';
import ButtonBase from '../components/button-base/button-base';
import BaseImage from '../components/base-image/base-image';
import DefaultLayout from '../layouts/default-layout/default-layout';
import Heading from '../components/heading/heading';
import ImportantText from '../components/important-text/important-text';
import LayoutPositioner from '../components/layout-positioner/layout-positioner';
import OurContacts from '../components/our-contacts/our-contacts';
import PagePromo from '../components/page-promo/page-promo';
import ServicesList from '../components/services-list/services-list';
import TreatmentAddiction from '../components/treatment-addiction/treatment-addiction';
import UsageEffects from '../components/usage-effects/usage-effects';
import WhyWe from '../components/why-we/why-we';

export default function PageLechenieNarkomanii() {
    const description = ''
        + 'Центр "Victory" предоставляет услуги по реабилитации накрозависимости '
        + 'в Луганске. Наши психологи в связке с родными и другими пациентами '
        + 'помогут Вам выздороветь. Получите бесплатную консультацию по телефону: '
        + '+38 (050) 835-14-83';
    const keywords = 'лечение, реабилитация, наркомания, Луганск';

    return (
        <DefaultLayout>
            <Head>
                <title>Лечение наркомании в Луганске</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <PagePromo heading="Наши услуги" headingLevel="2" headingTag="div">
                <ServicesList className="column column--8-12 services-list--right-aligned" />
            </PagePromo>
            <TreatmentAddiction>
                <ArticleSection>
                    <LayoutPositioner className="column__container column__container--space-between">
                        <div className="column column--5-12">
                            <header>
                                <Heading level="2" tag="h1">Лечение и реабилитация наркомании</Heading>
                            </header>
                            <p>
                                Наркомания - бич современного человечества. Всех разновидностей
                                препаратов не сосчитать и со временем их становится только больше.
                            </p>
                            <p>
                                Вред, наносимый наркотическими веществами описать сложно. Во-первых,
                                каждый вид наркотиков действует по-своему. Во-вторых, по мере
                                появления новых видов, возникают новые последствия. Всё же они имеют
                                общие характеристики:
                            </p>
                            <BaseImage src="/images/cigarette.jpg" alt="Сигарета" />
                        </div>
                        <div className="column column--6-12">
                            <BaseImage src="/images/addiction.jpg" alt="Шприц" />
                            <UsageEffects
                                className="usage-effects--addiction treatment-addiction__list"
                                tag="ul"
                            >
                                <li>Разрушают личность;</li>
                                <li>Ведут к зависимости, как физической, так и психологической;</li>
                                <li>Ухудшают способности мозга;</li>
                                <li>
                                    Разрушают внутренние органы. Особенно страдают сердце, почки и
                                    печень.
                                </li>
                            </UsageEffects>
                            <ImportantText>
                                <p>
                                    На первый взгляд этот список безобиден, по сравнению с тем, что
                                    вызывают тяжелые наркотики. Но этот список является минимумом.
                                </p>
                                <p>
                                    Но для разрушения жизней близких и смерти больного в раннем
                                    возрасте большего и не требуется. Именно поэтому наркомания
                                    требует лечения.
                                </p>
                            </ImportantText>
                        </div>
                        <div className="column column--5-12 column__container--skip-heading_2">
                            <p>
                                Самым правильным решением станет детоксикация (если необходимо)
                                и реабилитация. Наше лечение не предусматривает использования
                                медикаментов. Это будет особенно полезно больным, испытывающим
                                химическую зависимость. Потому что исключает переключение
                                зависимости на заменяющий препарат.
                            </p>
                            <p>
                                <em>Наш центр отправляет людей на детоксикацию в учреждения,
                                специализирующиеся на этом. После этого начинается восстановление
                                по 12-шаговой программе.</em>
                            </p>
                        </div>
                        <div className="column column--6-12 column__container--skip-heading_2">
                            <WhyWe className="why-we--small" />
                        </div>
                    </LayoutPositioner>
                </ArticleSection>
                <ArticleSection className="treatment-addiction__dark article-section--dark-primary">
                    <LayoutPositioner className="column__container column__container--space-between">
                        <div className="column column--5-12">
                            <Heading level="2">12 шагов — программа лечения наркомании</Heading>
                            <ImportantText className="important-text--secondary container--skip-heading_2">
                                <Heading level="3" className="heading__accent">
                                    Данный способ успешен из-за совокупности факторов:
                                </Heading>
                                <ul className="treatment-addiction__list">
                                    <li>Перед глазами пример уже реабилитирующихся людей.</li>
                                    <li>Общение с опытными психологами.</li>
                                    <li>Единство с друзьями при выздоровлении.</li>
                                    <li>Возможность получить позитивные изменения в жизни.</li>
                                    <li>Социализация</li>
                                </ul>
                            </ImportantText>
                        </div>
                        <div className="column column--6-12">
                            <p>
                                В реабилитационном центре «Виктори» работают профессионалы способные
                                помочь отказаться от наркотиков. Мы работаем по адаптированной
                                программе «12 шагов». Этот курс реабилитации был разработан в
                                Америке, штат Миннесота, почти 100 лет назад. Всё это время,
                                программа изменялась и дорабатывалась. Сегодня, «12 шагов» известна
                                во всём мире, как способ вылечить наркозависимость.
                            </p>
                            <p>
                                Основана программа на признании больным проблемы и постоянной
                                мотивации решить её. Нужно помочь человеку понять что послужило
                                причиной болезни. Часто ею становятся давно полученные травмы. В
                                реабилитационном курсе используются занятия в группах, как
                                действенный способ лечения. Под руководством с опытного психолога,
                                такие занятия позитивно влияют на мироощущения и помогают поверить в
                                себя.
                            </p>
                            <ImportantText className="important-text--secondary column__container--skip-heading_2">
                                <Heading level="3" className="heading__accent">
                                    Наша программа поможет Вам:
                                </Heading>
                                <ul className="treatment-addiction__list">
                                    <li>Научиться жить без применения наркотиков;</li>
                                    <li>Наладить взаимоотношения в семье и на работе;</li>
                                    <li>Навсегда побороть зависимость.</li>
                                </ul>
                                <ButtonBase className="button-base--inline" tag="a" href="/contacts.html">
                                    Связаться с нами
                                </ButtonBase>
                            </ImportantText>
                        </div>
                    </LayoutPositioner>
                </ArticleSection>
            </TreatmentAddiction>
            <OurContacts />
        </DefaultLayout>
    );
};
