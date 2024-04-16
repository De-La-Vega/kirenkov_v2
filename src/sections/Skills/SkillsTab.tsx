import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import './index.scss';

import { SKILLS_TYPE } from '../../enums';
import { TSkillsItem } from '../../models';

type TProps = {
    item: TSkillsItem;
    activeItemType: SKILLS_TYPE;
    onClick: (itemType: SKILLS_TYPE) => void;
};

export const SkillsTab: React.FC<TProps> = ({ item, activeItemType, onClick }) => (
    <button
        role="tab"
        aria-label={item.label}
        aria-selected={item.type === activeItemType}
        onClick={() => onClick(item.type)}
        className={classNames('skills__tab', {
            'skills__tab_type-management': item.type === SKILLS_TYPE.MANAGEMENT,
            'skills__tab_type-programming': item.type === SKILLS_TYPE.PROGRAMMING,
            'skills__tab_type-blogging': item.type === SKILLS_TYPE.BLOGGING,
            'skills__tab_type-consulting': item.type === SKILLS_TYPE.CONSULTING,
            'skills__tab_status-active': item.type === activeItemType,
        })}
    >
        <span className="skills__tab-icon">
            <FontAwesomeIcon icon={item.icon} />
        </span>
        <span className="skills__tab-label">
            {item.label}
        </span>
    </button>
);
