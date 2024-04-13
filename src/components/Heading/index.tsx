import React from 'react';

import './index.scss';

type TProps = {
    id?: string;
    primaryText: string;
    secondaryText?: string;
}

export const Heading: React.FC<TProps> = ({ primaryText, secondaryText, id }) => (
    <div className="heading">
        <p className="subheading">{secondaryText || primaryText}</p>
        <h1 id={id}>{primaryText}</h1>
    </div>
);
