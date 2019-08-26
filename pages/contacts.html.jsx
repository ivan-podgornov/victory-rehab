import Head from '@termite/components/head/head';
import DefaultLayout from '../layouts/default-layout/default-layout';
import OurContacts from '../components/our-contacts/our-contacts';
import PagePromo from '../components/page-promo/page-promo';

export default function PageContacts() {
    return (
        <DefaultLayout>
            <Head>
                <title>Контакты</title>
            </Head>
            <PagePromo heading="Контакты" headingLevel="2" headingTag="h1" />
            <OurContacts heading="Реабилитационный центр «Виктори»" />
        </DefaultLayout>
    );
};
