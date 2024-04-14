import { TFunction } from 'i18next';

import { TImageModel } from '../models';
import { SKILLS_TYPE } from '../enums';

// Management
import management_main_preview_webp from '../assets/skills/management_main_preview_200x300.webp';
import management_main_preview_jpg from '../assets/skills/management_main_preview_200x300.jpg';
import management_main_previewRetina_webp from '../assets/skills/management_main_previewRetina_400x600.webp';
import management_main_previewRetina_jpg from '../assets/skills/management_main_previewRetina_400x600.jpg';
import management_main_original_webp from '../assets/skills/management_main_original_600x900.webp';
import management_main_original_jpg from '../assets/skills/management_main_original_600x900.jpg';
import management_main_originalRetina_webp from '../assets/skills/management_main_originalRetina_1200x1800.webp';
import management_main_originalRetina_jpg from '../assets/skills/management_main_originalRetina_1200x1800.jpg';

import management_1_preview_webp from '../assets/skills/management_1_preview_200x154.webp';
import management_1_preview_jpg from '../assets/skills/management_1_preview_200x154.jpg';
import management_1_previewRetina_webp from '../assets/skills/management_1_previewRetina_400x309.webp';
import management_1_previewRetina_jpg from '../assets/skills/management_1_previewRetina_400x309.jpg';
import management_1_original_webp from '../assets/skills/management_1_original_600x463.webp';
import management_1_original_jpg from '../assets/skills/management_1_original_600x463.jpg';
import management_1_originalRetina_webp from '../assets/skills/management_1_originalRetina_1200x927.webp';
import management_1_originalRetina_jpg from '../assets/skills/management_1_originalRetina_1200x927.jpg';

import management_2_preview_webp from '../assets/skills/management_2_preview_200x154.webp';
import management_2_preview_jpg from '../assets/skills/management_2_preview_200x154.jpg';
import management_2_previewRetina_webp from '../assets/skills/management_2_previewRetina_400x309.webp';
import management_2_previewRetina_jpg from '../assets/skills/management_2_previewRetina_400x309.jpg';
import management_2_original_webp from '../assets/skills/management_2_original_600x463.webp';
import management_2_original_jpg from '../assets/skills/management_2_original_600x463.jpg';
import management_2_originalRetina_webp from '../assets/skills/management_2_originalRetina_1200x927.webp';
import management_2_originalRetina_jpg from '../assets/skills/management_2_originalRetina_1200x927.jpg';

import management_3_preview_webp from '../assets/skills/management_3_preview_200x154.webp';
import management_3_preview_jpg from '../assets/skills/management_3_preview_200x154.jpg';
import management_3_previewRetina_webp from '../assets/skills/management_3_previewRetina_400x309.webp';
import management_3_previewRetina_jpg from '../assets/skills/management_3_previewRetina_400x309.jpg';
import management_3_original_webp from '../assets/skills/management_3_original_600x463.webp';
import management_3_original_jpg from '../assets/skills/management_3_original_600x463.jpg';
import management_3_originalRetina_webp from '../assets/skills/management_3_originalRetina_1200x927.webp';
import management_3_originalRetina_jpg from '../assets/skills/management_3_originalRetina_1200x927.jpg';

import management_4_preview_webp from '../assets/skills/management_4_preview_200x154.webp';
import management_4_preview_jpg from '../assets/skills/management_4_preview_200x154.jpg';
import management_4_previewRetina_webp from '../assets/skills/management_4_previewRetina_400x309.webp';
import management_4_previewRetina_jpg from '../assets/skills/management_4_previewRetina_400x309.jpg';
import management_4_original_webp from '../assets/skills/management_4_original_600x463.webp';
import management_4_original_jpg from '../assets/skills/management_4_original_600x463.jpg';
import management_4_originalRetina_webp from '../assets/skills/management_4_originalRetina_1200x927.webp';
import management_4_originalRetina_jpg from '../assets/skills/management_4_originalRetina_1200x927.jpg';

import management_5_preview_webp from '../assets/skills/management_5_preview_200x148.webp';
import management_5_preview_jpg from '../assets/skills/management_5_preview_200x148.jpg';
import management_5_previewRetina_webp from '../assets/skills/management_5_previewRetina_400x297.webp';
import management_5_previewRetina_jpg from '../assets/skills/management_5_previewRetina_400x297.jpg';
import management_5_original_webp from '../assets/skills/management_5_original_600x446.webp';
import management_5_original_jpg from '../assets/skills/management_5_original_600x446.jpg';
import management_5_originalRetina_webp from '../assets/skills/management_5_originalRetina_1200x892.webp';
import management_5_originalRetina_jpg from '../assets/skills/management_5_originalRetina_1200x892.jpg';

import management_6_preview_webp from '../assets/skills/management_6_preview_200x148.webp';
import management_6_preview_jpg from '../assets/skills/management_6_preview_200x148.jpg';
import management_6_previewRetina_webp from '../assets/skills/management_6_previewRetina_400x297.webp';
import management_6_previewRetina_jpg from '../assets/skills/management_6_previewRetina_400x297.jpg';
import management_6_original_webp from '../assets/skills/management_6_original_600x446.webp';
import management_6_original_jpg from '../assets/skills/management_6_original_600x446.jpg';
import management_6_originalRetina_webp from '../assets/skills/management_6_originalRetina_1200x892.webp';
import management_6_originalRetina_jpg from '../assets/skills/management_6_originalRetina_1200x892.jpg';

import management_7_preview_webp from '../assets/skills/management_7_preview_200x148.webp';
import management_7_preview_jpg from '../assets/skills/management_7_preview_200x148.jpg';
import management_7_previewRetina_webp from '../assets/skills/management_7_previewRetina_400x297.webp';
import management_7_previewRetina_jpg from '../assets/skills/management_7_previewRetina_400x297.jpg';
import management_7_original_webp from '../assets/skills/management_7_original_600x446.webp';
import management_7_original_jpg from '../assets/skills/management_7_original_600x446.jpg';
import management_7_originalRetina_webp from '../assets/skills/management_7_originalRetina_1200x892.webp';
import management_7_originalRetina_jpg from '../assets/skills/management_7_originalRetina_1200x892.jpg';

// Programming
import programming_main_preview_webp from '../assets/skills/programming_main_preview_200x300.webp';
import programming_main_preview_jpg from '../assets/skills/programming_main_preview_200x300.jpg';
import programming_main_previewRetina_webp from '../assets/skills/programming_main_previewRetina_400x601.webp';
import programming_main_previewRetina_jpg from '../assets/skills/programming_main_previewRetina_400x601.jpg';
import programming_main_original_webp from '../assets/skills/programming_main_original_600x901.webp';
import programming_main_original_jpg from '../assets/skills/programming_main_original_600x901.jpg';
import programming_main_originalRetina_webp from '../assets/skills/programming_main_originalRetina_1200x1803.webp';
import programming_main_originalRetina_jpg from '../assets/skills/programming_main_originalRetina_1200x1803.jpg';

// Blogging
import blogging_main_preview_webp from '../assets/skills/blogging_main_preview_200x120.webp';
import blogging_main_preview_jpg from '../assets/skills/blogging_main_preview_200x120.jpg';
import blogging_main_previewRetina_webp from '../assets/skills/blogging_main_previewRetina_400x240.webp';
import blogging_main_previewRetina_jpg from '../assets/skills/blogging_main_previewRetina_400x240.jpg';
import blogging_main_original_webp from '../assets/skills/blogging_main_original_600x360.webp';
import blogging_main_original_jpg from '../assets/skills/blogging_main_original_600x360.jpg';
import blogging_main_originalRetina_webp from '../assets/skills/blogging_main_originalRetina_1200x720.webp';
import blogging_main_originalRetina_jpg from '../assets/skills/blogging_main_originalRetina_1200x720.jpg';

import blogging_1_preview_webp from '../assets/skills/blogging_1_preview_200x149.webp';
import blogging_1_preview_jpg from '../assets/skills/blogging_1_preview_200x149.jpg';
import blogging_1_previewRetina_webp from '../assets/skills/blogging_1_previewRetina_400x298.webp';
import blogging_1_previewRetina_jpg from '../assets/skills/blogging_1_previewRetina_400x298.jpg';
import blogging_1_original_webp from '../assets/skills/blogging_1_original_600x447.webp';
import blogging_1_original_jpg from '../assets/skills/blogging_1_original_600x447.jpg';
import blogging_1_originalRetina_webp from '../assets/skills/blogging_1_originalRetina_1200x895.webp';
import blogging_1_originalRetina_jpg from '../assets/skills/blogging_1_originalRetina_1200x895.jpg';

import blogging_2_preview_webp from '../assets/skills/blogging_2_preview_200x149.webp';
import blogging_2_preview_jpg from '../assets/skills/blogging_2_preview_200x149.jpg';
import blogging_2_previewRetina_webp from '../assets/skills/blogging_2_previewRetina_400x298.webp';
import blogging_2_previewRetina_jpg from '../assets/skills/blogging_2_previewRetina_400x298.jpg';
import blogging_2_original_webp from '../assets/skills/blogging_2_original_600x447.webp';
import blogging_2_original_jpg from '../assets/skills/blogging_2_original_600x447.jpg';
import blogging_2_originalRetina_webp from '../assets/skills/blogging_2_originalRetina_1200x895.webp';
import blogging_2_originalRetina_jpg from '../assets/skills/blogging_2_originalRetina_1200x895.jpg';

import blogging_3_preview_webp from '../assets/skills/blogging_3_preview_200x149.webp';
import blogging_3_preview_jpg from '../assets/skills/blogging_3_preview_200x149.jpg';
import blogging_3_previewRetina_webp from '../assets/skills/blogging_3_previewRetina_400x298.webp';
import blogging_3_previewRetina_jpg from '../assets/skills/blogging_3_previewRetina_400x298.jpg';
import blogging_3_original_webp from '../assets/skills/blogging_3_original_600x447.webp';
import blogging_3_original_jpg from '../assets/skills/blogging_3_original_600x447.jpg';
import blogging_3_originalRetina_webp from '../assets/skills/blogging_3_originalRetina_1200x895.webp';
import blogging_3_originalRetina_jpg from '../assets/skills/blogging_3_originalRetina_1200x895.jpg';

import blogging_4_preview_webp from '../assets/skills/blogging_4_preview_200x149.webp';
import blogging_4_preview_jpg from '../assets/skills/blogging_4_preview_200x149.jpg';
import blogging_4_previewRetina_webp from '../assets/skills/blogging_4_previewRetina_400x298.webp';
import blogging_4_previewRetina_jpg from '../assets/skills/blogging_4_previewRetina_400x298.jpg';
import blogging_4_original_webp from '../assets/skills/blogging_4_original_600x447.webp';
import blogging_4_original_jpg from '../assets/skills/blogging_4_original_600x447.jpg';
import blogging_4_originalRetina_webp from '../assets/skills/blogging_4_originalRetina_1200x895.webp';
import blogging_4_originalRetina_jpg from '../assets/skills/blogging_4_originalRetina_1200x895.jpg';

import blogging_5_preview_webp from '../assets/skills/blogging_5_preview_200x149.webp';
import blogging_5_preview_jpg from '../assets/skills/blogging_5_preview_200x149.jpg';
import blogging_5_previewRetina_webp from '../assets/skills/blogging_5_previewRetina_400x298.webp';
import blogging_5_previewRetina_jpg from '../assets/skills/blogging_5_previewRetina_400x298.jpg';
import blogging_5_original_webp from '../assets/skills/blogging_5_original_600x447.webp';
import blogging_5_original_jpg from '../assets/skills/blogging_5_original_600x447.jpg';
import blogging_5_originalRetina_webp from '../assets/skills/blogging_5_originalRetina_1200x895.webp';
import blogging_5_originalRetina_jpg from '../assets/skills/blogging_5_originalRetina_1200x895.jpg';

import blogging_6_preview_webp from '../assets/skills/blogging_6_preview_200x149.webp';
import blogging_6_preview_jpg from '../assets/skills/blogging_6_preview_200x149.jpg';
import blogging_6_previewRetina_webp from '../assets/skills/blogging_6_previewRetina_400x298.webp';
import blogging_6_previewRetina_jpg from '../assets/skills/blogging_6_previewRetina_400x298.jpg';
import blogging_6_original_webp from '../assets/skills/blogging_6_original_600x447.webp';
import blogging_6_original_jpg from '../assets/skills/blogging_6_original_600x447.jpg';
import blogging_6_originalRetina_webp from '../assets/skills/blogging_6_originalRetina_1200x895.webp';
import blogging_6_originalRetina_jpg from '../assets/skills/blogging_6_originalRetina_1200x895.jpg';

// Consulting
import consulting_main_preview_webp from '../assets/skills/consulting_main_preview_200x150.webp';
import consulting_main_preview_jpg from '../assets/skills/consulting_main_preview_200x150.jpg';
import consulting_main_previewRetina_webp from '../assets/skills/consulting_main_previewRetina_400x300.webp';
import consulting_main_previewRetina_jpg from '../assets/skills/consulting_main_previewRetina_400x300.jpg';
import consulting_main_original_webp from '../assets/skills/consulting_main_original_600x450.webp';
import consulting_main_original_jpg from '../assets/skills/consulting_main_original_600x450.jpg';
import consulting_main_originalRetina_webp from '../assets/skills/consulting_main_originalRetina_1200x900.webp';
import consulting_main_originalRetina_jpg from '../assets/skills/consulting_main_originalRetina_1200x900.jpg';

type TData = Record<SKILLS_TYPE, {
    image: TImageModel,
    imageGallery?: TImageModel[],
}>;

export const getGallery = (t: TFunction): TData => ({
    [SKILLS_TYPE.MANAGEMENT]: {
        image: {
            id: SKILLS_TYPE.MANAGEMENT,
            alt: t(`skills.list.${SKILLS_TYPE.MANAGEMENT}.label`),
            preview: {
                width: 200,
                height: 300,
                sources: {
                    webp: management_main_preview_webp,
                    jpg: management_main_preview_jpg,
                },
            },
            previewRetina: {
                width: 400,
                height: 600,
                sources: {
                    webp: management_main_previewRetina_webp,
                    jpg: management_main_previewRetina_jpg,
                },
            },
            original: {
                width: 600,
                height: 900,
                sources: {
                    webp: management_main_original_webp,
                    jpg: management_main_original_jpg,
                },
            },
            originalRetina: {
                width: 1200,
                height: 1800,
                sources: {
                    webp: management_main_originalRetina_webp,
                    jpg: management_main_originalRetina_jpg,
                },
            },
        },

        imageGallery: [
            {
                id: 'management_1',
                alt: 'Project Management Professional (PMP)®',
                preview: {
                    width: 200,
                    height: 154,
                    sources: {
                        webp: management_1_preview_webp,
                        jpg: management_1_preview_jpg,
                    },
                },
                previewRetina: {
                    width: 400,
                    height: 309,
                    sources: {
                        webp: management_1_previewRetina_webp,
                        jpg: management_1_previewRetina_jpg,
                    },
                },
                original: {
                    width: 600,
                    height: 463,
                    sources: {
                        webp: management_1_original_webp,
                        jpg: management_1_original_jpg,
                    },
                },
                originalRetina: {
                    width: 1200,
                    height: 927,
                    sources: {
                        webp: management_1_originalRetina_webp,
                        jpg: management_1_originalRetina_jpg,
                    },
                },
            },
            {
                id: 'management_2',
                alt: 'PMI Agile Certified Practitioner (PMI-ACP)®',
                preview: {
                    width: 200,
                    height: 154,
                    sources: {
                        webp: management_2_preview_webp,
                        jpg: management_2_preview_jpg,
                    },
                },
                previewRetina: {
                    width: 400,
                    height: 309,
                    sources: {
                        webp: management_2_previewRetina_webp,
                        jpg: management_2_previewRetina_jpg,
                    },
                },
                original: {
                    width: 600,
                    height: 463,
                    sources: {
                        webp: management_2_original_webp,
                        jpg: management_2_original_jpg,
                    },
                },
                originalRetina: {
                    width: 1200,
                    height: 927,
                    sources: {
                        webp: management_2_originalRetina_webp,
                        jpg: management_2_originalRetina_jpg,
                    },
                },
            },
            {
                id: 'management_3',
                alt: 'Advanced Certified ScrumMaster (A-CSM℠)',
                preview: {
                    width: 200,
                    height: 154,
                    sources: {
                        webp: management_3_preview_webp,
                        jpg: management_3_preview_jpg,
                    },
                },
                previewRetina: {
                    width: 400,
                    height: 309,
                    sources: {
                        webp: management_3_previewRetina_webp,
                        jpg: management_3_previewRetina_jpg,
                    },
                },
                original: {
                    width: 600,
                    height: 463,
                    sources: {
                        webp: management_3_original_webp,
                        jpg: management_3_original_jpg,
                    },
                },
                originalRetina: {
                    width: 1200,
                    height: 927,
                    sources: {
                        webp: management_3_originalRetina_webp,
                        jpg: management_3_originalRetina_jpg,
                    },
                },
            },
            {
                id: 'management_4',
                alt: 'Inspirational Leadership Skills: Practical Motivational Leadership',
                preview: {
                    width: 200,
                    height: 154,
                    sources: {
                        webp: management_4_preview_webp,
                        jpg: management_4_preview_jpg,
                    },
                },
                previewRetina: {
                    width: 400,
                    height: 309,
                    sources: {
                        webp: management_4_previewRetina_webp,
                        jpg: management_4_previewRetina_jpg,
                    },
                },
                original: {
                    width: 600,
                    height: 463,
                    sources: {
                        webp: management_4_original_webp,
                        jpg: management_4_original_jpg,
                    },
                },
                originalRetina: {
                    width: 1200,
                    height: 927,
                    sources: {
                        webp: management_4_originalRetina_webp,
                        jpg: management_4_originalRetina_jpg,
                    },
                },
            },
            {
                id: 'management_5',
                alt: 'Certified Lean Six Sigma White / Lean Six Sigma Yellow Belt',
                preview: {
                    width: 200,
                    height: 148,
                    sources: {
                        webp: management_5_preview_webp,
                        jpg: management_5_preview_jpg,
                    },
                },
                previewRetina: {
                    width: 400,
                    height: 297,
                    sources: {
                        webp: management_5_previewRetina_webp,
                        jpg: management_5_previewRetina_jpg,
                    },
                },
                original: {
                    width: 600,
                    height: 446,
                    sources: {
                        webp: management_5_original_webp,
                        jpg: management_5_original_jpg,
                    },
                },
                originalRetina: {
                    width: 1200,
                    height: 892,
                    sources: {
                        webp: management_5_originalRetina_webp,
                        jpg: management_5_originalRetina_jpg,
                    },
                },
            },
            {
                id: 'management_6',
                alt: 'Six Sigma: Certified Lean Six Sigma Green Belt | Accredited',
                preview: {
                    width: 200,
                    height: 148,
                    sources: {
                        webp: management_6_preview_webp,
                        jpg: management_6_preview_jpg,
                    },
                },
                previewRetina: {
                    width: 400,
                    height: 297,
                    sources: {
                        webp: management_6_previewRetina_webp,
                        jpg: management_6_previewRetina_jpg,
                    },
                },
                original: {
                    width: 600,
                    height: 446,
                    sources: {
                        webp: management_6_original_webp,
                        jpg: management_6_original_jpg,
                    },
                },
                originalRetina: {
                    width: 1200,
                    height: 892,
                    sources: {
                        webp: management_6_originalRetina_webp,
                        jpg: management_6_originalRetina_jpg,
                    },
                },
            },
            {
                id: 'management_7',
                alt: 'Six Sigma: Certified Lean Six Sigma Black Belt | Accredited',
                preview: {
                    width: 200,
                    height: 148,
                    sources: {
                        webp: management_7_preview_webp,
                        jpg: management_7_preview_jpg,
                    },
                },
                previewRetina: {
                    width: 400,
                    height: 297,
                    sources: {
                        webp: management_7_previewRetina_webp,
                        jpg: management_7_previewRetina_jpg,
                    },
                },
                original: {
                    width: 600,
                    height: 446,
                    sources: {
                        webp: management_7_original_webp,
                        jpg: management_7_original_jpg,
                    },
                },
                originalRetina: {
                    width: 1200,
                    height: 892,
                    sources: {
                        webp: management_7_originalRetina_webp,
                        jpg: management_7_originalRetina_jpg,
                    },
                },
            },
        ]
    },

    [SKILLS_TYPE.PROGRAMMING]: {
        image: {
            id: SKILLS_TYPE.PROGRAMMING,
            alt: t(`skills.list.${SKILLS_TYPE.PROGRAMMING}.label`),
            preview: {
                width: 200,
                height: 300,
                sources: {
                    webp: programming_main_preview_webp,
                    jpg: programming_main_preview_jpg,
                },
            },
            previewRetina: {
                width: 400,
                height: 601,
                sources: {
                    webp: programming_main_previewRetina_webp,
                    jpg: programming_main_previewRetina_jpg,
                },
            },
            original: {
                width: 600,
                height: 901,
                sources: {
                    webp: programming_main_original_webp,
                    jpg: programming_main_original_jpg,
                },
            },
            originalRetina: {
                width: 1200,
                height: 1803,
                sources: {
                    webp: programming_main_originalRetina_webp,
                    jpg: programming_main_originalRetina_jpg,
                },
            },
        }
    },

    [SKILLS_TYPE.BLOGGING]: {
        image: {
            id: SKILLS_TYPE.BLOGGING,
            alt: t(`skills.list.${SKILLS_TYPE.BLOGGING}.label`),
            preview: {
                width: 200,
                height: 120,
                sources: {
                    webp: blogging_main_preview_webp,
                    jpg: blogging_main_preview_jpg,
                },
            },
            previewRetina: {
                width: 400,
                height: 240,
                sources: {
                    webp: blogging_main_previewRetina_webp,
                    jpg: blogging_main_previewRetina_jpg,
                },
            },
            original: {
                width: 600,
                height: 360,
                sources: {
                    webp: blogging_main_original_webp,
                    jpg: blogging_main_original_jpg,
                },
            },
            originalRetina: {
                width: 1200,
                height: 720,
                sources: {
                    webp: blogging_main_originalRetina_webp,
                    jpg: blogging_main_originalRetina_jpg,
                },
            },
        },
        imageGallery: [
            {
                id: 'blogging_1',
                alt: 'Premiere Pro CC for Beginners: Video Editing in Premiere',
                preview: {
                    width: 200,
                    height: 149,
                    sources: {
                        webp: blogging_1_preview_webp,
                        jpg: blogging_1_preview_jpg,
                    },
                },
                previewRetina: {
                    width: 400,
                    height: 298,
                    sources: {
                        webp: blogging_1_previewRetina_webp,
                        jpg: blogging_1_previewRetina_jpg,
                    },
                },
                original: {
                    width: 600,
                    height: 447,
                    sources: {
                        webp: blogging_1_original_webp,
                        jpg: blogging_1_original_jpg,
                    },
                },
                originalRetina: {
                    width: 1200,
                    height: 895,
                    sources: {
                        webp: blogging_1_originalRetina_webp,
                        jpg: blogging_1_originalRetina_jpg,
                    },
                },
            },
            {
                id: 'blogging_2',
                alt: 'Adobe Audition CC: The Beginner\'s Guide to Adobe Audition',
                preview: {
                    width: 200,
                    height: 149,
                    sources: {
                        webp: blogging_2_preview_webp,
                        jpg: blogging_2_preview_jpg,
                    },
                },
                previewRetina: {
                    width: 400,
                    height: 298,
                    sources: {
                        webp: blogging_2_previewRetina_webp,
                        jpg: blogging_2_previewRetina_jpg,
                    },
                },
                original: {
                    width: 600,
                    height: 447,
                    sources: {
                        webp: blogging_2_original_webp,
                        jpg: blogging_2_original_jpg,
                    },
                },
                originalRetina: {
                    width: 1200,
                    height: 895,
                    sources: {
                        webp: blogging_2_originalRetina_webp,
                        jpg: blogging_2_originalRetina_jpg,
                    },
                },
            },
            {
                id: 'blogging_3',
                alt: 'YouTube Marketing: Grow Your Business with YouTube',
                preview: {
                    width: 200,
                    height: 149,
                    sources: {
                        webp: blogging_3_preview_webp,
                        jpg: blogging_3_preview_jpg,
                    },
                },
                previewRetina: {
                    width: 400,
                    height: 298,
                    sources: {
                        webp: blogging_3_previewRetina_webp,
                        jpg: blogging_3_previewRetina_jpg,
                    },
                },
                original: {
                    width: 600,
                    height: 447,
                    sources: {
                        webp: blogging_3_original_webp,
                        jpg: blogging_3_original_jpg,
                    },
                },
                originalRetina: {
                    width: 1200,
                    height: 895,
                    sources: {
                        webp: blogging_3_originalRetina_webp,
                        jpg: blogging_3_originalRetina_jpg,
                    },
                },
            },
            {
                id: 'blogging_4',
                alt: 'Be A Video Production & Video Marketing Master!',
                preview: {
                    width: 200,
                    height: 149,
                    sources: {
                        webp: blogging_4_preview_webp,
                        jpg: blogging_4_preview_jpg,
                    },
                },
                previewRetina: {
                    width: 400,
                    height: 298,
                    sources: {
                        webp: blogging_4_previewRetina_webp,
                        jpg: blogging_4_previewRetina_jpg,
                    },
                },
                original: {
                    width: 600,
                    height: 447,
                    sources: {
                        webp: blogging_4_original_webp,
                        jpg: blogging_4_original_jpg,
                    },
                },
                originalRetina: {
                    width: 1200,
                    height: 895,
                    sources: {
                        webp: blogging_4_originalRetina_webp,
                        jpg: blogging_4_originalRetina_jpg,
                    },
                },
            },
            {
                id: 'blogging_5',
                alt: 'Complete Filmmaker Guide: Become an Incredible Video Creator',
                preview: {
                    width: 200,
                    height: 149,
                    sources: {
                        webp: blogging_5_preview_webp,
                        jpg: blogging_5_preview_jpg,
                    },
                },
                previewRetina: {
                    width: 400,
                    height: 298,
                    sources: {
                        webp: blogging_5_previewRetina_webp,
                        jpg: blogging_5_previewRetina_jpg,
                    },
                },
                original: {
                    width: 600,
                    height: 447,
                    sources: {
                        webp: blogging_5_original_webp,
                        jpg: blogging_5_original_jpg,
                    },
                },
                originalRetina: {
                    width: 1200,
                    height: 895,
                    sources: {
                        webp: blogging_5_originalRetina_webp,
                        jpg: blogging_5_originalRetina_jpg,
                    },
                },
            },
            {
                id: 'blogging_6',
                alt: 'The Complete Video Production Bootcamp',
                preview: {
                    width: 200,
                    height: 149,
                    sources: {
                        webp: blogging_6_preview_webp,
                        jpg: blogging_6_preview_jpg,
                    },
                },
                previewRetina: {
                    width: 400,
                    height: 298,
                    sources: {
                        webp: blogging_6_previewRetina_webp,
                        jpg: blogging_6_previewRetina_jpg,
                    },
                },
                original: {
                    width: 600,
                    height: 447,
                    sources: {
                        webp: blogging_6_original_webp,
                        jpg: blogging_6_original_jpg,
                    },
                },
                originalRetina: {
                    width: 1200,
                    height: 895,
                    sources: {
                        webp: blogging_6_originalRetina_webp,
                        jpg: blogging_6_originalRetina_jpg,
                    },
                },
            },
        ]
    },

    [SKILLS_TYPE.CONSULTING]: {
        image: {
            id: SKILLS_TYPE.CONSULTING,
            alt: t(`skills.list.${SKILLS_TYPE.CONSULTING}.label`),
            preview: {
                width: 200,
                height: 150,
                sources: {
                    webp: consulting_main_preview_webp,
                    jpg: consulting_main_preview_jpg,
                },
            },
            previewRetina: {
                width: 400,
                height: 300,
                sources: {
                    webp: consulting_main_previewRetina_webp,
                    jpg: consulting_main_previewRetina_jpg,
                },
            },
            original: {
                width: 600,
                height: 450,
                sources: {
                    webp: consulting_main_original_webp,
                    jpg: consulting_main_original_jpg,
                },
            },
            originalRetina: {
                width: 1200,
                height: 900,
                sources: {
                    webp: consulting_main_originalRetina_webp,
                    jpg: consulting_main_originalRetina_jpg,
                },
            },
        },
    }
});
