import './article-section.scss';

export default function ArticleSection(props) {
    return (
        <div className={classnames('article-section', props.className)}>
            {props.children}
        </div>
    );
};
