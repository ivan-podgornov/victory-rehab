import Head from '@termite/components/head/head';
import DefaultLayout from '../layouts/default-layout/default-layout';
import ArticleSection from '../components/article-section/article-section';
import LayoutPositioner from '../components/layout-positioner/layout-positioner';
import OurContacts from '../components/our-contacts/our-contacts';
import OurReviews from '../components/our-reviews/our-reviews';
import PagePromo from '../components/page-promo/page-promo';
import ReviewPropose from '../components/review-propose/review-propose';

export default function PageReviews() {
    return (
        <DefaultLayout>
            <Head>
                <title>Отзывы</title>
            </Head>
            <PagePromo heading="Отзывы" headingLevel="2" headingTag="h1" />
            <ArticleSection>
                <LayoutPositioner>
                    <OurReviews />
                </LayoutPositioner>
            </ArticleSection>
            <ReviewPropose />
            <OurContacts />
        </DefaultLayout>
    );
};
