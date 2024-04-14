
import { TFunction } from 'i18next';
import { faTasks } from '@fortawesome/free-solid-svg-icons/faTasks';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons/faChalkboardTeacher';

import { TPortfolioItem, TProject, TContentItem } from '../models';
import { SKILLS_TYPE } from '../enums';

import { getGallery } from'./portfolioGallery';

// Blogging
import blogging_1 from '../assets/portfolio/blogging-1.mp4';
import blogging_2 from '../assets/portfolio/blogging-2.mp4';
import blogging_3 from '../assets/portfolio/blogging-3.mp4';

import yt_thumbnail from '../assets/portfolio/thumbnail-portfolio.jpeg';

export const getPortfolioData = (t: TFunction): TPortfolioItem[] => [
    {
        id: SKILLS_TYPE.MANAGEMENT,
        type: SKILLS_TYPE.MANAGEMENT,
        icon: faTasks,
        label: t(`portfolio.list.${SKILLS_TYPE.MANAGEMENT}.label`),
        projects: t(`portfolio.list.${SKILLS_TYPE.MANAGEMENT}.content`, { returnObjects: true }) as TProject[],
    },
    {
        id: SKILLS_TYPE.PROGRAMMING,
        type: SKILLS_TYPE.PROGRAMMING,
        icon: faLaptopCode,
        label: t(`portfolio.list.${SKILLS_TYPE.PROGRAMMING}.label`),
        projects: t(`portfolio.list.${SKILLS_TYPE.PROGRAMMING}.content`, { returnObjects: true }) as TProject[],
    },
    {
        id: SKILLS_TYPE.BLOGGING,
        type: SKILLS_TYPE.BLOGGING,
        icon: faFilm,
        label: t(`portfolio.list.${SKILLS_TYPE.BLOGGING}.label`),
        content: t(`portfolio.list.${SKILLS_TYPE.BLOGGING}.content`, { returnObjects: true }) as TContentItem[],
        video: { id: '2Bo619QsSE4', width: 400, height: 225, thumbnail: yt_thumbnail },
        videoGallery: [
            { id: blogging_1, width: 200, height: 355 },
            { id: blogging_2, width: 200, height: 355 },
            { id: blogging_3, width: 200, height: 355 },
        ]
    },
    {
        id: SKILLS_TYPE.CONSULTING,
        type: SKILLS_TYPE.CONSULTING,
        icon: faChalkboardTeacher,
        label: t(`portfolio.list.${SKILLS_TYPE.CONSULTING}.label`),
        content: t(`portfolio.list.${SKILLS_TYPE.CONSULTING}.content`, { returnObjects: true }) as TContentItem[],
        image: getGallery(t)['consulting_main'],
    },
];
