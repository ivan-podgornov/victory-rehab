import './usage-effects.scss';

export default function UsageEffects(props) {
    const Tag = props.tag || 'div';

    return (
        <Tag className={classnames('usage-effects', props.className)}>
            {props.children}
        </Tag>
    );
};
