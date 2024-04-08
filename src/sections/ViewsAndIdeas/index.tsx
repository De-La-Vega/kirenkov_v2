import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Heading } from '../../components/Heading'
import { getViewsAndIdeasData } from '../../data/viewsAndIdeas';

import './index.scss';

export const ViewsAndIdeas: React.FC = () => {
    const { t } = useTranslation();
    const viewsAndIdeasData = useMemo(() => getViewsAndIdeasData(t), [t]);

    return (
        <section className="g-outer section-views-and-ideas">
            <div className="g-inner">
                <Heading primaryText={t('navigation.viewsAndIdeas')}/>

                <ul className="views-and-ideas-list">
                    {viewsAndIdeasData.map((item) => (
                        <li key={item.id} className="views-and-ideas-list__item">
                            <a className="views-and-ideas-list__link" href={item.link} target="_blank" rel="noreferrer">
                                <div className="views-and-ideas-list__image">
                                    <picture>
                                        <source srcSet={item.image.srcSmallMain} type="image/webp" />
                                        <img src={item.image.srcSmallFallback} alt={item.label} width={item.image.width} height={item.image.height} />
                                    </picture>
                                </div>
                                <ul className="views-and-ideas-list__badges">
                                    {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                                </ul>
                                <div className="views-and-ideas-list__label">{item.label}</div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
};
