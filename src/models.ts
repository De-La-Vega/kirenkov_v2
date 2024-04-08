import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { TIMELINE_ITEM_POSITION, SKILLS_TYPE, TIMELINE_INFORMATION_TYPE } from './enums';

export type TVideo = {
    id: string;
    thumbnail?: string;
    width: number;
    height: number;
}

export type TImage = {
    srcSmallMain: string;
    srcSmallFallback: string;
    srcLarge: string;
    width: number;
    height: number;
}

export type TTimelineItem = {
    id: string;
    dateRange: [number, number];
    content: {
        heading?: string;
        subheading?: string;
        description: string;
    };
    position: TIMELINE_ITEM_POSITION;
    level?: 0 | 1 | 2;
    image?: TImage;
    video?: TVideo;
    informationType?: TIMELINE_INFORMATION_TYPE;
};

export type TProject = {
    id: string;
    label: string;
    goal: string;
    team: string;
    completedObjectives: string[];
    technologies: string[];
    tools: string[];
}

type TItemCommon = {
    id: string;
    type: SKILLS_TYPE;
    label: string;
    image?: TImage;
    icon: IconDefinition;
}

export type TSkillsItem = {
    content: string[];
    imageGallery?: TImage[];
} & TItemCommon;

export type TPortfolioItem = {
    projects?: TProject[];
    content?: string[];
    videoGallery?: TVideo[];
    video?: TVideo;
} & TItemCommon;

export type TNavigationItem = {
    label: string;
    className: string;
};

export type TViewsAndIdeasItem = {
    id: string;
    link: string;
    image: TImage;
    label: string;
    tags: string[]
};


