import React, { useMemo } from 'react';

import { COLOR_THEME } from '../../enums';
import { Switcher } from '../Switcher';

import { useTheme } from './ThemeContext';

export const ThemeSwitcher: React.FC = () => {
    const { toggleTheme, theme } = useTheme();
  
    const handleChange = () => toggleTheme();

    const options = useMemo(() => [
        { value: COLOR_THEME.DARK, labelKey: 'systemInformation.theme.dark', isActive: theme === COLOR_THEME.DARK },
        { value: COLOR_THEME.LIGHT, labelKey: 'systemInformation.theme.light', isActive: theme === COLOR_THEME.LIGHT },
    ], [theme]);

    return <Switcher labelKey="systemInformation.theme.label" options={options} onChange={handleChange} />;
};
