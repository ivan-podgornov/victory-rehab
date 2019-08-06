import './page-header.scss';
import BrandLogo from '../brand-logo/brand-logo';
import LayoutPositioner from '../layout-positioner/layout-positioner';
import MenuToggler from '../menu-toggler/menu-toggler';
import SiteMenu from '../site-menu/site-menu';

export default function PageHeader() {
    return (
        <header className="page-header">
            <LayoutPositioner className="page-header__content">
                <BrandLogo />
                <MenuToggler />
                <SiteMenu />
            </LayoutPositioner>
        </header>
    );
};
