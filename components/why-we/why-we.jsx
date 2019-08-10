import './why-we.scss';

export default function WhyWe() {
    return (
        <ul
            className="why-we column__container column__container--skip-heading_2"
            aria-label="Почему мы"
        >
            <li className="why-we__item why-we__item--years">
                Более 8 лет успешной работы и совершенствования
            </li>
            <li className="why-we__item why-we__item--people">
                Более 500 человек обрели новый путь в жизни
            </li>
            <li className="why-we__item why-we__item--team">
                Более 20 квалифицированных сотрудников
            </li>
        </ul>
    );
};
