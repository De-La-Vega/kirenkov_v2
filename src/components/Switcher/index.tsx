import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import './index.scss';

type TSwitcherProps = {
    labelKey: string;
    options: {
        value: string;
        labelKey: string;
        isActive: boolean;
    }[];
    onChange: (value: string) => void;
}

export const Switcher: React.FC<TSwitcherProps> = ({ labelKey, options, onChange }) => {
    const { t } = useTranslation();

    return (
        <div className="switcher">
            <div className="switcher__label">
                {t(labelKey)}
            </div>
            <div className="switcher__buttons">
                {options.map(option => (
                    <button
                        key={option.value}
                        className={classNames('switcher__button', {
                            'switcher__button_status-active': option.isActive
                        })}
                        onClick={() => onChange(option.value)}
                    >
                        {t(option.labelKey)}
                    </button>
                ))}
            </div>
        </div>
    );
};
