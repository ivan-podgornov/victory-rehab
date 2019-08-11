import './important-text.scss';

export default function ImportantText(props) {
    return (
        <div className={classnames('important-text', props.className)}>
            {props.children}
        </div>
    );
};
