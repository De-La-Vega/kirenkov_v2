import React from 'react';
import { useTranslation } from 'react-i18next';

import { TProject } from '../../models';

import './index.scss';

type TProps = {
    project: TProject;
};

export const PortfolioProject: React.FC<TProps> = ({ project }) => {
    const { t } = useTranslation();
    const { goal, team, completedObjectives, technologies, tools } = project;

    return (
        <div className="portfolio-project">
            <div className="portfolio-project__section">
                <div className="portfolio-project__title">{t('portfolio.project.goal')}</div>
                <div className="portfolio-project__goal">{goal}</div>
            </div>

            <div className="portfolio-project__section">
                <div className="portfolio-project__title">{t('portfolio.project.team')}</div>
                <div className="portfolio-project__team">{team}</div>
            </div>

            <div className="portfolio-project__section">
                <div className="portfolio-project__title">{t('portfolio.project.completed-objectives')}</div>
                <ol className="portfolio-project__completed-objectives">
                    {completedObjectives.map((completedObjective, index) => <li key={index}>{completedObjective}</li>)}
                </ol>
            </div>

            <div className="portfolio-project__section">
                <div className="portfolio-project__title">{t('portfolio.project.technologies')}</div>
                <ul className="portfolio-project__technologies">
                    {technologies.map((technology, index) => <li key={index}>{technology}</li>)}
                </ul>
            </div>

            <div className="portfolio-project__section">
                <div className="portfolio-project__title">{t('portfolio.project.tools')}</div>
                <ul className="portfolio-project__tools">
                    {tools.map((tool, index) => <li key={index}>{tool}</li>)}
                </ul>
            </div>
        </div>
    )
};
