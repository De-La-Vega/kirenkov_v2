import React from 'react';

import './index.scss';

type TProps = {
    list: string[];
}

export const Badges: React.FC<TProps> = ({ list }) => {
    return (
        <span className="badges">
            {list.map((item) => <span key={item}>{item}</span>)}
        </span>
    )
};
