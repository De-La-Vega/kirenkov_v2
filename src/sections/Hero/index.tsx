import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Typed from 'typed.js';

import { FollowMe } from '../../components/FollowMe';
import { WriteToMe } from '../../components/WriteToMe';

import hero_small_fallback from '../../assets/hero-400x500.png';
import hero_small from '../../assets/hero-400x500.webp';

import hero_large_fallback from '../../assets/hero-800x1000.png';
import hero_large from '../../assets/hero-800x1000.webp';

import './index.scss';

export const Hero: React.FC = () => {
    const { t } = useTranslation();
    const elTyped = React.useRef(null);

    useEffect(() => {
        const typed = new Typed(elTyped.current, {
            strings: t('hero.position', { returnObjects: true }) as string[],
            typeSpeed: 30,
            backSpeed: 30,
            cursorChar: '|',
            loop: true,
        });
    
        return () => {
            typed.destroy();
        };
    }, [t]);

    return (
        <section className="g-outer section-hero">
            <div className="g-inner">
                <div className="section-hero__content-left">
                    <div className="section-hero__position"><span ref={elTyped} /></div>
                    <div className="section-hero__name">{t('hero.name')}</div>
                    <div className="section-hero__follow-me"><FollowMe /></div>
                    <div className="section-hero__write-to-me"><WriteToMe /></div>
                </div>
                <div className="section-hero__content-right">
                    <picture>
                        <source srcSet={`${hero_large} 800w, ${hero_small} 300w`} sizes="(min-width: 62em) 800px, (max-width: 47.9375em) 300px" type="image/webp" />
                        <source srcSet={`${hero_large_fallback} 800w, ${hero_small_fallback} 300w`} sizes="(min-width: 62em) 800px, (max-width: 47.9375em) 300px" type="image/png" />
                        <img className="section-hero__img" src={hero_large_fallback} alt="Vitaliy Kirenkov" width="800" height="1000" />
                    </picture>

                    <div className="section-hero__columns">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    )
};
