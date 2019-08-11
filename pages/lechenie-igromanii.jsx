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

export default function PageLechenieIgromanii() {
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
                                    Лечение и реабилитация игромании
                                </Heading>
                            </header>
                            <p>
                                Центр реабилитации «Виктори» специализируется на лечении игромании -
                                {' '}болезни, которая влияет на жизнь человека не менее алкогольной
                                и наркотической зависимости.
                            </p>
                            <p>
                                На первый взгляд игромания может показаться детскими шалостями на
                                фоне вышеперечисленных зависимостей, но это мнение ошибочно.
                            </p>
                            <BaseImage src="/images/game-machine.jpg" alt="Игровые автоматы" />
                        </div>
                        <div className="column column--6-12">
                            <BaseImage src="/images/roulette.jpg" alt="Рулетка" />
                            <UsageEffects className="usage-effects--gambling">
                                На сегодняшний день, медицине известны случаи приченения вреда
                                близким во имя получения очередной игровой сессии. Игроманам, как и
                                людям страдающим от других привычек, справиться со своим недугом в
                                одиночку довольно сложно.
                            </UsageEffects>
                            <ImportantText>
                                <Heading level="3" tag="div">Их зависимость проявляется в:</Heading>
                                <ul className="treatment-addiction__list">
                                    <li>Потребности играть, даже если этому что-то мешает или препятствует;</li>
                                    <li>Агрессии, перепадах настроения;</li>
                                    <li>Концентрации на игровых событиях;</li>
                                    <li>Продумывании игровых действий;</li>
                                    <li>Преобладании виртуальности над реальностью.</li>
                                </ul>
                            </ImportantText>
                        </div>
                        <div className="column column--5-12 column__container--skip-heading_2">
                            <p>
                                <em>Игроман может страдать от компьютерных или азартных игр,а так же
                                от тотализатора.</em>
                            </p>
                            <p>
                                В итоге личность игромана постепенно отходит на второй план.
                                Наши специалисты готовы помочь побороть болезнь и убрать игры из
                                жизни больного. В курсе, основаном на программе «12 шагов»,
                                не предусмотрено медикаментозное вмешательство.
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
                            <Heading level="2">12 шагов — программа лечения игромании</Heading>
                            <ImportantText className="important-text--secondary container--skip-heading_2">
                                <Heading level="3" className="heading__accent">
                                    Успеху реабилитации способствуют следующие факторы:
                                </Heading>
                                <ul className="treatment-addiction__list">
                                    <li>
                                        Человек видит перед собой живые; примеры людей, поборовших
                                        зависимость;
                                    </li>
                                    <li>Чувствует единство с такими же, как и он;</li>
                                    <li>Получает поддержку профессиональных психологов;</li>
                                    <li>Социализация</li>
                                </ul>
                            </ImportantText>
                        </div>
                        <div className="column column--6-12">
                            <p>
                                Изначально, программа «12 шагов» была нацелена на борьбу с
                                алкоголизмом. Эта методика появилась почти сто лет назад. Через
                                время стало очевидно, что её можно использовать для борьбы с любым
                                видом зависимости. На данный момент методы и принципы программы,
                                используются повсеместно. Если у Вас есть непоколебимое желание
                                избавиться от тяги к играм, реабилитационный центр «Виктори» готов
                                оказать Вам помощь и значительно ускорить становление нормальной
                                жизни.
                            </p>
                            <p>
                                Важной в процессе курса становится помощь осознания зависимости.
                                Человек осознаёт, что победа над болезнью даёт ему толчок к здоровой
                                и полноценной жизни.
                            </p>
                            <ImportantText className="important-text--secondary column__container--skip-heading_2">
                                <Heading level="3" className="heading__accent">
                                    Целью курса является:
                                </Heading>
                                <ul className="treatment-addiction__list">
                                    <li>Научить больного любить реальную жизнь;</li>
                                    <li>Помочь ему стать полноценной частичкой общества;</li>
                                    <li>Помочь избегать срывов в будущем;</li>
                                </ul>
                                <ButtonBase className="button-base--inline" tag="a" href="/contacts">
                                    Связаться с нами
                                </ButtonBase>
                            </ImportantText>
                        </div>
                        <div className="column column--8-12 column--center-aligned">
                            <p>
                                Наши специалисты помогут больному осознать проблему и дадут
                                мотивацию к её решению. Нужно помочь человеку понять что послужило
                                причиной болезни. Часто ею становится отсутствие ярких моментов в
                                жизни. В реабилитационном курсе используются занятия в группах, как
                                действенный способ лечения. Под руководством опытного психолога,
                                такие занятия позитивно влияют на мироощущения и помогают поверить в
                                себя.
                            </p>
                        </div>
                    </LayoutPositioner>
                </ArticleSection>
            </TreatmentAddiction>
            <OurContacts />
        </DefaultLayout>
    );
};
