import './default-layout.scss';
import PageHeader from '../../components/page-header/page-header';
import PageFooter from '../../components/page-footer/page-footer';

export default function DefaultLayout(props) {
    return (
        <React.Fragment>
            <PageHeader />
            <main>{props.children}</main>
            <PageFooter />
        </React.Fragment>
    );
};
