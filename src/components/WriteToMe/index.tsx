import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';

export const WriteToMe: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="write-to-me">
            <div className="write-to-me__label">
                {t('systemInformation.writeToMe')}
            </div>
            <div className="write-to-me__email">
                <a href="mailto:kirenkov.vitaliy@gmail.com">kirenkov.vitaliy@gmail.com</a>
            </div>
        </div>
    )
};
