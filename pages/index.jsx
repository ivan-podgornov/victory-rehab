import Head from '@termite/components/head/head';
import ArticleSection from '../components/article-section/article-section';
import ButtonBase from '../components/button-base/button-base';
import CourceResults from '../components/course-results/course-results';
import DefaultLayout from '../layouts/default-layout/default-layout';
import FirstScreen from '../components/first-screen/first-screen';
import Heading from '../components/heading/heading';
import LayoutPositioner from '../components/layout-positioner/layout-positioner';
import OurContacts from '../components/our-contacts/our-contacts';
import PagePromo from '../components/page-promo/page-promo';
import ReviewsPreview from '../components/reviews-preview/reviews-preview';
import WhyWe from '../components/why-we/why-we';

export default function PageIndex() {
    return (
        <DefaultLayout>
            <Head>
                <title>«Виктори» - лечение зависимости в Луганске</title>
            </Head>
            <PagePromo className="page-promo--block"><FirstScreen /></PagePromo>
            <article>
                <ArticleSection className="article-section--light-blue">
                    <LayoutPositioner>
                        <header>
                            <Heading level={1}>Лечение наркомании и алкоголизма</Heading>
                        </header>
                        <section>
                            <p className="column column--8-12 column--center-aligned">
                                Реабилитационный центр «Виктори», оказывает <strong>комплексное
                                лечение</strong> и <strong>сбалансированное
                                восстановление</strong> личности, лицам, имеющим сформированную
                                химическую зависимость к алкоголю, наркотикам и другим веществам,
                                изменяющим сознание.
                            </p>
                        </section>
                        <section>
                            <WhyWe />
                        </section>
                        <section className="column__container column__container--1-12">
                            <p className="column column--5-12 column--right-aligned">
                                Во всех этапах реабилитации Вашего родственника участвуют
                                и проводят <strong>индивидуальную</strong>, и <strong>групповую
                                работу</strong>: консультанты по химической зависимости,
                                психотерапевт, реабилитолог и социолог.
                            </p>
                            <p className="column column--5-12 column--left-aligned">
                                Не менее важным этапом в выздоровлении пациента, является работа{' '}
                                <strong>семейного психолога</strong> с родственниками,
                                ориентирующегося на терапию созависимых отношений в семье, членом
                                которой является клиент нашего реабилитационного центра.
                            </p>
                        </section>
                        <section className="column__container column__container--skip-heading_2">
                            <ButtonBase tag="a" href="/lechenie-narkomanii">
                                Узнать больше
                            </ButtonBase>
                        </section>
                    </LayoutPositioner>
                </ArticleSection>
                <CourceResults />
                <ReviewsPreview />
                <OurContacts />
            </article>
        </DefaultLayout>
    );
};
