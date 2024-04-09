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
import blogging_main_s_200x133_main from '../assets/skills/blogging_main_s_200x133.webp';
import blogging_main_s_200x133_fallback from '../assets/skills/blogging_main_s_200x133.jpg';
import blogging_main_l_600x400_large from '../assets/skills/blogging_main_l_600x400.jpg';
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
            small: {
                srcMain: management_main_s_200x300_main,
                srcFallback: management_main_s_200x300_fallback,
                width: 200,
                height: 300
            },
            large: {
                srcMain: management_main_l_600x900_large,
                width: 600,
                height: 900,
            },
        },
        imageGallery: [
            {
                small: {
                    srcMain: management_1_s_200x154_main,
                    srcFallback: management_1_s_200x154_fallback,
                    width: 200,
                    height: 154
                },
                large: {
                    srcMain: management_1_l_600x463_large,
                    width: 600,
                    height: 463,
                },
            },
            {
                small: {
                    srcMain: management_2_s_200x154_main,
                    srcFallback: management_2_s_200x154_fallback,
                    width: 200,
                    height: 154
                },
                large: {
                    srcMain: management_2_l_600x463_large,
                    width: 600,
                    height: 463,
                },
            },
            {
                small: {
                    srcMain: management_3_s_200x154_main,
                    srcFallback: management_3_s_200x154_fallback,
                    width: 200,
                    height: 154
                },
                large: {
                    srcMain: management_3_l_600x463_large,
                    width: 600,
                    height: 463,
                },
            },
            {
                small: {
                    srcMain: management_4_s_200x154_main,
                    srcFallback: management_4_s_200x154_fallback,
                    width: 200,
                    height: 154
                },
                large: {
                    srcMain: management_4_l_600x463_large,
                    width: 600,
                    height: 463,
                },
            },
            {
                small: {
                    srcMain: management_5_s_200x148_main,
                    srcFallback: management_5_s_200x148_fallback,
                    width: 200,
                    height: 148
                },
                large: {
                    srcMain: management_5_l_600x446_large,
                    width: 600,
                    height: 446,
                },
            },
            {
                small: {
                    srcMain: management_6_s_200x148_main,
                    srcFallback: management_6_s_200x148_fallback,
                    width: 200,
                    height: 148
                },
                large: {
                    srcMain: management_6_l_600x446_large,
                    width: 600,
                    height: 446,
                },
            },
            {
                small: {
                    srcMain: management_7_s_200x148_main,
                    srcFallback: management_7_s_200x148_fallback,
                    width: 200,
                    height: 148
                },
                large: {
                    srcMain: management_7_l_600x446_large,
                    width: 600,
                    height: 446,
                },
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
            small: {
                srcMain: programming_main_s_200x300_main,
                srcFallback: programming_main_s_200x300_fallback,
                width: 200,
                height: 300
            },
            large: {
                srcMain: programming_main_l_600x901_large,
                width: 600,
                height: 901,
            },
        },
    },
    {
        id: 'skills-id-3',
        type: SKILLS_TYPE.BLOGGING,
        icon: faFilm,
        label: t('skills.list.blogging.label'),
        content: t('skills.list.blogging.content', { returnObjects: true }),
        image: {
            small: {
                srcMain: blogging_main_s_200x133_main,
                srcFallback: blogging_main_s_200x133_fallback,
                width: 200,
                height: 133
            },
            large: {
                srcMain: blogging_main_l_600x400_large,
                width: 600,
                height: 400,
            },
        },
        imageGallery: [
            {
                small: {
                    srcMain: blogging_1_s_200x149_main,
                    srcFallback: blogging_1_s_200x149_fallback,
                    width: 200,
                    height: 149
                },
                large: {
                    srcMain: blogging_1_l_600x447_large,
                    width: 600,
                    height: 447,
                },
            },
            {
                small: {
                    srcMain: blogging_2_s_200x149_main,
                    srcFallback: blogging_2_s_200x149_fallback,
                    width: 200,
                    height: 149
                },
                large: {
                    srcMain: blogging_2_l_600x447_large,
                    width: 600,
                    height: 447,
                },
            },
            {
                small: {
                    srcMain: blogging_3_s_200x149_main,
                    srcFallback: blogging_3_s_200x149_fallback,
                    width: 200,
                    height: 149
                },
                large: {
                    srcMain: blogging_3_l_600x447_large,
                    width: 600,
                    height: 447,
                },
            },
            {
                small: {
                    srcMain: blogging_4_s_200x149_main,
                    srcFallback: blogging_4_s_200x149_fallback,
                    width: 200,
                    height: 149
                },
                large: {
                    srcMain: blogging_4_l_600x447_large,
                    width: 600,
                    height: 447,
                },
            },
            {
                small: {
                    srcMain: blogging_5_s_200x149_main,
                    srcFallback: blogging_5_s_200x149_fallback,
                    width: 200,
                    height: 149
                },
                large: {
                    srcMain: blogging_5_l_600x447_large,
                    width: 600,
                    height: 447,
                },
            },
            {
                small: {
                    srcMain: blogging_6_s_200x149_main,
                    srcFallback: blogging_6_s_200x149_fallback,
                    width: 200,
                    height: 149
                },
                large: {
                    srcMain: blogging_6_l_600x447_large,
                    width: 600,
                    height: 447,
                },
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
            small: {
                srcMain: consulting_main_s_200x150_main,
                srcFallback: consulting_main_s_200x150_fallback,
                width: 200,
                height: 150
            },
            large: {
                srcMain: consulting_main_l_600x450_large,
                width: 600,
                height: 450,
            },
        },
    },
];
