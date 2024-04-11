import { TFunction } from 'i18next';
import { faTasks } from '@fortawesome/free-solid-svg-icons/faTasks';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons/faChalkboardTeacher';

import { TSkillsItem } from '../models';
import { SKILLS_TYPE } from '../enums';

import { gallery } from'./skillsGallery';

export const getSkillsData = (t: TFunction): TSkillsItem[] => [
    {
        id: 'skills-id-1',
        type: SKILLS_TYPE.MANAGEMENT,
        icon: faTasks,
        label: t('skills.list.management.label'),
        content: t('skills.list.management.content', { returnObjects: true }),
        image: gallery['management_main'],
        imageGallery: [
            gallery['management_1'],
            gallery['management_2'],
            gallery['management_3'],
            gallery['management_4'],
            gallery['management_5'],
            gallery['management_6'],
            gallery['management_7'],
        ]
    },
    {
        id: 'skills-id-2',
        type: SKILLS_TYPE.PROGRAMMING,
        icon: faLaptopCode,
        label: t('skills.list.programming.label'),
        content: t('skills.list.programming.content', { returnObjects: true }),
        image: gallery['programming_main'],
    },
    {
        id: 'skills-id-3',
        type: SKILLS_TYPE.BLOGGING,
        icon: faFilm,
        label: t('skills.list.blogging.label'),
        content: t('skills.list.blogging.content', { returnObjects: true }),
        image: gallery['blogging_main'],
        imageGallery: [
            gallery['blogging_1'],
            gallery['blogging_2'],
            gallery['blogging_3'],
            gallery['blogging_4'],
            gallery['blogging_5'],
            gallery['blogging_6'],
        ]
    },
    {
        id: 'skills-id-4',
        type: SKILLS_TYPE.CONSULTING,
        icon: faChalkboardTeacher,
        label: t('skills.list.consulting.label'),
        content: t('skills.list.consulting.content', { returnObjects: true }),
        image: gallery['consulting_main'],
    },
];
