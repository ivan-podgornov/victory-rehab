import './page-footer.scss';
import LayoutPositioner from '../layout-positioner/layout-positioner';

export default function PageFooter() {
    return (
        <footer className="page-footer" role="contentinfo">
            <LayoutPositioner className="page-footer__content">
                <span>
                    © РЦ Виктори, 2017-2019 / Разработка и поддержка:{' '}
                    <a className="page-footer__link" href="https://vk.com/id131691940">Иван Подгорнов</a>
                </span>
                <a
                    className="page-footer__scroll-top"
                    href="#page-header"
                    tabIndex="-1"
                    aria-hidden="true"
                >&lt;</a>
            </LayoutPositioner>
        </footer>
    )
};
