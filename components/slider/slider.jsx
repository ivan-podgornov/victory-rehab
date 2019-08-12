import './slider.scss';
import BaseImage from '../base-image/base-image';

export default function Slider(props) {
    const labels = props.items.map((item, i) => i);

    return (
        <div className={classnames('slider', props.className)}>
            {labels.map((number) => <ReviewInput key={number} number={number} />)}
            <ul className="slider__list">
                {props.items.map((item, i) => (
                    <li className="slider__item" key="i">
                        <BaseImage
                            className="slider__image"
                            alt={`Наши фото, фотография ${i + 1}`}
                            src={item}
                        />
                    </li>
                ))}
            </ul>
            <div className="slider__labels" aria-hidden="true">
                {labels.map((number) => (
                    <label
                        className="slider__label"
                        key={number}
                        htmlFor={`slider-${number}`}
                    ></label>
                ))}
            </div>
        </div>
    )
};

function ReviewInput(props) {
    return (
        <React.Fragment>
            <input
                className="slider__input"
                type="radio"
                defaultChecked={props.number === 0}
                name="slider"
                id={`slider-${props.number}`}
                tabIndex="-1"
                aria-hidden="true"
            />
        </React.Fragment>
    );
}
