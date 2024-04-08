import React, { useRef, useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faBars } from '@fortawesome/free-solid-svg-icons';

import { getNavigationData } from '../../data/navigation';
import { ThemeSwitcher } from '../../components/ThemeSwitcher';
import { LanguageSwitcher } from '../../components/LanguageSwitcher';
import { Logo } from '../../components/Logo';

import { scrollTo } from '../../utils';
import './index.scss';

const scrollbarWidth = (() => {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);

    const width = outer.offsetWidth - inner.offsetWidth;

    if (outer.parentNode) {
        outer.parentNode.removeChild(outer);
    }
    
    return width;
})();

const setBodyStyles = (overflow = '', paddingRight = '') => {
    document.body.style.overflow = overflow;
    document.body.style.paddingRight = paddingRight;
};

export const Navigation: React.FC = () => {
    const navRef = useRef<HTMLElement>(null); // Для доступа к элементу nav
    const [isNavActive, setIsNavActive] = useState(false); // Состояние для адаптивного меню
    const { t } = useTranslation();
    const navigationData = useMemo(() => getNavigationData(t), [t]);

    useEffect(() => {
        if (isNavActive) {
            setBodyStyles('hidden', `${scrollbarWidth}px`);
        } else {
            setBodyStyles();
        }

        return () => setBodyStyles();
    }, [isNavActive]);

    const toggleAdaptiveNav = (): void => {
        setIsNavActive((prev) => !prev);
    };

    const handleClickScrollTo = (event: React.SyntheticEvent<HTMLAnchorElement>, className: string): void => {
        event.preventDefault();
        setIsNavActive(false);
        scrollTo(className);
    };

    const getLogo = (secondaryClassName: string) => (
        <a
            href="#"
            aria-label="Logo"
            className={`logo-link ${secondaryClassName}`}
            onClick={(e) => handleClickScrollTo(e, 'section-hero')}
        >
            <Logo />
        </a>
    );

    return (
        <>
            {getLogo('logo-link_position-main')}

            <button
                role="button"
                aria-label="Open navigation"
                className="nav-toggle"
                onClick={toggleAdaptiveNav}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>

            <div className={classNames('nav-underlay', { 'nav-underlay_status-active': isNavActive })} />

            <nav
                ref={navRef}
                className={classNames('section-nav', { 'section-nav_status-active': isNavActive })}
            >
                <button
                    role="button"
                    aria-label="Close navigation"
                    className="section-nav__close"
                    onClick={toggleAdaptiveNav}

                >
                    <FontAwesomeIcon icon={faClose} />
                </button>

                {getLogo('logo-link_position-aside')}

                <ul className="section-nav__list">
                    {navigationData.map((item) => (
                        <li key={item.className} className="section-nav__item">
                            <a href="#" onClick={(e) => handleClickScrollTo(e, item.className)} className="section-nav__link">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="section-nav__settings">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                </div>
            </nav>
        </>
    );
};
