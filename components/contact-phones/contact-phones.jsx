import './contact-phones.scss';

export default function ContactPhones(props) {
    return (
        <ul className={classnames('contact-phones', props.className)}>
            {props.phones.map((phone) => (
                <li className="contact-phones__item" key={phone}>
                    <a className="contact-phones__phone" href={getTelLink(phone)}>
                        {phone}
                    </a>
                </li>
            ))}
        </ul>
    );
};

function getTelLink(phone) {
    return 'tel:' + phone.replace(/[-() ]/g, '');
}
