import LocalizedLink from '../LocalizedLink';
import React from 'react';

type LinkTextProps = {
    href: string;
    children?: React.ReactNode;
};

const LinkText = ({ href, children }: LinkTextProps) => {
    return (
        href.startsWith('http') ? <a href={href} target='_blank' rel='noreferrer'>{children}</a> : <LocalizedLink to={href}>{children}</LocalizedLink>
    )
}

export default LinkText