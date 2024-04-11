
import { TFunction } from 'i18next';
import { TViewsAndIdeasItem } from '../models';

import { gallery } from'./viewsAndIdeasGallery';

export const getViewsAndIdeasData = (t: TFunction): TViewsAndIdeasItem[] => [
    {
        id: 'views-and-ideas-id-1',
        link: 'https://www.linkedin.com/posts/kirenkov_projectmanagement-productivity-innovation-activity-7093950586986844160-lfFe',
        label: t('viewsAndIdeas.list.views-and-ideas-id-1.label'),
        tags: [
            t('viewsAndIdeas.tags.management'),
            t('viewsAndIdeas.tags.productivity'),
            t('viewsAndIdeas.tags.publication'),
        ],
        image: gallery['views_and_ideas_id_1'],
    },
    {
        id: 'views-and-ideas-id-2',
        link: 'https://www.linkedin.com/posts/kirenkov_leadership-certifications-activity-7114886835595567106-rqK1',
        label: t('viewsAndIdeas.list.views-and-ideas-id-2.label'),
        tags: [
            t('viewsAndIdeas.tags.management'),
            t('viewsAndIdeas.tags.development'),
            t('viewsAndIdeas.tags.publication'),
        ],
        image: gallery['views_and_ideas_id_2'],
    },
    {
        id: 'views-and-ideas-id-3',
        link: 'https://vitaliy-kirenkov.medium.com/sliding-underline-in-navigation-b95399fc4601',
        label: t('viewsAndIdeas.list.views-and-ideas-id-3.label'),
        tags: [
            t('viewsAndIdeas.tags.development'),
            t('viewsAndIdeas.tags.ui'),
            t('viewsAndIdeas.tags.article'),
        ],
        image: gallery['views_and_ideas_id_3'],
    },
    {
        id: 'views-and-ideas-id-4',
        link: 'https://www.youtube.com/watch?v=ZkJ2Q3zBvLU',
        label: t('viewsAndIdeas.list.views-and-ideas-id-4.label'),
        tags: [
            t('viewsAndIdeas.tags.management'),
            t('viewsAndIdeas.tags.consulting'),
            t('viewsAndIdeas.tags.interview'),
        ],
        image: gallery['views_and_ideas_id_4'],
    },
    {
        id: 'views-and-ideas-id-5',
        link: 'https://www.youtube.com/watch?v=nGA2KjYodUc',
        label: t('viewsAndIdeas.list.views-and-ideas-id-5.label'),
        tags: [
            t('viewsAndIdeas.tags.development'),
            t('viewsAndIdeas.tags.blogging'),
            t('viewsAndIdeas.tags.interview'),
        ],
        image: gallery['views_and_ideas_id_5'],
    },
    {
        id: 'views-and-ideas-id-6',
        link: 'https://ru.hexlet.io/blog/posts/zachem-izuchat-html-i-css-ili-kogda-roboty-zamenyat-verstalschikov-na-rynke-truda',
        label: t('viewsAndIdeas.list.views-and-ideas-id-6.label'),
        tags: [
            t('viewsAndIdeas.tags.development'),
            t('viewsAndIdeas.tags.consulting'),
            t('viewsAndIdeas.tags.article'),
        ],
        image: gallery['views_and_ideas_id_6'],
    },
];
