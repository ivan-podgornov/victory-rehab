import './our-address.scss';

export default function OurAddress(props) {
    return (
        <address className={classnames('our-address', props.className)}>
            91000, г. Луганск<br />
            ул. Вознесенская 22<br />
            с 9.00 до 18.00, без выходных
        </address>
    );
};
