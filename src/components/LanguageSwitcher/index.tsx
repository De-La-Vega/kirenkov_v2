import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { LOCAL_STORAGE_KEY, LANGUAGE } from '../../enums';
import { Switcher } from '../Switcher';

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language; // Вынесли получение текущего языка в переменную для оптимизации

    const handleChange = (language: string) => {
        i18n.changeLanguage(language);
        localStorage.setItem(LOCAL_STORAGE_KEY.APP_LANGUAGE, language);
    };

    const options = useMemo(() => [
        { value: LANGUAGE.RU, labelKey: 'systemInformation.language.ru', isActive: currentLanguage === LANGUAGE.RU },
        { value: LANGUAGE.EN, labelKey: 'systemInformation.language.en', isActive: currentLanguage === LANGUAGE.EN },
    ], [currentLanguage]);

    return <Switcher labelKey="systemInformation.language.label" options={options} onChange={handleChange} />;
};
