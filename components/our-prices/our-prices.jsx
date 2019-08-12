import './our-prices.scss';
import ArticleSection from '../article-section/article-section';
import Heading from '../heading/heading';
import LayoutPositioner from '../layout-positioner/layout-positioner';

export default function OurPrices() {
    return (
        <ArticleSection className="article-section--dark-primary our-prices" tag="article">
            <LayoutPositioner className="column--6-12 column--center-aligned">
                <Heading level="2">Цена лечения</Heading>
                <p>
                    В своей работе мы используем индивидуальный подход, поэтому
                    стоимость реабилитации или другой услуги, которую предоставляет
                    центр, Вы можете узнать после первого приёма.
                </p>
            </LayoutPositioner>
        </ArticleSection>
    );
};
