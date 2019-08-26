import './login-form.scss';
import ButtonBase from '../button-base/button-base';
import Heading from '../heading/heading';
import TextField from '../text-field/text-field';

export default function LoginForm() {
    return (
        <form className="login-form" action="/api" method="POST">
            <div className="login-form__content">
                <Heading level="3" tag="div">Панель администратора</Heading>
                <input type="hidden" name="query" value="mutation($password: String!) { auth(password: $password) }" />
                <input type="hidden" name="operationType" value="auth" />
                <TextField type="password" name="variables[password]" label="Пароль" />
                <ButtonBase type="submit">Войти</ButtonBase>
            </div>
        </form>
    );
};
