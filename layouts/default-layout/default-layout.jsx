import './default-layout.scss';
import PageHeader from '../../components/page-header/page-header';

export default function DefaultLayout(props) {
    return (
        <React.Fragment>
            <PageHeader />
            <main>{props.children}</main>
            <footer>Футер</footer>
        </React.Fragment>
    );
};
