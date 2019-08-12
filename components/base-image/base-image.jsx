import './base-image.scss';

export default function BaseImage(props) {
    if ('alt' in props === false) throw new TypeError('alt is required for content images');
    if ('src' in props === false) throw new TypeError('alt is required for content images');

    return (
        <div className={classnames('base-image', props.className)}>
            <img className="base-image__image" src={props.src} alt={props.alt} />
        </div>
    );
};
