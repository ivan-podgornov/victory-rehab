import './modal-window.scss';
import Heading from '../heading/heading';
import Icon from '@termite/components/icon/icon';

export default function ModalWindow(props) {
    return (
        <React.Fragment>
            <input className="modal-window__toggler" type="checkbox" id={props.name} tabIndex="-1" aria-hidden="true" />
            <div className="modal-window">
                <div className="modal-window__content">
                    <label className="modal-window__close" htmlFor={props.name}>
                        <Icon name="close" />
                    </label>
                    <div>
                        <Heading className="modal-window__heading" tag="div" level={2}>
                            {props.heading}
                        </Heading>
                        {props.children}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};