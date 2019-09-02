import './page-footer.scss';
import BrandLogo from '../brand-logo/brand-logo';
import ContactPhones from '../contact-phones/contact-phones';
import HowTo from '../how-to/how-to';
import LayoutPositioner from '../layout-positioner/layout-positioner';
import OurAdress from '../our-address/our-address';
import OurTeam from '../our-team/our-team';

export default function PageFooter() {
    return (
        <footer className="page-footer" role="contentinfo">
            <LayoutPositioner className="page-footer__content column__container column__container--space-between">
                <div className="column--4-12">
                    <BrandLogo className="page-footer__brand-logo" />
                    <ContactPhones
                        className="page-footer__contact-phones"
                        phones={['+38 (050) 835-14-83', '+38 (072) 104-35-35',]}
                    />
                    <OurAdress className="page-footer__our-address" />
                </div>
                <HowTo className="column--4-12 how-to--small page-footer__how-to" />
                <div className="column--4-12">
                    <OurTeam className="page-footer__our-team" />
                    <p className="page-footer__copyrights">
                        ©  Все права защищены<br />
                        <b>РЦ Виктори</b><br />
                        2017-2019
                    </p>
                </div>
            </LayoutPositioner>
        </footer>
    )
};
