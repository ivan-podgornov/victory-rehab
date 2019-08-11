import './write-us.scss';
import ButtonBase from '../button-base/button-base';
import TextField from '../text-field/text-field';

export default function WriteUs(props) {
    return (
        <form className={classnames('write-us', props.className)} method="POST" action="#">
            <div className="write-us__heading">Напишите нам</div>
            <TextField type="text" name="name" label="Имя" />
            <TextField type="tel" name="phone" label="Телефон" />
            <TextField name="message" label="Сообщение" rows="2" />
            <ButtonBase className="column" type="submit">Отправить</ButtonBase>
        </form>
    );
};
