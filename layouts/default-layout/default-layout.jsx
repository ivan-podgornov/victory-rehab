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
                <meta name="google-site-verification" content="It7DPRm4hPurH2gThL9xtdiF0Wvi8IBEUioWD8ntJww" />
                <meta name="yandex-verification" content="585ba55e83b5c817" />
                <script type="text/javascript" >{`
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                    ym(55086022, "init", {
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true,
                            webvisor:true
                    });
                `}</script>
                <noscript>{`
                    <div><img src="https://mc.yandex.ru/watch/55086022" style="position:absolute; left:-9999px;" alt="" /></div>
                `}</noscript>
            </Head>
            <PageHeader />
            <main>{props.children}</main>
            <PageFooter />
        </React.Fragment>
    );
};
