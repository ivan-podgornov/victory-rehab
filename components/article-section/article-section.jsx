import './article-section.scss';

export default function ArticleSection(props) {
    const Tag = props.tag || 'div';

    return (
        <Tag className={classnames('article-section', props.className)}>
            {props.children}
        </Tag>
    );
};
