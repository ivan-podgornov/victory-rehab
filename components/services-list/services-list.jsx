import './services-list.scss';

export default function ServicesList(props) {
    return (
        <ul
            className={classnames('services-list', props.className)}
            aria-label="Наши услуги"
        >
            <li className="services-list__item">
                <a
                    className="services-list__link services-list__link--addiction"
                    href="/lechenie-narkomanii.html"
                >
                    Лечение наркомании
                </a>
            </li>
            <li className="services-list__item">
                <a
                    className="services-list__link services-list__link--alco"
                    href="/lechenie-alkogolizma.html"
                >
                    Лечение алкоголизма
                </a>
            </li>
            <li className="services-list__item">
                <a
                    className="services-list__link services-list__link--gambling"
                    href="/lechenie-igromanii.html"
                >
                    Лечение игромании
                </a>
            </li>
        </ul>
    );
};
