import './first-screen.scss';
import ButtonBase from '../button-base/button-base';
import Heading from '../heading/heading';
import ServicesList from '../services-list/services-list';

export default function FirstScreen() {
    return (
        <div className="first-screen">
            <Heading className="first-screen__heading" tag="div" level={1}>Victory</Heading>
            <Heading className="first-screen__sub-heading" tag="div" level={2}>
                Реабилитационный центр
            </Heading>
            <ServicesList className="services-list--centered" />
            <div className="first-screen__mission">
                Мы предоставляем услуги лечения зависимостей путём психологической работы,
                социальной адаптации и применения принципов программы «12 шагов»
            </div>
            <ButtonBase className="first-screen__call-us">Связаться с нами</ButtonBase>
        </div>
    );
};
