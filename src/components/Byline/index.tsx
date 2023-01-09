import React from 'react';
import LocalizedLink from '../LocalizedLink';
import ProfilePicInline from '../ProfilePicInline';
import './Byline.scss';

const Byline = (props) => {
  const { author, date, identifier } = props;

  const href = `/blog/author/${identifier}`;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '1rem',
        marginBottom: '1rem',
        textDecoration: 'none'
      }}
      className='byline'
    >
      {date} – posted by &nbsp; <LocalizedLink to={href}>{author}</LocalizedLink> <ProfilePicInline identifier={identifier} name={author} />
    </div>
  );
};

export default Byline;