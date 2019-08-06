import './menu-toggler.scss';
import Icon from '@termite/components/icon/icon.jsx';

export default function MenuToggler(props) {
    return (
        <React.Fragment>
            <input
                className="site-menu__toggler menu-toggler__input"
                type="checkbox"
                id="site-menu"
                aria-hidden="true"
            />
            <label
                className={classnames('menu-toggler', props.className)}
                htmlFor="site-menu"
                aria-hidden="true"
            >
                <Icon name="menu" />
                <Icon name="close" />
            </label>
        </React.Fragment>
    );
};
