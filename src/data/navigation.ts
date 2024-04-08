import { TFunction } from 'i18next';

import { TNavigationItem } from '../models';

export const getNavigationData = (t: TFunction): TNavigationItem[] => [
    {
        label: t('navigation.timeline'),
        className: "section-timeline",
    },
    {
        label: t('navigation.skills'),
        className: "section-skills",
    },
    {
        label: t('navigation.portfolio'),
        className: "section-portfolio",
    },
    {
        label: t('navigation.viewsAndIdeas'),
        className: "section-views-and-ideas",
    }
];
