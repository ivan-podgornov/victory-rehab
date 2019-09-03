import './our-team.scss';

export default function OurTeam(props) {
    return (
        <ul className={classnames('our-team', props.className)}>
            <li className="our-team__item">
                <a href="https://freelance.ru/udovletvoritelno" className="our-team__person" data-initial="П">
                    <span className="our-team__profession">Графический дизайнер</span>
                    <span className="our-team__name">Павел Симонов</span>
                </a>
            </li>
            <li className="our-team__item">
                <a href="https://vk.com/id131691940" className="our-team__person" data-initial="И">
                    <span className="our-team__profession">Разработка и поддержка</span>
                    <span className="our-team__name">Иван Подгорнов</span>
                </a>
            </li>
            <li className="our-team__item">
                <a href="https://vk.com/id188799423" className="our-team__person" data-initial="А">
                    <span className="our-team__profession">SEO продвижение</span>
                    <span className="our-team__name">Антон Бондаренко</span>
                </a>
            </li>
        </ul>
    );
};
