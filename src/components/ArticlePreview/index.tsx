import React from 'react';
import LocalizedLink from '../LocalizedLink';

import Byline from '../Byline';

/**
 * Article intro displayed on front page, archive, author page.
 */
const ArticlePreview = (props) => {
  const author = props.author;
  const date = props.date;
  const postPath = props.postPath;
  const title = props.title;
  const description = props.description;
  const excerpt = props.excerpt;
  const identifier = props.identifier;

    return (
        <article className='pb-3'>
            <header>
                <h2 className='h3'>
                <LocalizedLink to={postPath}>
                    {title}
                </LocalizedLink>
                </h2>
                <Byline author={author} date={date} identifier={identifier}/>
            </header>
            <section>
                <p>
                {description || excerpt} <LocalizedLink to={postPath}>Read more</LocalizedLink>
                </p>
            </section>
        </article>
    );
};

export default ArticlePreview;
