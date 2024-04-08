import { TFunction } from 'i18next';
import { faTasks } from '@fortawesome/free-solid-svg-icons/faTasks';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons/faChalkboardTeacher';

import { TSkillsItem } from '../models';
import { SKILLS_TYPE } from '../enums';

// Management
import management_5_s_200x148_main from '../assets/skills/management_5_s_200x148.webp';
import management_5_s_200x148_fallback from '../assets/skills/management_5_s_200x148.jpeg';
import management_5_l_600x446_large from '../assets/skills/management_5_l_600x446.jpeg';
import management_4_s_200x154_main from '../assets/skills/management_4_s_200x154.webp';
import management_4_s_200x154_fallback from '../assets/skills/management_4_s_200x154.jpeg';
import management_4_l_600x463_large from '../assets/skills/management_4_l_600x463.jpeg';
import management_6_s_200x148_main from '../assets/skills/management_6_s_200x148.webp';
import management_6_s_200x148_fallback from '../assets/skills/management_6_s_200x148.jpeg';
import management_6_l_600x446_large from '../assets/skills/management_6_l_600x446.jpeg';
import management_7_s_200x148_main from '../assets/skills/management_7_s_200x148.webp';
import management_7_s_200x148_fallback from '../assets/skills/management_7_s_200x148.jpeg';
import management_7_l_600x446_large from '../assets/skills/management_7_l_600x446.jpeg';
import management_3_s_200x154_main from '../assets/skills/management_3_s_200x154.webp';
import management_3_s_200x154_fallback from '../assets/skills/management_3_s_200x154.jpeg';
import management_3_l_600x463_large from '../assets/skills/management_3_l_600x463.jpeg';
import management_2_s_200x154_main from '../assets/skills/management_2_s_200x154.webp';
import management_2_s_200x154_fallback from '../assets/skills/management_2_s_200x154.jpeg';
import management_2_l_600x463_large from '../assets/skills/management_2_l_600x463.jpeg';
import management_1_s_200x154_main from '../assets/skills/management_1_s_200x154.webp';
import management_1_s_200x154_fallback from '../assets/skills/management_1_s_200x154.jpeg';
import management_1_l_600x463_large from '../assets/skills/management_1_l_600x463.jpeg';
import management_main_s_200x300_main from '../assets/skills/management_main_s_200x300.webp';
import management_main_s_200x300_fallback from '../assets/skills/management_main_s_200x300.jpeg';
import management_main_l_600x900_large from '../assets/skills/management_main_l_600x900.jpeg';

// Programming
import programming_main_s_200x300_main from '../assets/skills/programming_main_s_200x300.webp';
import programming_main_s_200x300_fallback from '../assets/skills/programming_main_s_200x300.jpeg';
import programming_main_l_600x901_large from '../assets/skills/programming_main_l_600x901.jpeg';

// Blogging
import blogging_main_s_200x150_main from '../assets/skills/blogging_main_s_200x150.webp';
import blogging_main_s_200x150_fallback from '../assets/skills/blogging_main_s_200x150.jpeg';
import blogging_main_l_600x450_large from '../assets/skills/blogging_main_l_600x450.jpeg';
import blogging_4_s_200x149_main from '../assets/skills/blogging_4_s_200x149.webp';
import blogging_4_s_200x149_fallback from '../assets/skills/blogging_4_s_200x149.jpeg';
import blogging_4_l_600x447_large from '../assets/skills/blogging_4_l_600x447.jpeg';
import blogging_5_s_200x149_main from '../assets/skills/blogging_5_s_200x149.webp';
import blogging_5_s_200x149_fallback from '../assets/skills/blogging_5_s_200x149.jpeg';
import blogging_5_l_600x447_large from '../assets/skills/blogging_5_l_600x447.jpeg';
import blogging_6_s_200x149_main from '../assets/skills/blogging_6_s_200x149.webp';
import blogging_6_s_200x149_fallback from '../assets/skills/blogging_6_s_200x149.jpeg';
import blogging_6_l_600x447_large from '../assets/skills/blogging_6_l_600x447.jpeg';
import blogging_2_s_200x149_main from '../assets/skills/blogging_2_s_200x149.webp';
import blogging_2_s_200x149_fallback from '../assets/skills/blogging_2_s_200x149.jpeg';
import blogging_2_l_600x447_large from '../assets/skills/blogging_2_l_600x447.jpeg';
import blogging_3_s_200x149_main from '../assets/skills/blogging_3_s_200x149.webp';
import blogging_3_s_200x149_fallback from '../assets/skills/blogging_3_s_200x149.jpeg';
import blogging_3_l_600x447_large from '../assets/skills/blogging_3_l_600x447.jpeg';
import blogging_1_s_200x149_main from '../assets/skills/blogging_1_s_200x149.webp';
import blogging_1_s_200x149_fallback from '../assets/skills/blogging_1_s_200x149.jpeg';
import blogging_1_l_600x447_large from '../assets/skills/blogging_1_l_600x447.jpeg';

// Consulting
import consulting_main_s_200x150_main from '../assets/skills/consulting_main_s_200x150.webp';
import consulting_main_s_200x150_fallback from '../assets/skills/consulting_main_s_200x150.jpeg';
import consulting_main_l_600x450_large from '../assets/skills/consulting_main_l_600x450.jpeg';

export const getSkillsData = (t: TFunction): TSkillsItem[] => [
    {
        id: 'skills-id-1',
        type: SKILLS_TYPE.MANAGEMENT,
        icon: faTasks,
        label: t('skills.list.management.label'),
        content: t('skills.list.management.content', { returnObjects: true }),
        image: {
            srcSmallMain: management_main_s_200x300_main,
            srcSmallFallback: management_main_s_200x300_fallback,
            srcLarge: management_main_l_600x900_large,
            width: 200,
            height: 300
        },
        imageGallery: [
            {
                srcSmallMain: management_1_s_200x154_main,
                srcSmallFallback: management_1_s_200x154_fallback,
                srcLarge: management_1_l_600x463_large,
                width: 200,
                height: 154
            },
            {
                srcSmallMain: management_2_s_200x154_main,
                srcSmallFallback: management_2_s_200x154_fallback,
                srcLarge: management_2_l_600x463_large,
                width: 200,
                height: 154
            },
            {
                srcSmallMain: management_3_s_200x154_main,
                srcSmallFallback: management_3_s_200x154_fallback,
                srcLarge: management_3_l_600x463_large,
                width: 200,
                height: 154
            },
            {
                srcSmallMain: management_4_s_200x154_main,
                srcSmallFallback: management_4_s_200x154_fallback,
                srcLarge: management_4_l_600x463_large,
                width: 200,
                height: 154
            },
            {
                srcSmallMain: management_5_s_200x148_main,
                srcSmallFallback: management_5_s_200x148_fallback,
                srcLarge: management_5_l_600x446_large,
                width: 200,
                height: 148
            },
            {
                srcSmallMain: management_6_s_200x148_main,
                srcSmallFallback: management_6_s_200x148_fallback,
                srcLarge: management_6_l_600x446_large,
                width: 200,
                height: 148
            },
            {
                srcSmallMain: management_7_s_200x148_main,
                srcSmallFallback: management_7_s_200x148_fallback,
                srcLarge: management_7_l_600x446_large,
                width: 200,
                height: 148
            },
        ]
    },
    {
        id: 'skills-id-2',
        type: SKILLS_TYPE.PROGRAMMING,
        icon: faLaptopCode,
        label: t('skills.list.programming.label'),
        content: t('skills.list.programming.content', { returnObjects: true }),
        image: {
            srcSmallMain: programming_main_s_200x300_main,
            srcSmallFallback: programming_main_s_200x300_fallback,
            srcLarge: programming_main_l_600x901_large,
            width: 200,
            height: 300
        },
    },
    {
        id: 'skills-id-3',
        type: SKILLS_TYPE.BLOGGING,
        icon: faFilm,
        label: t('skills.list.blogging.label'),
        content: t('skills.list.blogging.content', { returnObjects: true }),
        image: {
            srcSmallMain: blogging_main_s_200x150_main,
            srcSmallFallback: blogging_main_s_200x150_fallback,
            srcLarge: blogging_main_l_600x450_large,
            width: 200,
            height: 150
        },
        imageGallery: [
            {
                srcSmallMain: blogging_1_s_200x149_main,
                srcSmallFallback: blogging_1_s_200x149_fallback,
                srcLarge: blogging_1_l_600x447_large,
                width: 200,
                height: 149
            },
            {
                srcSmallMain: blogging_2_s_200x149_main,
                srcSmallFallback: blogging_2_s_200x149_fallback,
                srcLarge: blogging_2_l_600x447_large,
                width: 200,
                height: 149
            },
            {
                srcSmallMain: blogging_3_s_200x149_main,
                srcSmallFallback: blogging_3_s_200x149_fallback,
                srcLarge: blogging_3_l_600x447_large,
                width: 200,
                height: 149
            },
            {
                srcSmallMain: blogging_4_s_200x149_main,
                srcSmallFallback: blogging_4_s_200x149_fallback,
                srcLarge: blogging_4_l_600x447_large,
                width: 200,
                height: 149
            },
            {
                srcSmallMain: blogging_5_s_200x149_main,
                srcSmallFallback: blogging_5_s_200x149_fallback,
                srcLarge: blogging_5_l_600x447_large,
                width: 200,
                height: 149
            },
            {
                srcSmallMain: blogging_6_s_200x149_main,
                srcSmallFallback: blogging_6_s_200x149_fallback,
                srcLarge: blogging_6_l_600x447_large,
                width: 200,
                height: 149
            },
        ]
    },
    {
        id: 'skills-id-4',
        type: SKILLS_TYPE.CONSULTING,
        icon: faChalkboardTeacher,
        label: t('skills.list.consulting.label'),
        content: t('skills.list.consulting.content', { returnObjects: true }),
        image: {
            srcSmallMain: consulting_main_s_200x150_main,
            srcSmallFallback: consulting_main_s_200x150_fallback,
            srcLarge: consulting_main_l_600x450_large,
            width: 200,
            height: 150
        },
    },
];
