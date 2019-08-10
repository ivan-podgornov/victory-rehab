import './site-menu.scss';

export default function SiteMenu(props) {
    return (
        <React.Fragment>
            <nav className={classnames('site-menu__container', props.className)}>
                <ul className="site-menu">
                    <li className="site-menu__item">
                        <a className="site-menu__link" href="/">Главная</a>
                    </li>
                    <li className="site-menu__item">
                        <a className="site-menu__link" href="/">Наши услуги</a>
                    </li>
                    <li className="site-menu__item">
                        <a className="site-menu__link" href="/">О нас</a>
                    </li>
                    <li className="site-menu__item">
                        <a className="site-menu__link" href="/">Отзывы</a>
                    </li>
                    <li className="site-menu__item">
                        <a className="site-menu__link" href="/">Контакты</a>
                    </li>
                </ul>
                <label className="site-menu__hider" htmlFor="site-menu" aria-hidden="true"></label>
            </nav>
        </React.Fragment>
    );
};
