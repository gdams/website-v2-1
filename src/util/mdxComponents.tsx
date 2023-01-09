import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

import GuestPost from '../components/GuestPost';

const formatDiv = props => {
    // convert inline code to code blocks
    if (props.dangerouslySetInnerHTML.__html.includes('class="language-text"')) {
      return <code {...props} />
    } else {
      return <div {...props} />;
    }
}

const Tick = () => <FaCheck style={{ color: 'var(--brand4)', marginRight: '0.5rem' }} />;
const Cross = () => <FaTimes style={{ color: 'var(--brand4)', marginRight: '0.5rem' }} />;
  
export const mdxComponents = {
    Tick,
    Cross,
    GuestPost,
    blockquote: props => <blockquote style={{ paddingLeft: '1.5rem', borderLeft: '.3rem solid hsla(0,0%,0%,0.9)' }} className='blockquote' {...props} />,
    table: props => <table className='table table-hover' {...props} />,
    thead: props => <thead className='table-dark' {...props} />,
    li: props => <li style={{ marginBottom: '1.5em' }} {...props} />,
    div: formatDiv
};