import React from 'react';
import classNames from 'classnames';

import { TIMELINE_ITEM_POSITION } from '../../../../enums';

import './index.scss';

type TProps = {
    className?: string;
    timelineSide: TIMELINE_ITEM_POSITION;
}

export const Range: React.FC<TProps> = ({ className, timelineSide }) => (
    <div className={classNames('range', className, {
        'range_position-left': timelineSide === TIMELINE_ITEM_POSITION.LEFT,
        'range_position-right': timelineSide === TIMELINE_ITEM_POSITION.RIGHT,
    })} />
);
