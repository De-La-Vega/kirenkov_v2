import { TFunction } from 'i18next';

import { TTimelineItem } from '../models';
import { TIMELINE_INFORMATION_TYPE, TIMELINE_ITEM_POSITION } from '../enums';

import timeline_id_7_s_200x150_main from '../assets/timeline-photos/timeline_id_7_s_200x150.webp';
import timeline_id_7_s_200x150_fallback from '../assets/timeline-photos/timeline_id_7_s_200x150.jpeg';
import timeline_id_7_l_600x450_large from '../assets/timeline-photos/timeline_id_7_l_600x450.jpeg';
import timeline_id_6_s_200x150_main from '../assets/timeline-photos/timeline_id_6_s_200x150.webp';
import timeline_id_6_s_200x150_fallback from '../assets/timeline-photos/timeline_id_6_s_200x150.jpeg';
import timeline_id_6_l_600x450_large from '../assets/timeline-photos/timeline_id_6_l_600x450.jpeg';
import timeline_id_22_s_200x200_main from '../assets/timeline-photos/timeline_id_22_s_200x200.webp';
import timeline_id_22_s_200x200_fallback from '../assets/timeline-photos/timeline_id_22_s_200x200.jpeg';
import timeline_id_22_l_600x600_large from '../assets/timeline-photos/timeline_id_22_l_600x600.jpeg';
import timeline_id_26_s_200x133_main from '../assets/timeline-photos/timeline_id_26_s_200x133.webp';
import timeline_id_26_s_200x133_fallback from '../assets/timeline-photos/timeline_id_26_s_200x133.jpeg';
import timeline_id_26_l_600x400_large from '../assets/timeline-photos/timeline_id_26_l_600x400.jpeg';
import timeline_id_2_s_200x266_main from '../assets/timeline-photos/timeline_id_2_s_200x266.webp';
import timeline_id_2_s_200x266_fallback from '../assets/timeline-photos/timeline_id_2_s_200x266.jpeg';
import timeline_id_2_l_600x800_large from '../assets/timeline-photos/timeline_id_2_l_600x800.jpeg';
import timeline_id_3_s_200x150_main from '../assets/timeline-photos/timeline_id_3_s_200x150.webp';
import timeline_id_3_s_200x150_fallback from '../assets/timeline-photos/timeline_id_3_s_200x150.jpeg';
import timeline_id_3_l_600x451_large from '../assets/timeline-photos/timeline_id_3_l_600x451.jpeg';
import timeline_id_1_s_200x300_main from '../assets/timeline-photos/timeline_id_1_s_200x300.webp';
import timeline_id_1_s_200x300_fallback from '../assets/timeline-photos/timeline_id_1_s_200x300.jpeg';
import timeline_id_1_l_600x900_large from '../assets/timeline-photos/timeline_id_1_l_600x900.jpeg';
import timeline_id_18_s_200x300_main from '../assets/timeline-photos/timeline_id_18_s_200x300.webp';
import timeline_id_18_s_200x300_fallback from '../assets/timeline-photos/timeline_id_18_s_200x300.jpeg';
import timeline_id_18_l_600x902_large from '../assets/timeline-photos/timeline_id_18_l_600x902.jpeg';
import timeline_id_30_s_200x266_main from '../assets/timeline-photos/timeline_id_30_s_200x266.webp';
import timeline_id_30_s_200x266_fallback from '../assets/timeline-photos/timeline_id_30_s_200x266.jpeg';
import timeline_id_30_l_600x800_large from '../assets/timeline-photos/timeline_id_30_l_600x800.jpeg';
import timeline_id_24_s_200x200_main from '../assets/timeline-photos/timeline_id_24_s_200x200.webp';
import timeline_id_24_s_200x200_fallback from '../assets/timeline-photos/timeline_id_24_s_200x200.jpeg';
import timeline_id_24_l_600x600_large from '../assets/timeline-photos/timeline_id_24_l_600x600.jpeg';
import timeline_id_15_s_200x150_main from '../assets/timeline-photos/timeline_id_15_s_200x150.webp';
import timeline_id_15_s_200x150_fallback from '../assets/timeline-photos/timeline_id_15_s_200x150.jpeg';
import timeline_id_15_l_600x450_large from '../assets/timeline-photos/timeline_id_15_l_600x450.jpeg';
import timeline_id_14_s_200x160_main from '../assets/timeline-photos/timeline_id_14_s_200x160.webp';
import timeline_id_14_s_200x160_fallback from '../assets/timeline-photos/timeline_id_14_s_200x160.jpeg';
import timeline_id_14_l_600x480_large from '../assets/timeline-photos/timeline_id_14_l_600x480.jpeg';
import timeline_id_28_s_200x227_main from '../assets/timeline-photos/timeline_id_28_s_200x227.webp';
import timeline_id_28_s_200x227_fallback from '../assets/timeline-photos/timeline_id_28_s_200x227.jpeg';
import timeline_id_28_l_600x682_large from '../assets/timeline-photos/timeline_id_28_l_600x682.jpeg';
import timeline_id_13_s_200x266_main from '../assets/timeline-photos/timeline_id_13_s_200x266.webp';
import timeline_id_13_s_200x266_fallback from '../assets/timeline-photos/timeline_id_13_s_200x266.jpeg';
import timeline_id_13_l_600x800_large from '../assets/timeline-photos/timeline_id_13_l_600x800.jpeg';
import timeline_id_12_s_200x300_main from '../assets/timeline-photos/timeline_id_12_s_200x300.webp';
import timeline_id_12_s_200x300_fallback from '../assets/timeline-photos/timeline_id_12_s_200x300.jpeg';
import timeline_id_12_l_600x900_large from '../assets/timeline-photos/timeline_id_12_l_600x900.jpeg';
import timeline_id_8_s_200x200_main from '../assets/timeline-photos/timeline_id_8_s_200x200.webp';
import timeline_id_8_s_200x200_fallback from '../assets/timeline-photos/timeline_id_8_s_200x200.jpeg';
import timeline_id_8_l_600x600_large from '../assets/timeline-photos/timeline_id_8_l_600x600.jpeg';

import yt_thumbnail from '../assets/timeline-photos/thumbnail-defa.jpeg';

export const getTimelineData = (t: TFunction): TTimelineItem[] => [
    {
        id: 'timeline-id-1',
        dateRange: [1988, 1994],
        content: t('timeline.list.timeline-id-1', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 0,
        image: {
            srcSmallMain: timeline_id_1_s_200x300_main,
            srcSmallFallback: timeline_id_1_s_200x300_fallback,
            srcLarge: timeline_id_1_l_600x900_large,
            width: 200,
            height: 300
        },
    },
    {
        id: 'timeline-id-2',
        informationType: TIMELINE_INFORMATION_TYPE.EDUCATION,
        dateRange: [1994, 2005],
        content: t('timeline.list.timeline-id-2', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 0,
        image: {
            srcSmallMain: timeline_id_2_s_200x266_main,
            srcSmallFallback: timeline_id_2_s_200x266_fallback,
            srcLarge: timeline_id_2_l_600x800_large,
            width: 200,
            height: 266
        },
    },
    {
        id: 'timeline-id-3',
        informationType: TIMELINE_INFORMATION_TYPE.EDUCATION,
        dateRange: [2005, 2010],
        content: t('timeline.list.timeline-id-3', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 0,
        image: {
            srcSmallMain: timeline_id_3_s_200x150_main,
            srcSmallFallback: timeline_id_3_s_200x150_fallback,
            srcLarge: timeline_id_3_l_600x451_large,
            width: 200,
            height: 150
        },
    },
    {
        id: 'timeline-id-4',
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        dateRange: [2007, 2015],
        content: t('timeline.list.timeline-id-4', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 1,
    },
    {
        id: 'timeline-id-5',
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        dateRange: [2010, 2015],
        content: t('timeline.list.timeline-id-5', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 2,
    },
    {
        id: 'timeline-id-6',
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        dateRange: [2015, 2024],
        content: t('timeline.list.timeline-id-6', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 0,
        image: {
            srcSmallMain: timeline_id_6_s_200x150_main,
            srcSmallFallback: timeline_id_6_s_200x150_fallback,
            srcLarge: timeline_id_6_l_600x450_large,
            width: 200,
            height: 150
        },
    },
    {
        id: 'timeline-id-7',
        informationType: TIMELINE_INFORMATION_TYPE.EDUCATION,
        dateRange: [2017, 2018],
        content: t('timeline.list.timeline-id-7', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 1,
        image: {
            srcSmallMain: timeline_id_7_s_200x150_main,
            srcSmallFallback: timeline_id_7_s_200x150_fallback,
            srcLarge: timeline_id_7_l_600x450_large,
            width: 200,
            height: 150
        },
    },
    {
        id: 'timeline-id-8',
        informationType: TIMELINE_INFORMATION_TYPE.HOBBY,
        dateRange: [2018, 2021],
        content: t('timeline.list.timeline-id-8', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 1,
        image: {
            srcSmallMain: timeline_id_8_s_200x200_main,
            srcSmallFallback: timeline_id_8_s_200x200_fallback,
            srcLarge: timeline_id_8_l_600x600_large,
            width: 200,
            height: 200
        },
    },
    {
        id: 'timeline-id-9',
        informationType: TIMELINE_INFORMATION_TYPE.HOBBY,
        dateRange: [2021, 2022],
        content: t('timeline.list.timeline-id-9', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 1,
    },
    {
        id: 'timeline-id-10',
        informationType: TIMELINE_INFORMATION_TYPE.HOBBY,
        dateRange: [2022, 2024],
        content: t('timeline.list.timeline-id-10', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 1,
    },
    {
        id: 'timeline-id-11',
        informationType: TIMELINE_INFORMATION_TYPE.EDUCATION,
        dateRange: [2023, 2024],
        content: t('timeline.list.timeline-id-11', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.LEFT,
        level: 2,
    },
    {
        id: 'timeline-id-12',
        dateRange: [1988, 1994],
        content: t('timeline.list.timeline-id-12', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: {
            srcSmallMain: timeline_id_12_s_200x300_main,
            srcSmallFallback: timeline_id_12_s_200x300_fallback,
            srcLarge: timeline_id_12_l_600x900_large,
            width: 200,
            height: 300
        },
    },
    {
        id: 'timeline-id-13',
        informationType: TIMELINE_INFORMATION_TYPE.EDUCATION,
        dateRange: [1994, 1998],
        content: t('timeline.list.timeline-id-13', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: {
            srcSmallMain: timeline_id_13_s_200x266_main,
            srcSmallFallback: timeline_id_13_s_200x266_fallback,
            srcLarge: timeline_id_13_l_600x800_large,
            width: 200,
            height: 266
        },
    },
    {
        id: 'timeline-id-14',
        informationType: TIMELINE_INFORMATION_TYPE.EDUCATION,
        dateRange: [1998, 2003],
        content: t('timeline.list.timeline-id-14', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: {
            srcSmallMain: timeline_id_14_s_200x160_main,
            srcSmallFallback: timeline_id_14_s_200x160_fallback,
            srcLarge: timeline_id_14_l_600x480_large,
            width: 200,
            height: 160
        },
    },
    {
        id: 'timeline-id-15',
        informationType: TIMELINE_INFORMATION_TYPE.EDUCATION,
        dateRange: [2003, 2005],
        content: t('timeline.list.timeline-id-15', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: {
            srcSmallMain: timeline_id_15_s_200x150_main,
            srcSmallFallback: timeline_id_15_s_200x150_fallback,
            srcLarge: timeline_id_15_l_600x450_large,
            width: 200,
            height: 150
        },
    },
    {
        id: 'timeline-id-16',
        dateRange: [2005, 2007],
        content: t('timeline.list.timeline-id-16', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
    },
    {
        id: 'timeline-id-17',
        dateRange: [2007, 2007],
        content: t('timeline.list.timeline-id-17', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
    },
    {
        id: 'timeline-id-18',
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        dateRange: [2007, 2010],
        content: t('timeline.list.timeline-id-18', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: {
            srcSmallMain: timeline_id_18_s_200x300_main,
            srcSmallFallback: timeline_id_18_s_200x300_fallback,
            srcLarge: timeline_id_18_l_600x902_large,
            width: 200,
            height: 300
        },
    },
    {
        id: 'timeline-id-19',
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        dateRange: [2010, 2011],
        content: t('timeline.list.timeline-id-19', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
    },
    {
        id: 'timeline-id-20',
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        dateRange: [2011, 2013],
        content: t('timeline.list.timeline-id-20', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        video: { id: 'IeStuiaomis', width: 250, height: 200, thumbnail: yt_thumbnail },
    },
    {
        id: 'timeline-id-21',
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        dateRange: [2013, 2014],
        content: t('timeline.list.timeline-id-21', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
    },
    {
        id: 'timeline-id-22',
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        dateRange: [2014, 2015],
        content: t('timeline.list.timeline-id-22', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: {
            srcSmallMain: timeline_id_22_s_200x200_main,
            srcSmallFallback: timeline_id_22_s_200x200_fallback,
            srcLarge: timeline_id_22_l_600x600_large,
            width: 200,
            height: 200
        },
    },
    {
        id: 'timeline-id-23',
        dateRange: [2015, 2015],
        content: t('timeline.list.timeline-id-23', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
    },
    {
        id: 'timeline-id-24',
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        dateRange: [2015, 2018],
        content: t('timeline.list.timeline-id-24', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: {
            srcSmallMain: timeline_id_24_s_200x200_main,
            srcSmallFallback: timeline_id_24_s_200x200_fallback,
            srcLarge: timeline_id_24_l_600x600_large,
            width: 200,
            height: 200
        },
    },
    {
        id: 'timeline-id-25',
        dateRange: [2018, 2018],
        content: t('timeline.list.timeline-id-25', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
    },
    {
        id: 'timeline-id-26',
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        dateRange: [2018, 2019],
        content: t('timeline.list.timeline-id-26', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: {
            srcSmallMain: timeline_id_26_s_200x133_main,
            srcSmallFallback: timeline_id_26_s_200x133_fallback,
            srcLarge: timeline_id_26_l_600x400_large,
            width: 200,
            height: 133
        },
    },
    {
        id: 'timeline-id-27',
        dateRange: [2019, 2019],
        content: t('timeline.list.timeline-id-27', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
    },
    {
        id: 'timeline-id-28',
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        dateRange: [2019, 2021],
        content: t('timeline.list.timeline-id-28', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: {
            srcSmallMain: timeline_id_28_s_200x227_main,
            srcSmallFallback: timeline_id_28_s_200x227_fallback,
            srcLarge: timeline_id_28_l_600x682_large,
            width: 200,
            height: 227
        },
    },
    {
        id: 'timeline-id-29',
        dateRange: [2021, 2021],
        content: t('timeline.list.timeline-id-29', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
    },
    {
        id: 'timeline-id-30',
        informationType: TIMELINE_INFORMATION_TYPE.WORK,
        dateRange: [2021, 2024],
        content: t('timeline.list.timeline-id-30', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
        image: {
            srcSmallMain: timeline_id_30_s_200x266_main,
            srcSmallFallback: timeline_id_30_s_200x266_fallback,
            srcLarge: timeline_id_30_l_600x800_large,
            width: 200,
            height: 266
        },
    },
    {
        id: 'timeline-id-31',
        dateRange: [2024, 2025],
        content: t('timeline.list.timeline-id-31', { returnObjects: true }),
        position: TIMELINE_ITEM_POSITION.RIGHT,
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
    2013: 200,
    2014: 220,
    2015: 180,
    2016: 180,
    2017: 180,
    2018: 320,
    2019: 160,
    2020: 160,
    2021: 160,
    2022: 160,
    2023: 160,
    2024: 120,
    2025: 0,
};