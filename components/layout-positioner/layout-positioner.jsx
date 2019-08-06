import './layout-positioner.scss';

export default function LayoutPositioner(props) {
    const Tag = props.tag || 'div';

    return (
        <Tag className={classnames('layout-positioner', props.className)}>
            {props.children}
        </Tag>
    );
};
