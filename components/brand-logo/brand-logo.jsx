import './brand-logo.scss';
import logo from './logo.png';

export default function BrandLogo(props) {
    return (
        <a className={classnames('brand-logo', props.className)} href="/">
            <img
                className="brand-logo__image"
                alt="Логотип центра Виктори"
                src={logo}
            />
        </a>
    );
};
