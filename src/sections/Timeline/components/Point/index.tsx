import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

type TProps = {
    className?: string;
    icon: IconDefinition;
}

export const Point: React.FC<TProps> = ({ className, icon }) => (
    <FontAwesomeIcon icon={icon} className={classNames('point', className)} />
);
