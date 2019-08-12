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
                        <a className="site-menu__link" href="/lechenie-narkomanii.html">Наши услуги</a>
                    </li>
                    <li className="site-menu__item">
                        <a className="site-menu__link" href="/about.html">О нас</a>
                    </li>
                    <li className="site-menu__item">
                        <a className="site-menu__link" href="/reviews.html">Отзывы</a>
                    </li>
                    <li className="site-menu__item">
                        <a className="site-menu__link" href="/contacts.html">Контакты</a>
                    </li>
                </ul>
                <label className="site-menu__hider" htmlFor="site-menu" aria-hidden="true"></label>
            </nav>
        </React.Fragment>
    );
};
