import './heading.scss';

/**
 * Heading Component
 * @param {React.Props} props
 * @param {String} props.tag
 * @param {Number} props.level
 * @returns {React.Component<Heading>}
 */
export default function Heading(props) {
    const Tag = props.tag || `h${props.level}`;
    return (
        <Tag className={classnames(`heading heading--${props.level}`, props.className)}>
            {props.children}
        </Tag>
    );
};
