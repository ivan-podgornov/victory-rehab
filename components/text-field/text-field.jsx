import './text-field.scss';

export default function TextField(props) {
    const Tag = props.multi ? 'textarea' : 'input';
    const multiMod = props.multi ? 'text-field__input--multi' : '';
    const className = props.className;
    const inputProps = Object.assign({}, props);
    if (props.multi) inputProps.rows = 2;
    inputProps.className = '';

    delete inputProps.multi;

    return (
        <label className={classnames('text-field', className)}>
            <Tag
                {...inputProps}
                autoComplete="off"
                className={classnames('text-field__input', multiMod)}
                placeholder="п"
            />
            <span className="text-field__label">{props.label}</span>
            <div className="text-field__bottom-line"></div>
        </label>
    );
};
