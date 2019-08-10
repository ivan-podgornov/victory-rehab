import './how-to.scss';

/**
 * How to component
 * @param {React.Props} props
 * @param {String} props.tag
 */
export default function HowTo(props) {
    const Tag = props.tag || 'div';

    return (
        <Tag className={classnames('how-to', props.className)}>
            <span className="how-to__heading">Центр реабилитации «Виктори» в Луганске</span>
            <p className="how-to__text">
                Воспользоваться услугами или получить консультацию специалиста, Вы можете:
            </p>
            <ul className="how-to__list">
                <li className="how-to__item">Заполнив заявку на сайте.</li>
                <li className="how-to__item">Связавшись с нами по телефону.</li>
                <li className="how-to__item">Обратившись в офис лично.</li>
            </ul>
        </Tag>
    );
};
