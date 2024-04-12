import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { GalleryWrapper } from '../../components/GalleryWrapper';
import { TProject } from '../../models';

import { gallery } from '../../data/portfolioGallery';

import './index.scss';

type TProps = {
    project: TProject;
};

export const PortfolioProject: React.FC<TProps> = ({ project }) => {
    const { t } = useTranslation();
    const { goal, team, completedObjectives, technologies, tools, imageGalleryKeys } = project;

    const imageGallery = useMemo(() => {
        if (imageGalleryKeys && imageGalleryKeys.length > 0) {
            return imageGalleryKeys.map((key) => gallery[key]).filter((obj) => obj !== undefined);
        }
        return [];
    }, [imageGalleryKeys, gallery]);

    return (
        <div className="portfolio-project">
            <h4 className="text-subheading">{t('portfolio.project.goal')}</h4>
            <p>{goal}</p>

            <h4 className="text-subheading">{t('portfolio.project.team')}</h4>
            <p>{team}</p>

            <h4 className="text-subheading">{t('portfolio.project.completed-objectives')}</h4>
            <ol className="portfolio-project__completed-objectives">
                {completedObjectives.map((completedObjective, index) => <li key={index}>{completedObjective}</li>)}
            </ol>

            <h4 className="text-subheading">{t('portfolio.project.technologies')}</h4>
            <ul className="portfolio-project__technologies">
                {technologies.map((technology, index) => <li key={index}>{technology}</li>)}
            </ul>

            <h4 className="text-subheading">{t('portfolio.project.tools')}</h4>
            <ul className="portfolio-project__tools">
                {tools.map((tool, index) => <li key={index}>{tool}</li>)}
            </ul>

            {imageGallery && imageGallery.length > 0 && (
                <>
                    <h4 className="text-subheading">{t('portfolio.project.gallery')}</h4>
                    <div className="portfolio-project__gallery">
                        <GalleryWrapper data={imageGallery} />
                    </div>
                </>
            )}
        </div>
    )
};
