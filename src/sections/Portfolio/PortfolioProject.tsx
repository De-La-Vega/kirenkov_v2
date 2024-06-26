import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { GalleryWrapper } from '../../components/GalleryWrapper';
import { TProject } from '../../models';

import { getGallery } from '../../data/portfolioGallery';

import './index.scss';

type TProps = {
    project: TProject;
};

export const PortfolioProject: React.FC<TProps> = ({ project }) => {
    const { t } = useTranslation();
    const { role, label, goal, team, completedObjectives, technologies, tools, imageGalleryKeys } = project;
    const technologiesAndTools = [...technologies, ...tools];

    const imageGallery = useMemo(() => {
        if (imageGalleryKeys && imageGalleryKeys.length > 0) {
            return imageGalleryKeys.map((key) => getGallery(t)[key]).filter((obj) => obj !== undefined);
        }
        return [];
    }, [imageGalleryKeys, getGallery]);

    return (
        <div className="portfolio-project" role="tabpanel">
            <div className="portfolio-project__name">{label}</div>

            <div className="text-subheading">{t('portfolio.project.role')}</div>
            <p>{role}</p>

            <div className="text-subheading">{t('portfolio.project.goal')}</div>
            <p>{goal}</p>

            <div className="text-subheading">{t('portfolio.project.team')}</div>
            <p>{team}</p>

            <div className="text-subheading">{t('portfolio.project.completed-objectives')}</div>
            <ol className="portfolio-project__completed-objectives">
                {completedObjectives.map((completedObjective, index) => <li key={index}>{completedObjective}</li>)}
            </ol>

            <div className="text-subheading">{t('portfolio.project.technologiesAndTools')}</div>
            <ul>
                {technologiesAndTools.map((item, index) => <li key={index}>{item}</li>)}
            </ul>

            {imageGallery && imageGallery.length > 0 && (
                <>
                    <div className="text-subheading">{t('portfolio.project.gallery')}</div>
                    <div className="portfolio-project__gallery">
                        <GalleryWrapper data={imageGallery} />
                    </div>
                </>
            )}
        </div>
    )
};
