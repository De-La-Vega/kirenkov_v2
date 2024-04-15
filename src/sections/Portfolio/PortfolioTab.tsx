import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { Badges } from '../../components/Badges';
import { SKILLS_TYPE } from '../../enums';

import './index.scss';

type TProps = {
    label: string;
    isActive: boolean;
    icon?: IconDefinition;
    itemType: SKILLS_TYPE;
    onClick: () => void;
    classification?: string[];
};

const PortfolioTab: React.FC<TProps> = memo(({ label, onClick, isActive, icon, itemType, classification }) => (
    <button
        role="tab"
        aria-selected={isActive}
        className={classNames('portfolio-tab', {
            'portfolio-tab_status-active': isActive,
            'portfolio-tab_type-management': itemType === SKILLS_TYPE.MANAGEMENT,
            'portfolio-tab_type-programming': itemType === SKILLS_TYPE.PROGRAMMING,
            'portfolio-tab_type-blogging': itemType === SKILLS_TYPE.BLOGGING,
            'portfolio-tab_type-consulting': itemType === SKILLS_TYPE.CONSULTING,
        })}
        onClick={onClick}
    >
        {icon && (
            <span className="portfolio-tab__icon">
                <FontAwesomeIcon icon={icon} />
            </span>
        )}
        <span className="portfolio-tab__label-and-badge">
            <span className="portfolio-tab__label">
                {label}
            </span>

            {classification && (
                <Badges list={classification} />
            )}
        </span>
    </button>
));

PortfolioTab.displayName = 'PortfolioTab';

export default PortfolioTab;
