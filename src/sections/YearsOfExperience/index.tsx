import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';

export const YearsOfExperience: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="g-outer years-of-experience">
            <div className="years-of-experience__container">
                <div className="years-of-experience__num">
                    <div className="years-of-experience__num-text">{(new Date()).getFullYear() - 2007}<span>+</span></div>
                    <div className="years-of-experience__marquee">{t('yearsOfExperience.aboutMe')}</div>
                </div>
                <div className="years-of-experience__years">{t('yearsOfExperience.years')}</div>
                <div className="years-of-experience__experience">{t('yearsOfExperience.experience')}</div>
            </div>
        </section>
    );
}
