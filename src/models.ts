import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { TIMELINE_ITEM_POSITION, SKILLS_TYPE, TIMELINE_INFORMATION_TYPE } from './enums';

export type TVideo = {
    id: string;
    thumbnail?: string;
    width: number;
    height: number;
}

// export type TImage = {
//     small: {
//         srcMain: string;
//         srcFallback: string;
//         width: number;
//         height: number;
//     },
//     large: {
//         srcMain: string;
//         width: number;
//         height: number;
//     }
// }

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
    image?: TImageModel;
    video?: TVideo;
    informationType?: TIMELINE_INFORMATION_TYPE;
    icon?: IconDefinition;
};

export type TProject = {
    id: string;
    label: string;
    goal: string;
    team: string;
    completedObjectives: string[];
    technologies: string[];
    tools: string[];
    imageGalleryKeys?: string[];
}

type TItemCommon = {
    id: string;
    type: SKILLS_TYPE;
    label: string;
    image?: TImageModel;
    icon: IconDefinition;
}

export type TContentItem = {
    label: string;
    text: string[];
}

export type TSkillsItem = {
    content: TContentItem[];
    imageGallery?: TImageModel[];
} & TItemCommon;

export type TPortfolioItem = {
    projects?: TProject[];
    content?: TContentItem[];
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
    image: TImageModel;
    label: string;
    tags: string[]
};


// New Image
type TImageSizes = {
    width: number;
    height: number;
}

type TImageSources = {
    webp: string;
    jpg: string;
}
  
type ImageVersion = {
    sources: TImageSources;
} & TImageSizes

export type TImageModel = {
    id: string; // Уникальный идентификатор изображения
    title: string; // Название или описание изображения
    preview: ImageVersion; // Превью версия для обычных экранов
    previewRetina: ImageVersion; // Превью версия для Retina экранов
    original: ImageVersion; // Увеличенная версия для обычных экранов
    originalRetina: ImageVersion; // Увеличенная версия для Retina экранов
}
