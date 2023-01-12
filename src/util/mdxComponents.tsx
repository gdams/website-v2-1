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

const Small = props => <><br/><small className='text-muted' {...props} /></>;
const Tick = () => <FaCheck style={{ color: 'var(--brand4)', marginRight: '0.5rem' }} />;
const Cross = () => <FaTimes style={{ color: 'var(--brand4)', marginRight: '0.5rem' }} />;
const Collapsible = props => {
  return (
    // if props.title is defined add summary
    props.title ? <details className='collapsible pb-3'><summary>{props.title}</summary><div className='content' {...props}></div></details> :
    <details className='collapsible pb-3' {...props} />
  )
}
const Class = props => {
  return (
    <div className={props.name} {...props} />
  )
}
const SupportedPlatformsTable = props => {
  return (
    <table className="table table-hover py-2">
      <thead>
          <tr className="bg-grey">
              <th className="tableblock halign-center valign-middle" rowSpan={2}><p className="tableblock">Operating System</p></th>
              <th className="tableblock halign-center valign-top" colSpan={4}><p className="tableblock">Eclipse Temurin Version</p></th>
          </tr>
          <tr className="bg-grey">
              <th className="tableblock halign-center valign-middle"><p className="tableblock">&nbsp; 8</p></th>
              <th className="tableblock halign-center valign-top"><p className="tableblock">11</p></th>
              <th className="tableblock halign-center valign-top"><p className="tableblock">17</p></th>
              <th className="tableblock halign-center valign-top"><p className="tableblock">19</p></th>
          </tr>
          <tr className="bg-grey">
              <th className="tableblock halign-center valign-middle" colSpan={5}><p className="tableblock">Windows (x64/x86)</p></th>
          </tr>
      </thead>
      {/* Strip out heading and only return tr children */}
      <tbody {...props.children.props.children[1].props} />
    </table>
  )
}
  
export const mdxComponents = {
    Small,
    Tick,
    Cross,
    Collapsible,
    Class,
    SupportedPlatformsTable,
    GuestPost,
    blockquote: props => <blockquote style={{ paddingLeft: '1.5rem', borderLeft: '.3rem solid hsla(0,0%,0%,0.9)' }} className='blockquote' {...props} />,
    table: props => <table className='table table-hover' {...props} />,
    thead: props => <thead className='table-dark' {...props} />,
    li: props => <li style={{ marginBottom: '1.5em' }} {...props} />,
    div: formatDiv
};