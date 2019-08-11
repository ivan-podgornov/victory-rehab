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

export default function PageLechenieAlkogolizma() {
    return (
        <DefaultLayout>
            <PagePromo heading="Наши услуги" headingLevel="2" headingTag="div">
                <ServicesList className="column column--8-12 services-list--right-aligned" />
            </PagePromo>
            <TreatmentAddiction>
                <ArticleSection>
                    <LayoutPositioner className="column__container column__container--space-between">
                        <div className="column column--5-12">
                            <header>
                                <Heading level="2" tag="h1">
                                    Лечение алкоголизма в Луганске
                                </Heading>
                            </header>
                            <p>
                                Сегодня, в современном Луганске, большое количество жителей,
                                покорено смертельным заболеванием, название которому - алкоголизм.
                            </p>
                            <p>
                                Алкоголизм является хроническим, смертельным, рецидивирующим и
                                прогрессирующим заболеванием, которое разрушает весь организм, все
                                его сферы жизнедеятельности: биологическую, психологическую,
                                социальную и духовную.
                            </p>
                            <BaseImage src="/images/alcohol.jpg" alt="Человек держит стака с водкой" />
                        </div>
                        <div className="column column--6-12">
                            <BaseImage src="/images/sad-boy.jpg" alt="Алкоголик спит рядом с бутылкой водки" />
                            <UsageEffects className="usage-effects--alcohol">
                                <em>В наше время предлагается большое количество медицинских и не
                                    медицинских методик, но не одна из них не способна излечить
                                    алкоголика до тех пор, пока он не изъявит желание выздороветь.
                                </em>
                            </UsageEffects>
                            <ImportantText>
                                <p>
                                    Единственным условием для качественного лечения и восстановления
                                    организма, является личное желание алкоголика бросить пить.
                                </p>
                                <p>
                                    Необходимо сказать, что полноценный процесс реабилитации
                                    осуществляется в синергии трёх сил: команда специалистов,
                                    родственников и самого зависимого.
                                </p>
                            </ImportantText>
                        </div>
                        <div className="column column--5-12 column__container--skip-heading_2">
                            <p>
                                Успех зависит от единства поставленной цели, достичь одинаковый
                                результат. Если каждая из сил сфокусирована на выздоравливании,
                                то эта «связка» работает как единый, слаженный механизм.
                            </p>
                            <p>
                                В обратном случае данное мероприятие обречено на возврат зависимого
                                к употреблению.
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
                            <Heading level="2">Трудности в лечении алкоголизма</Heading>
                            <ImportantText className="important-text--secondary container--skip-heading_2">
                                <p>
                                    В трезвой же жизни, всё обстоит ровно наоборот. Мы убеждены и
                                    верим, что только искренняя честность перед самим собой и
                                    принятие своего бессилия перед зависимостью способны запустить
                                    механизм, который называется «выздоровление».
                                </p>
                                <p>
                                    <em>Именно поэтому, квалифицированные специалисты работают над
                                    внутренними изменениями пациента, не подавляя его волю.</em>
                                </p>
                            </ImportantText>
                        </div>
                        <div className="column column--6-12">
                            <ul className="treatment-addiction__list">
                                <li>
                                    Доступность, приемлемость и традиционность алкогольных напитков
                                    в нашем, социально-культурном обществе. Комплекс
                                    восстановительных мероприятий, который предлагает наша команда,
                                    ориентирован на формировании пациентом навыка противостоять
                                    агрессивной алкогольной среде. Не испытывать при этом чувств,
                                    что «жизнь пошла под откос» и «всё потеряно».
                                </li>
                                <li>
                                    Отрицание зависимого, во время принятия решения поступить на
                                    курс лечения и отрицание необходимости полноценного комплексного
                                    лечения. Отрицание для зависимого - это вполне нормальная, даже
                                    жизненно необходимая особенность восприятия мира. Отрицание
                                    помогает эмоционально справиться и пережить все те ужасающие
                                    трудности, которые встречает зависимый из-за своего, потерявшего
                                    контроль, употребления.
                                </li>
                            </ul>
                            <ImportantText className="important-text--secondary column__container--skip-heading_2">
                                <p>
                                    Структура реабилитации организована таким образом, чтобы
                                    зависимый самостоятельно научился идентифицировать личностные
                                    проявления болезни и умел составить план действий для своего
                                    выздоровления.
                                </p>
                                <ButtonBase className="button-base--inline" tag="a" href="/contacts">
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
