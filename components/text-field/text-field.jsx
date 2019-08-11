import './text-field.scss';

export default function TextField(props) {
    const Tag = props.rows ? 'textarea' : 'input';
    const multiMod = props.rows ? 'text-field__input--multi' : '';
    const className = props.className;

    return (
        <label className={classnames('text-field', className)}>
            <Tag
                {...props}
                className={classnames('text-field__input', multiMod)}
                placeholder={props.label}
            />
            <span className="text-field__label">{props.label}</span>
            <div className="text-field__bottom-line"></div>
        </label>
    );
};
