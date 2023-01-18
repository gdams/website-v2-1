import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

import GuestPost from '../components/GuestPost';
import CodeBox from '../components/CodeBox';
import InlineCode from '../components/CodeBox/InlineCode';

const Small = props => <><br/><small className='text-muted' {...props} /></>;

const Tick = () => <FaCheck style={{ color: 'var(--brand4)', marginRight: '0.5rem' }} />;
const Cross = () => <FaTimes style={{ color: 'var(--brand4)', marginRight: '0.5rem' }} />;

// Wrapper to create a collapsible element using native markdown
const Collapsible = props => {
  return (
    // if props.title is defined add summary
    props.title ? <details className='collapsible pb-3'><summary>{props.title}</summary><div className='content' {...props}></div></details> :
    <details className='collapsible pb-3' {...props} />
  )
}

// Wrapper to add a class name around an element
const Class = props => {
  return (
    <div className={props.name} {...props} />
  )
}
  
export const mdxComponents = {
    Small,
    Tick,
    Cross,
    Collapsible,
    Class,
    GuestPost,
    code: InlineCode,
    InlineCode: InlineCode,
    pre: CodeBox,
    blockquote: props => <blockquote style={{ paddingLeft: '1.5rem', borderLeft: '.3rem solid hsla(0,0%,0%,0.9)' }} className='blockquote' {...props} />,
    table: props => <table className='table table-hover' {...props} />,
    thead: props => <thead className='table-dark' {...props} />,
    li: props => <li style={{ marginBottom: '1.5em' }} {...props} />
};
