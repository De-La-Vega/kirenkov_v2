import React, { ReactNode } from 'react';

type TProps = {
    href: string;
    title?: string;
    children?: ReactNode;
};

export const LinkText: React.FC<TProps> = ({ href, title, children }) => (
    <a href={href || '#'} target="_blank" rel="noreferrer" title={title || ''}>
        {children}
    </a>
);
