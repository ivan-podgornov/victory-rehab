import DefaultLayout from '../layouts/default-layout/default-layout';
import Head from '@termite/head/head';
import LayoutPositioner from '../components/layout-positioner/layout-positioner';
import LoginForm from '../components/login-form/login-form';
import PagePromo from '../components/page-promo/page-promo';

export default function PageAdmin() {
    return (
        <DefaultLayout>
            <Head>
                <title>Панель администратора</title>
            </Head>
            <PagePromo heading="Панель администратора" headingLevel="2" headingTag="div" />
            <LayoutPositioner>
                <LoginForm />
            </LayoutPositioner>
        </DefaultLayout>
    );
};
