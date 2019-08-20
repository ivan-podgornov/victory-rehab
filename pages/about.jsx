import Head from '@termite/components/head/head';
import ArticleSection from '../components/article-section/article-section';
import DefaultLayout from '../layouts/default-layout/default-layout';
import Heading from '../components/heading/heading';
import LayoutPositioner from '../components/layout-positioner/layout-positioner';
import OurContacts from '../components/our-contacts/our-contacts';
import OurPrices from '../components/our-prices/our-prices';
import PagePromo from '../components/page-promo/page-promo';
import RegimePromo from '../components/regime-promo/regime-promo';
import Slider from '../components/slider/slider';
import WhatWeUse from '../components/what-we-use/what-we-use';

export default function PageAbout() {
    return (
        <DefaultLayout>
            <Head>
                <title>О нашем центре</title>
            </Head>
            <PagePromo heading="О нашем центре" headingLevel="2" headingTag="div" />
            <article>
                <ArticleSection>
                    <LayoutPositioner className="column__container">
                        <header className="column column--5-12">
                            <Heading level="2" tag="h1">
                                Реабилитационный центр «Виктори»
                            </Heading>
                        </header>
                        <section className="column column--5-12 column--left-aligned">
                            <p>
                                Реабилитационный центр «Виктори» специализируется на реабилитации
                                зависимых людей. Мы исключаем приём медикаментозных препаратов.
                                Благодаря чему, пациенты не рискуют сменить наркозависимость на
                                зависимость от метадона и подобного.
                            </p>
                            <p>
                                В нашем понимании, зависимость - это болезнь, связанная с духовным
                                состоянием. Причиной зависимости могут быть старые травмы или
                                отсутствие ярких моментов в жизни.
                            </p>
                        </section>
                        <Slider
                            className="column column--12-12 column__container--skip-heading_2"
                            items={[
                                'https://victorycentr.com/wp-content/uploads/2017/09/20160623_154752.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-01-6f5987cfe5722a74d93af3cfb28751068349bd18f0169d1ab168b462de499506-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-01-9aa5006643a3c5d982419279f686d8ee41826f3be6f97ffd77a75c59971368da-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-01-647e115bce7e7c947d4ae324cc84721d291923841f8a794b1bbcdea0281fb0c9-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-01-470e7711fd5464f6489ece703e31eb1814ada964ec3650a1ecbaf97ad4841da8-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-01-90150c04bb3f6af5b8bc57181a120ebedbd87f41e0c897ab9b0df41c00ad3067-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-01-eaf86fb55c1f84dbfc2ae4a76f488e05e88a46191cf0f73f803776b4f23af89c-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-04-4f1fc73c9d34f92ca8dc60b082b1cb10e7c57c2e681b66b215705477af4b6ad8-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-05-02a221c494796b07e0292cae9f5a303b226d5ba36fc4baa2db1a7ea390c4e297-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-05-7b997abf682d00b06f167087703d07f1bbdb27fb82e36a1ad6e7e2f469282bbe-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-05-8a64d083880c9fcdc47ad1b037f1a8006ae1c3580e59320e6137a4f1ca8980c2-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-05-9efc313cedd817de32b2c7d46250bfca715c8d69d67007a00e55c52a935ff57f-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-05-35aabbe6325bc2a4daebc0512211a6be3681f0162e79958aca55ba2aa8dd7c68-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-05-85adfa5cb93d21413a744b409cacd16f02e85c5705649487d044331221b139fe-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-05-190c7b0842577c8ec14435831917f9a4b7c183b0af31f26811afa9b046356a80-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-05-03078d294f70585acab85eea9f935ae2774f39cc6250cb96da11a9e0d4394b97-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-05-5599dcedba34d283b014da28760d941b28bcbf7263bc91b8db06caee49e8b475-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-05-274352e1eea0822da70f66ada168d026d235ab1796be660453ede96685288e47-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-05-4772480c15a93ddd7f8d1a62a25a572cc2533dbdbd033e906c635ffa343fc2f9-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-05-a59699893e3e34dc1048d5c0738de096bffa3d29cfcbd488f00dbbf592de2f34-V.jpg',
                                'https://victorycentr.com/wp-content/uploads/2017/09/image-0-02-05-d5373bfebcfc9f5c35137be393d55b43c7507c36ee8bfdd36cac0120ce525bac-V.jpg'
                            ]}
                        />
                        <section className="column column__container column__container--1-12">
                            <p className="column column--5-12 column--right-aligned">
                                В ходе реабилитации используется программа, которая берёт истоки в
                                Американском штате Миннесота и называется «12 шагов». Это программа,
                                использующая психо-социальные приёмы реабилитации. Она приводит к
                                успеху при желании человека побороть зависимость.
                            </p>
                            <p className="column column--5-12 column--left-aligned">
                                Так же, близкие пациента должны всячески помогать больному и с
                                терпением к нему относиться. Специалисты нашего центра оказывают
                                помощь людям с нарушениями психики и поведения. Мы реабилитируем
                                пациентов страдающих от химической и психологической зависимости.
                            </p>
                        </section>
                    </LayoutPositioner>
                </ArticleSection>
                <WhatWeUse />
                <RegimePromo />
                <OurPrices />
            </article>
            <OurContacts />
        </DefaultLayout>
    );
};
