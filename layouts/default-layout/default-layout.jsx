import './default-layout.scss';
import Head from '@termite/components/head/head';
import PageHeader from '../../components/page-header/page-header';
import PageFooter from '../../components/page-footer/page-footer';

export default function DefaultLayout(props) {
    return (
        <React.Fragment>
            <Head>
                <html lang="ru" />
                <body className="page" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            </Head>
            <PageHeader />
            <main>{props.children}</main>
            <PageFooter />
        </React.Fragment>
    );
};
