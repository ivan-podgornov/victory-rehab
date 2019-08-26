import './write-us.scss';
import ButtonBase from '../button-base/button-base';
import TextField from '../text-field/text-field';

export default function WriteUs(props) {
    return (
        <form className={classnames('write-us', props.className)} method="POST" action="/api">
            <div className="write-us__heading">Напишите нам</div>
            <input type="hidden" name="query" value="mutation($name: String!, $phone: String!, $text: String!) { sendMessage(name: $name, phone: $phone, text: $text) }" />
            <input type="hidden" name="operationName" value="sendMessage" />
            <TextField type="text" name="variables[name]" label="Имя" autoComplete="off" />
            <TextField type="tel" name="variables[phone]" label="Телефон" autoComplete="off" />
            <TextField name="variables[text]" label="Сообщение" rows="2" />
            <ButtonBase className="column" type="submit">Отправить</ButtonBase>
        </form>
    );
};
