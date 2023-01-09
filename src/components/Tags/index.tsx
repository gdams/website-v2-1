import React from 'react';
import { FaTag } from 'react-icons/fa';
import LocalizedLink from '../LocalizedLink';

const Tags = (props) => {

  const tags = props.tags;

  if (!tags) {
    return null;
  }

  return (
    <>
      {tags.map(tag => (
        <LocalizedLink className='badge bg-secondary text-dark m-2' key={tag} to={`/blog/tags/${tag}`}>
          <FaTag style={{marginRight: '.75em'}}/>{tag}
        </LocalizedLink>
      ))}
    </>
  );
};

export default Tags;
