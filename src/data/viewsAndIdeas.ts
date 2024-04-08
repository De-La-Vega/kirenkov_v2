
import { TFunction } from 'i18next';
import { TViewsAndIdeasItem } from '../models';

import views_and_ideas_id_1_s_400x269_main from '../assets/viewsAndIdeas/views_and_ideas_id_1_s_400x269.webp';
import views_and_ideas_id_1_s_400x269_fallback from '../assets/viewsAndIdeas/views_and_ideas_id_1_s_400x269.jpeg';
import views_and_ideas_id_1_l_600x404_large from '../assets/viewsAndIdeas/views_and_ideas_id_1_l_600x404.jpeg';
import views_and_ideas_id_2_s_400x217_main from '../assets/viewsAndIdeas/views_and_ideas_id_2_s_400x217.webp';
import views_and_ideas_id_2_s_400x217_fallback from '../assets/viewsAndIdeas/views_and_ideas_id_2_s_400x217.png';
import views_and_ideas_id_2_l_600x326_large from '../assets/viewsAndIdeas/views_and_ideas_id_2_l_600x326.png';
import views_and_ideas_id_3_s_400x233_main from '../assets/viewsAndIdeas/views_and_ideas_id_3_s_400x233.webp';
import views_and_ideas_id_3_s_400x233_fallback from '../assets/viewsAndIdeas/views_and_ideas_id_3_s_400x233.jpeg';
import views_and_ideas_id_3_l_600x350_large from '../assets/viewsAndIdeas/views_and_ideas_id_3_l_600x350.jpeg';
import views_and_ideas_id_4_s_400x225_main from '../assets/viewsAndIdeas/views_and_ideas_id_4_s_400x225.webp';
import views_and_ideas_id_4_s_400x225_fallback from '../assets/viewsAndIdeas/views_and_ideas_id_4_s_400x225.jpeg';
import views_and_ideas_id_4_l_600x337_large from '../assets/viewsAndIdeas/views_and_ideas_id_4_l_600x337.jpeg';
import views_and_ideas_id_5_s_400x225_main from '../assets/viewsAndIdeas/views_and_ideas_id_5_s_400x225.webp';
import views_and_ideas_id_5_s_400x225_fallback from '../assets/viewsAndIdeas/views_and_ideas_id_5_s_400x225.jpeg';
import views_and_ideas_id_5_l_600x337_large from '../assets/viewsAndIdeas/views_and_ideas_id_5_l_600x337.jpeg';
import views_and_ideas_id_6_s_400x225_main from '../assets/viewsAndIdeas/views_and_ideas_id_6_s_400x225.webp';
import views_and_ideas_id_6_s_400x225_fallback from '../assets/viewsAndIdeas/views_and_ideas_id_6_s_400x225.jpg';
import views_and_ideas_id_6_l_600x281_large from '../assets/viewsAndIdeas/views_and_ideas_id_6_l_600x281.png';

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
        image: {
            srcSmallMain: views_and_ideas_id_1_s_400x269_main,
            srcSmallFallback: views_and_ideas_id_1_s_400x269_fallback,
            srcLarge: views_and_ideas_id_1_l_600x404_large,
            width: 400,
            height: 269
        },
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
        image: {
            srcSmallMain: views_and_ideas_id_2_s_400x217_main,
            srcSmallFallback: views_and_ideas_id_2_s_400x217_fallback,
            srcLarge: views_and_ideas_id_2_l_600x326_large,
            width: 400,
            height: 217
        },
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
        image: {
            srcSmallMain: views_and_ideas_id_3_s_400x233_main,
            srcSmallFallback: views_and_ideas_id_3_s_400x233_fallback,
            srcLarge: views_and_ideas_id_3_l_600x350_large,
            width: 400,
            height: 233
        },
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
        image: {
            srcSmallMain: views_and_ideas_id_4_s_400x225_main,
            srcSmallFallback: views_and_ideas_id_4_s_400x225_fallback,
            srcLarge: views_and_ideas_id_4_l_600x337_large,
            width: 400,
            height: 225
        },
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
        image: {
            srcSmallMain: views_and_ideas_id_5_s_400x225_main,
            srcSmallFallback: views_and_ideas_id_5_s_400x225_fallback,
            srcLarge: views_and_ideas_id_5_l_600x337_large,
            width: 400,
            height: 225
        },
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
        image: {
            srcSmallMain: views_and_ideas_id_6_s_400x225_main,
            srcSmallFallback: views_and_ideas_id_6_s_400x225_fallback,
            srcLarge: views_and_ideas_id_6_l_600x281_large,
            width: 400,
            height: 187
        },
    },
];
