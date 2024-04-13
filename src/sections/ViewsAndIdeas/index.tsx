import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ID } from '../../enums'
import Image from '../../components/Image'
import { Heading } from '../../components/Heading'
import { getViewsAndIdeasData } from '../../data/viewsAndIdeas';

import './index.scss';

export const ViewsAndIdeas: React.FC = () => {
    const { t } = useTranslation();
    const viewsAndIdeasData = useMemo(() => getViewsAndIdeasData(t), [t]);

    return (
        <section className="g-outer section-views-and-ideas" aria-labelledby={ID.VIEWS_AND_IDEAS}>
            <div className="g-inner">
                <Heading primaryText={t('navigation.viewsAndIdeas')} id={ID.VIEWS_AND_IDEAS} />

                <ul className="views-and-ideas-list">
                    {viewsAndIdeasData.map((item) => (
                        <li key={item.id} className="views-and-ideas-list__item">
                            <article>
                                <a
                                    className="views-and-ideas-list__link"
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`${item.label}, ${t('viewsAndIdeas.semanticDescriptions.link')}`}
                                >
                                    <Image
                                        className="views-and-ideas-list__image"
                                        imageObj={item.image}
                                    />
                                    <ul 
                                        className="views-and-ideas-list__badges"
                                        aria-label={t('viewsAndIdeas.semanticDescriptions.tags')}
                                    >
                                        {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                                    </ul>
                                    <h2 className="views-and-ideas-list__label">{item.label}</h2>
                                </a>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
};
