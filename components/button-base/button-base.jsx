import './button-base.scss';

export default function ButtonBase(props) {
    const classes = ['button-base', props.className];
    const Tag = props.tag || 'button';

    return (
        <Tag {...props} className={classnames(...classes)}>
            {props.children}
        </Tag>
    );
};
