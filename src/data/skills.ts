import { TFunction } from 'i18next';
import { faTasks } from '@fortawesome/free-solid-svg-icons/faTasks';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons/faChalkboardTeacher';

import { TSkillsItem } from '../models';
import { SKILLS_TYPE } from '../enums';

import { getGallery } from'./skillsGallery';

export const getSkillsData = (t: TFunction): TSkillsItem[] => [
    {
        id: SKILLS_TYPE.MANAGEMENT,
        type: SKILLS_TYPE.MANAGEMENT,
        icon: faTasks,
        label: t(`skills.list.${SKILLS_TYPE.MANAGEMENT}.label`),
        content: t(`skills.list.${SKILLS_TYPE.MANAGEMENT}.content`, { returnObjects: true }),
        ...getGallery(t)[SKILLS_TYPE.MANAGEMENT],
    },
    {
        id: SKILLS_TYPE.PROGRAMMING,
        type: SKILLS_TYPE.PROGRAMMING,
        icon: faLaptopCode,
        label: t(`skills.list.${SKILLS_TYPE.PROGRAMMING}.label`),
        content: t(`skills.list.${SKILLS_TYPE.PROGRAMMING}.content`, { returnObjects: true }),
        ...getGallery(t)[SKILLS_TYPE.PROGRAMMING],
    },
    {
        id: SKILLS_TYPE.BLOGGING,
        type: SKILLS_TYPE.BLOGGING,
        icon: faFilm,
        label: t(`skills.list.${SKILLS_TYPE.BLOGGING}.label`),
        content: t(`skills.list.${SKILLS_TYPE.BLOGGING}.content`, { returnObjects: true }),
        ...getGallery(t)[SKILLS_TYPE.BLOGGING],
    },
    {
        id: SKILLS_TYPE.CONSULTING,
        type: SKILLS_TYPE.CONSULTING,
        icon: faChalkboardTeacher,
        label: t(`skills.list.${SKILLS_TYPE.CONSULTING}.label`),
        content: t(`skills.list.${SKILLS_TYPE.CONSULTING}.content`, { returnObjects: true }),
        ...getGallery(t)[SKILLS_TYPE.CONSULTING],
    },
];
