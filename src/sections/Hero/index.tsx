import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Typed from 'typed.js';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons/faCloudArrowDown';

import { FollowMe } from '../../components/FollowMe';
import { WriteToMe } from '../../components/WriteToMe';

import hero_previewRetina_1600x2000_png     from '../../assets/hero_previewRetina_1600x2000.png';
import hero_previewRetina_1600x2000_webp    from '../../assets/hero_previewRetina_1600x2000.webp';
import hero_preview_800x1000_webp           from '../../assets/hero_preview_800x1000.webp';
import hero_preview_800x1000_png            from '../../assets/hero_preview_800x1000.png';
import hero_mobile_preview_400x500_png      from '../../assets/hero-mobile_preview_400x500.png';
import hero_mobile_preview_400x500_webp     from '../../assets/hero-mobile_preview_400x500.webp';

import './index.scss';

export const Hero: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [supportsWebP, setSupportsWebP] = useState<boolean>(false);
    const { t } = useTranslation();
    const elTyped = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        const support_format_webp = (): boolean => {
            const elem = document.createElement('canvas');

            if (elem.getContext && elem.getContext('2d')) {
                return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
            } else {
                return false;
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        setSupportsWebP(support_format_webp());

        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
        <>
            <Helmet>
                {!isMobile && [
                    <link key="desktop-2x" rel="preload" as="image" href={supportsWebP ? hero_previewRetina_1600x2000_webp : hero_previewRetina_1600x2000_png} media="(min-width: 1024px) and (resolution: 2dppx)" />,
                    <link key="desktop-1x" rel="preload" as="image" href={supportsWebP ? hero_preview_800x1000_webp : hero_preview_800x1000_png} media="(min-width: 1024px) and (resolution: 1dppx)" />
                ]}
                {isMobile && [
                    <link key="mobile-2x" rel="preload" as="image" href={supportsWebP ? hero_preview_800x1000_webp : hero_preview_800x1000_png} media="(max-width: 1023px) and (resolution: 2dppx)" />,
                    <link key="mobile-1x" rel="preload" as="image" href={supportsWebP ? hero_mobile_preview_400x500_webp : hero_mobile_preview_400x500_png} media="(max-width: 1023px) and (resolution: 1dppx)" />
                ]}
            </Helmet>

            <header className="g-outer section-hero">
                <div className="g-inner">
                    <div className="section-hero__content-left">
                        <div className="section-hero__position"><span ref={elTyped} /></div>
                        <h1 className="section-hero__name">{t('hero.name')}</h1>
                        <div className="section-hero__follow-me"><FollowMe /></div>
                        <div className="section-hero__write-to-me"><WriteToMe /></div>
                        <div className="section-hero__download-cv">
                            <a
                                href="https://drive.google.com/file/d/1Hs8aqvJhKKS01shC096X5taJnPogEwei/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-download-cv"
                                aria-label="Скачать CV"
                            >
                                <span className="btn-download-cv__icon">
                                    <FontAwesomeIcon icon={faCloudArrowDown} />
                                </span>
                                <span className="btn-download-cv__text">{t('hero.download-cv')}</span>
                            </a>
                        </div>
                    </div>
                    <div className="section-hero__content-right">
                        <picture>
                            {/* Для ретина десктопа */}
                            <source media="(min-width: 768px)" srcSet={`${hero_previewRetina_1600x2000_webp} 2x, ${hero_preview_800x1000_webp} 1x`} type="image/webp" />
                            <source media="(min-width: 768px)" srcSet={`${hero_previewRetina_1600x2000_png} 2x, ${hero_preview_800x1000_png} 1x`} type="image/png" />

                            {/* Для мобильных устройств с ретина */}
                            <source media="(max-width: 767px)" srcSet={`${hero_preview_800x1000_webp} 2x, ${hero_mobile_preview_400x500_webp} 1x`} type="image/webp" />
                            <source media="(max-width: 767px)" srcSet={`${hero_preview_800x1000_png} 2x, ${hero_mobile_preview_400x500_png} 1x`} type="image/png" />

                            {/* Для мобильных устройств без ретина */}
                            <source media="(max-width: 767px)" srcSet={hero_mobile_preview_400x500_webp} type="image/webp" />
                            <source media="(max-width: 767px)" srcSet={hero_mobile_preview_400x500_png} type="image/png" />

                            {/* Изображение по умолчанию */}
                            <img className="section-hero__img" src={hero_preview_800x1000_png} alt={t('hero.alt')} width="800" height="1000" />
                        </picture>

                        <div className="section-hero__columns">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};
