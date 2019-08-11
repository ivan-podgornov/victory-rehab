import './treatment-addiction.scss';

export default function TreatmentAddiction(props) {
    return (
        <article className={classnames('treatment-addiction', props.className)}>
            {props.children}
        </article>
    );
};
