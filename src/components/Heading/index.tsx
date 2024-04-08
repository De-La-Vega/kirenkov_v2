import React from 'react';

import './index.scss';

type TProps = {
    primaryText: string;
    secondaryText?: string;
}

export const Heading: React.FC<TProps> = ({ primaryText, secondaryText }) => (
    <div className="heading">
        <h2>{secondaryText || primaryText}</h2>
        <h3>{primaryText}</h3>
    </div>
);
