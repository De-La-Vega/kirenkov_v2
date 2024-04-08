import React from 'react';
import classNames from 'classnames';

import './index.scss';

type TProps = {
    className?: string;
}

export const Point: React.FC<TProps> = ({ className }) => (
    <div className={classNames('point', className)} />
);
