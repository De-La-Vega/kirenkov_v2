import React from 'react';

import './index.scss';

type TProps = {
    children: React.ReactNode;
}

export const SectionDescription: React.FC<TProps> = ({ children }) => (
    <div className="section-description-wrapper">
        {children}
    </div>
);
