
import { TFunction } from 'i18next';

import { TViewsAndIdeasItem } from '../models';

import { getGallery } from'./viewsAndIdeasGallery';
import { VIEWS_AND_IDEAS } from './ids';

export const getViewsAndIdeasData = (t: TFunction): TViewsAndIdeasItem[] => [
    {
        id: VIEWS_AND_IDEAS.Id1,
        link: 'https://www.linkedin.com/posts/kirenkov_projectmanagement-productivity-innovation-activity-7093950586986844160-lfFe',
        label: t(`viewsAndIdeas.list.${VIEWS_AND_IDEAS.Id1}.label`),
        tags: [
            t('viewsAndIdeas.tags.management'),
            t('viewsAndIdeas.tags.productivity'),
            t('viewsAndIdeas.tags.publication'),
        ],
        image: getGallery(t)[VIEWS_AND_IDEAS.Id1],
    },
    {
        id: VIEWS_AND_IDEAS.Id2,
        link: 'https://www.linkedin.com/posts/kirenkov_leadership-certifications-activity-7114886835595567106-rqK1',
        label: t(`viewsAndIdeas.list.${VIEWS_AND_IDEAS.Id2}.label`),
        tags: [
            t('viewsAndIdeas.tags.management'),
            t('viewsAndIdeas.tags.development'),
            t('viewsAndIdeas.tags.publication'),
        ],
        image: getGallery(t)[VIEWS_AND_IDEAS.Id2],
    },
    {
        id: VIEWS_AND_IDEAS.Id3,
        link: 'https://vitaliy-kirenkov.medium.com/sliding-underline-in-navigation-b95399fc4601',
        label: t(`viewsAndIdeas.list.${VIEWS_AND_IDEAS.Id3}.label`),
        tags: [
            t('viewsAndIdeas.tags.development'),
            t('viewsAndIdeas.tags.ui'),
            t('viewsAndIdeas.tags.article'),
        ],
        image: getGallery(t)[VIEWS_AND_IDEAS.Id3],
    },
    {
        id: VIEWS_AND_IDEAS.Id4,
        link: 'https://www.youtube.com/watch?v=ZkJ2Q3zBvLU',
        label: t(`viewsAndIdeas.list.${VIEWS_AND_IDEAS.Id4}.label`),
        tags: [
            t('viewsAndIdeas.tags.management'),
            t('viewsAndIdeas.tags.consulting'),
            t('viewsAndIdeas.tags.interview'),
        ],
        image: getGallery(t)[VIEWS_AND_IDEAS.Id4],
    },
    {
        id: VIEWS_AND_IDEAS.Id5,
        link: 'https://www.youtube.com/watch?v=nGA2KjYodUc',
        label: t(`viewsAndIdeas.list.${VIEWS_AND_IDEAS.Id5}.label`),
        tags: [
            t('viewsAndIdeas.tags.development'),
            t('viewsAndIdeas.tags.blogging'),
            t('viewsAndIdeas.tags.interview'),
        ],
        image: getGallery(t)[VIEWS_AND_IDEAS.Id5],
    },
    {
        id: VIEWS_AND_IDEAS.Id6,
        link: 'https://ru.hexlet.io/blog/posts/zachem-izuchat-html-i-css-ili-kogda-roboty-zamenyat-verstalschikov-na-rynke-truda',
        label: t(`viewsAndIdeas.list.${VIEWS_AND_IDEAS.Id6}.label`),
        tags: [
            t('viewsAndIdeas.tags.development'),
            t('viewsAndIdeas.tags.consulting'),
            t('viewsAndIdeas.tags.article'),
        ],
        image: getGallery(t)[VIEWS_AND_IDEAS.Id6],
    },
];
