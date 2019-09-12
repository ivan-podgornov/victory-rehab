import './our-contacts.scss';
import ArticleSection from '../article-section/article-section';
import ContactPhones from '../contact-phones/contact-phones';
import Heading from '../heading/heading';
import LayoutPositioner from '../layout-positioner/layout-positioner';
import OurAddress from '../our-address/our-address';
import WriteUs from '../write-us/write-us';

export default function OurContacts(props) {
    return (
        <ArticleSection className="our-contacts">
            <LayoutPositioner className="our-contacts__content column__container column__container__space-between">
                <div className="column column--7-12">
                    <Heading tag={props.heading ? 'div' : 'h2'} level="2">
                        {props.heading || (
                            <span>
                                Есть вопросы?<br />
                                Звоните прямо <span className="heading__accent">сейчас!</span>
                            </span>
                        )}
                    </Heading>
                    <ContactPhones
                        className="contact-phones--wide column__container--skip-heading_1"
                        phones={[
                            '+38 (050) 835-14-83',
                            '+38 (072) 104-46-46',
                            '+38 (099) 372-92-78',
                            '+38 (072) 190-66-90',
                        ]}
                    />
                    <OurAddress className="our-address--wide column__container--skip-heading_1" />
                </div>
                <WriteUs className="column column--4-12 our-contacts__write-us" />
            </LayoutPositioner>
        </ArticleSection>
    );
};
