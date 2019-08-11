import './page-promo.scss';
import Heading from '../heading/heading';
import LayoutPositioner from '../layout-positioner/layout-positioner';

/**
 * Page Promo component
 * @param {React.Props} props
 * @param {String} [props.heading]
 * @param {Number} [props.headingLevel = 1]
 * @param {String} [props.headingTag = 'h1']
 * @param {String} [props.headingClassName]
 */
export default function PagePromo(props) {
    const classes = [
        'page-promo__heading',
        `page-promo__heading--${props.headingLevel || '1'}`,
        props.headingClassName,
    ]

    return (
        <div className={classnames('page-promo', props.className)}>
            <LayoutPositioner className="page-promo__content">
                {typeof props.heading === 'string' && (
                    <Heading
                        level={props.headingLevel || 1}
                        className={classnames(...classes)}
                        tag={props.headingTag || 'h1'}
                    >
                        {props.heading}
                    </Heading>
                )}
                {props.children}
            </LayoutPositioner>
        </div>
    );
};
