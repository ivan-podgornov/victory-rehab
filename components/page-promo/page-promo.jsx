import './page-promo.scss';
import Heading from '../heading/heading';
import LayoutPositioner from '../layout-positioner/layout-positioner';

/**
 * Page Promo component
 * @param {React.Props} props
 * @param {String} [props.heading]
 * @param {Number} [props.headingLevel = 1]
 */
export default function PagePromo(props) {
    return (
        <div className="page-promo">
            <LayoutPositioner>
                {typeof props.heading === 'string' && (
                    <Heading level={props.headingLevel || 1}>
                        {props.heading}
                    </Heading>
                )}
                {props.children}
            </LayoutPositioner>
        </div>
    );
};
