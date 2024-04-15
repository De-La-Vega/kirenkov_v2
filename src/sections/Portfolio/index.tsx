import React, { useCallback, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { LOCAL_STORAGE_KEY, SKILLS_TYPE, ID } from '../../enums';
import { Heading } from '../../components/Heading';
import { getPortfolioData } from '../../data/portfolio';
import useLocalStorage from '../../useLocalStorage';

import { PortfolioProject } from './PortfolioProject';
import { PortfolioContent } from './PortfolioContent';
import PortfolioTab from './PortfolioTab';

import './index.scss';

const PortfolioProjectMemo = React.memo(PortfolioProject);
const PortfolioContentMemo = React.memo(PortfolioContent);
const PortfolioTabMemo = React.memo(PortfolioTab);

export const Portfolio: React.FC = () => {
    const { t } = useTranslation();
    const portfolioData = useMemo(() => getPortfolioData(t), [t]);
    
    const [portfolioType, setPortfolioType] = useLocalStorage<SKILLS_TYPE>(LOCAL_STORAGE_KEY.ACTIVE_PORTFOLIO_TYPE, SKILLS_TYPE.MANAGEMENT);
    const [selectedProjectID, setSelectedProjectID] = useLocalStorage<string | null>(LOCAL_STORAGE_KEY.ACTIVE_PORTFOLIO_PROJECT, null);

    const activeItem = useMemo(() => portfolioData.find((item) => item.type === portfolioType), [portfolioData, portfolioType]);
    const projects = activeItem?.projects || null;
    const selectedProject = useMemo(() => projects?.find((project) => project.id === selectedProjectID) || projects?.[0] || null, [projects, selectedProjectID]);

    // Обновление выбранного проекта при инициализации
    useEffect(() => {
        if (selectedProject?.id && selectedProjectID !== selectedProject.id) {
            setSelectedProjectID(selectedProject.id);
        }
    }, [selectedProject, selectedProjectID, setSelectedProjectID]);

    const handlePortfolioTypeClick = useCallback((itemType: SKILLS_TYPE) => {
        const activeTypeObj = portfolioData.find((item) => item.type === itemType);
        const projectId = activeTypeObj?.projects?.[0]?.id || null;
        
        setPortfolioType(itemType);
        setSelectedProjectID(projectId);
    }, [portfolioData, setPortfolioType, setSelectedProjectID]);

    const handlePortfolioProjectClick = useCallback((id: string) => {
        setSelectedProjectID(id);
    }, [setSelectedProjectID]);

    return (
        <section className="g-outer section-portfolio" aria-labelledby={ID.PORTFOLIO}>
            <div className="g-inner">
                <Heading primaryText={t('navigation.portfolio')} id={ID.PORTFOLIO} />

                <div
                    className={classNames('portfolio', {
                        'portfolio_management': portfolioType === SKILLS_TYPE.MANAGEMENT,
                        'portfolio_programming': portfolioType === SKILLS_TYPE.PROGRAMMING,
                        'portfolio_blogging': portfolioType === SKILLS_TYPE.BLOGGING,
                        'portfolio_consulting': portfolioType === SKILLS_TYPE.CONSULTING,
                    })}
                >
                    <div className="portfolio__column portfolio__column_order-1">
                        <div className="portfolio__column-heading">{t('portfolio.subheading.fieldOfActivity')}</div>

                        <div className="portfolio-skills-list" role="tablist">
                            {portfolioData.map((portfolioMainTab) => (
                                <PortfolioTabMemo
                                    key={portfolioMainTab.type}
                                    itemType={portfolioMainTab.type}
                                    isActive={portfolioType === portfolioMainTab.type}
                                    onClick={() => handlePortfolioTypeClick(portfolioMainTab.type)}
                                    label={portfolioMainTab.label}
                                    icon={portfolioMainTab.icon}
                                />
                            ))}
                        </div>
                    </div>

                    {projects && (
                        <div className="portfolio__column portfolio__column_order-2">
                            <div className="portfolio__column-heading">{t('portfolio.subheading.projects')}</div>

                            <div className="portfolio-projects-list" role="tablist">
                                {projects.map((project) => (
                                    <PortfolioTabMemo
                                        key={project.id}
                                        itemType={portfolioType}
                                        isActive={selectedProjectID === project.id}
                                        onClick={() => handlePortfolioProjectClick(project.id)}
                                        label={project.label}
                                        classification={project.classification}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="portfolio__column portfolio__column_order-3">
                        <div className="portfolio__column-heading">{t('portfolio.subheading.details')}</div>

                        {selectedProject && <PortfolioProjectMemo project={selectedProject} />}
                        {activeItem?.content && <PortfolioContentMemo item={activeItem} />}
                    </div>
                </div>
            </div>
        </section>
    );
};
