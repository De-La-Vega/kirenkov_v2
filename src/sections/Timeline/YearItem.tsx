import React from 'react';

import { getYearOffset } from './utils';

import './index.scss';

type TProps = {
    yearHeight: number;
    year: number;
}

export const YearItem: React.FC<TProps> = ({ year, yearHeight }) => (
    <div
        className="timeline-years__item"
        style={{
            marginBottom: `${getYearOffset(year)}px`,
            height: yearHeight,
        }}
    >
        {year}
    </div>
);
