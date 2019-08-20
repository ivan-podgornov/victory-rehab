import './regime-daily.scss';
import regime from './regime.json';

export default function RegimeDaily(props) {
    return (
        <section className={classnames('regime-daily', props.className)}>
            <div className="regime-daily__day">Понедельник</div>
            <input
                className="regime-daily__toggler"
                id="regime-daily__toggler"
                type="checkbox"
                tabIndex="-1"
                aria-hidden
            />
            <ul className="regime-daily__list">
                {Object.entries(regime['Понедельник']).map(([time, plan]) => (
                    <li className="regime-daily__item" key={time}>
                        <span className="regime-daily__time">
                            <span className="regime-daily__from">{time.match(/^\d\d:\d\d/)[0]}</span>
                            <span className="regime-daily__to">{time.match(/\d\d:\d\d$/)[0]}</span>
                        </span>
                        <span className="regime-daily__plan">{plan}</span>
                    </li>
                ))}
            </ul>
            <label className="regime-daily__show" htmlFor="regime-daily__toggler"></label>
        </section>
    );
};
