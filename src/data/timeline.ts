import { TFunction } from 'i18next';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons/faUmbrellaBeach';
import { faRoute } from '@fortawesome/free-solid-svg-icons/faRoute';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons/faUserFriends';
import { faWheelchair } from '@fortawesome/free-solid-svg-icons/faWheelchair';

import { TTimelineItem } from '../models';
import { TIMELINE_INFORMATION_TYPE, TIMELINE_ITEM_POSITION } from '../enums';
import { TIMELINE } from './ids';

import yt_thumbnail from '../assets/timeline-photos/thumbnail-defa.jpeg';

import { getGallery } from './timelineGallery';

export const getTimelineData = (t: TFunction): TTimelineItem[] => [
    {
        id: TIMELINE.Id1,
        dateRange: [1988, 1994],
        content: t(`timeline.list.${TIMELINE.Id1}`, { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 0,
        image: getGallery(t)[TIMELINE.Id1],
    },
    {
        id: TIMELINE.Id2,
        dateRange: [1994, 2005],
        content: t(`timeline.list.${TIMELINE.Id2}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.EDUCATION,
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 0,
        image: getGallery(t)[TIMELINE.Id2],
    },
    {
        id: TIMELINE.Id3,
        dateRange: [2005, 2010],
        content: t(`timeline.list.${TIMELINE.Id3}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.EDUCATION,
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 0,
        image: getGallery(t)[TIMELINE.Id3],
    },
    {
        id: TIMELINE.Id4,
        dateRange: [2007, 2015],
        content: t(`timeline.list.${TIMELINE.Id4}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 1,
    },
    {
        id: TIMELINE.Id5,
        dateRange: [2010, 2015],
        content: t(`timeline.list.${TIMELINE.Id5}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 0,
    },
    {
        id: TIMELINE.Id6,
        dateRange: [2015, 2024],
        content: t(`timeline.list.${TIMELINE.Id6}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 0,
        image: getGallery(t)[TIMELINE.Id6],
    },
    {
        id: TIMELINE.Id7,
        dateRange: [2017, 2018],
        content: t(`timeline.list.${TIMELINE.Id7}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.EDUCATION,
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 1,
        image: getGallery(t)[TIMELINE.Id7],
    },
    {
        id: TIMELINE.Id8,
        dateRange: [2018, 2021],
        content: t(`timeline.list.${TIMELINE.Id8}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.HOBBY,
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 1,
        image: getGallery(t)[TIMELINE.Id8],
    },    
    {
        id: TIMELINE.Id12,
        dateRange: [1988, 1994],
        content: t(`timeline.list.${TIMELINE.Id12}`, { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: getGallery(t)[TIMELINE.Id12],
    },
    {
        id: TIMELINE.Id13,
        dateRange: [1994, 1998],
        content: t(`timeline.list.${TIMELINE.Id13}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.EDUCATION,
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: getGallery(t)[TIMELINE.Id13],
    },
    {
        id: TIMELINE.Id14,
        dateRange: [1998, 2003],
        content: t(`timeline.list.${TIMELINE.Id14}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.EDUCATION,
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: getGallery(t)[TIMELINE.Id14],
    },
    {
        id: TIMELINE.Id15,
        dateRange: [2003, 2005],
        content: t(`timeline.list.${TIMELINE.Id15}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.EDUCATION,
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: getGallery(t)['timeline-id-15'],
    },
    {
        id: TIMELINE.Id16,
        dateRange: [2005, 2007],
        content: t(`timeline.list.${TIMELINE.Id16}`, { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
    },
    {
        id: TIMELINE.Id17,
        dateRange: [2007, 2007],
        content: t(`timeline.list.${TIMELINE.Id17}`, { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        icon: faUserFriends,
    },
    {
        id: TIMELINE.Id18,
        dateRange: [2007, 2010],
        content: t(`timeline.list.${TIMELINE.Id18}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: getGallery(t)[TIMELINE.Id18],
    },

    {
        id: TIMELINE.Id19,
        dateRange: [2010, 2011],
        content: t(`timeline.list.${TIMELINE.Id19}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        position: TIMELINE_ITEM_POSITION.RIGHT,
    },
    {
        id: TIMELINE.Id20,
        dateRange: [2011, 2013],
        content: t(`timeline.list.${TIMELINE.Id20}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        position: TIMELINE_ITEM_POSITION.RIGHT,
        video: { id: 'IeStuiaomis', width: 250, height: 200, thumbnail: yt_thumbnail },
    },
    {
        id: TIMELINE.Id21,
        dateRange: [2013, 2014],
        content: t(`timeline.list.${TIMELINE.Id21}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        position: TIMELINE_ITEM_POSITION.RIGHT,
    },
    {
        id: TIMELINE.Id22,
        dateRange: [2014, 2015],
        content: t(`timeline.list.${TIMELINE.Id22}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: getGallery(t)[TIMELINE.Id22],
    },
    {
        id: TIMELINE.Id23,
        dateRange: [2015, 2015],
        content: t(`timeline.list.${TIMELINE.Id23}`, { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        icon: faRoute,
    },
    {
        id: TIMELINE.Id24,
        dateRange: [2015, 2018],
        content: t(`timeline.list.${TIMELINE.Id24}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: getGallery(t)[TIMELINE.Id24],
    },
    {
        id: TIMELINE.Id25,
        dateRange: [2018, 2018],
        content: t(`timeline.list.${TIMELINE.Id25}`, { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        icon: faRoute,
    },
    {
        id: TIMELINE.Id26,
        dateRange: [2018, 2019],
        content: t(`timeline.list.${TIMELINE.Id26}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: getGallery(t)[TIMELINE.Id26],
    },
    {
        id: TIMELINE.Id27,
        dateRange: [2019, 2019],
        content: t(`timeline.list.${TIMELINE.Id27}`, { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        icon: faRoute,
    },
    {
        id: TIMELINE.Id28,
        dateRange: [2019, 2021],
        content: t(`timeline.list.${TIMELINE.Id28}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: getGallery(t)[TIMELINE.Id28],
    },
    {
        id: TIMELINE.Id29,
        dateRange: [2021, 2021],
        content: t(`timeline.list.${TIMELINE.Id29}`, { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        icon: faUmbrellaBeach,
    },
    {
        id: TIMELINE.Id30,
        dateRange: [2021, 2024],
        content: t(`timeline.list.${TIMELINE.Id30}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: getGallery(t)[TIMELINE.Id30],
    },
    {
        id: TIMELINE.Id31,
        dateRange: [2024, 2025],
        content: t(`timeline.list.${TIMELINE.Id31}`, { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
    },
    {
        id: TIMELINE.Id32,
        dateRange: [2010, 2010],
        content: t(`timeline.list.${TIMELINE.Id32}`, { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        icon: faRoute,
    },
    {
        id: TIMELINE.Id33,
        dateRange: [2014, 2014],
        content: t(`timeline.list.${TIMELINE.Id33}`, { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        icon: faWheelchair,
    },
    {
        id: TIMELINE.Id34,
        dateRange: [2011, 2012],
        content: t(`timeline.list.${TIMELINE.Id34}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.HOBBY,
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 2,
    },
    {
        id: TIMELINE.Id35,
        dateRange: [2019, 2023],
        content: t(`timeline.list.${TIMELINE.Id35}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.HOBBY,
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 2,
    },
    {
        id: TIMELINE.Id9,
        dateRange: [2021, 2022],
        content: t(`timeline.list.${TIMELINE.Id9}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.HOBBY,
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 1,
        image: getGallery(t)[TIMELINE.Id9],
    },
    {
        id: TIMELINE.Id10,
        dateRange: [2022, 2024],
        content: t(`timeline.list.${TIMELINE.Id10}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.HOBBY,
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 1,
        image: getGallery(t)[TIMELINE.Id10],
    },
    {
        id: TIMELINE.Id11,
        dateRange: [2023, 2024],
        content: t(`timeline.list.${TIMELINE.Id11}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.EDUCATION,
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 2,
    },
    {
        id: TIMELINE.Id36,
        dateRange: [1998, 2000],
        content: t(`timeline.list.${TIMELINE.Id36}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.HOBBY,
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 1,
        image: getGallery(t)[TIMELINE.Id36],
    },
    {
        id: TIMELINE.Id37,
        dateRange: [2002, 2004],
        content: t(`timeline.list.${TIMELINE.Id37}`, { returnObjects: true }),
        informationType: TIMELINE_INFORMATION_TYPE.HOBBY,
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 1,
        image: getGallery(t)[TIMELINE.Id37],
    },
];

// Объект для динамических отступов
export const YEAR_OFFSETS: Record<number, number> = {
    1988: 20,
    1989: 22,
    1990: 24,
    1991: 26,
    1992: 28,
    1993: 30,
    1994: 32,
    1995: 34,
    1996: 36,
    1997: 38,
    1998: 40,
    1999: 42,
    2000: 44,
    2001: 46,
    2002: 48,
    2003: 50,
    2004: 52,
    2005: 100,
    2006: 100,
    2007: 120,
    2008: 120,
    2009: 120,
    2010: 160,
    2011: 200,
    2012: 200,
    2013: 220,
    2014: 220,
    2015: 180,
    2016: 180,
    2017: 180,
    2018: 320,
    2019: 200,
    2020: 200,
    2021: 160,
    2022: 160,
    2023: 160,
    2024: 120,
    2025: 0,
};
