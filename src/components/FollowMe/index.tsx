import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook, faYoutube, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

import './index.scss';

const data = [
    { label: 'LinkedIn', icon: faLinkedin, link: 'https://ru.linkedin.com/in/kirenkov' },
    { label: 'Facebook', icon: faFacebook, link: 'https://www.facebook.com/vitaliy.kirenkov' },
    { label: 'Twitter', icon: faTwitter, link: 'https://twitter.com/VitaliyKirenkov' },
    { label: 'Instagram', icon: faInstagramSquare, link: 'https://www.instagram.com/vitaliy.kirenkov/' },
    { label: 'YouTube', icon: faYoutube, link: 'https://www.youtube.com/@prosto_razrabotka' },
];

export const FollowMe: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="follow-me">
            <div className="follow-me__label">{t('systemInformation.subscribe')}</div>

            <ul className="follow-me__list">
                {data.map((item) => (
                    <li key={item.label} className="follow-me__item">
                        <a
                            href={item.link}
                            target="_blank"
                            className="follow-me__link"
                            rel="noreferrer"
                            aria-label={item.label}
                        >
                            <FontAwesomeIcon icon={item.icon} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
};
