import React, { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import throttle from 'lodash/throttle';

import { Heading } from '../../components/Heading'
import { getTimelineData } from '../../data/timeline';
import { TIMELINE_ITEM_POSITION, TIMELINE_INFORMATION_TYPE, TIMELINE_ITEM_TYPE } from '../../enums';
import { TTimelineItem } from '../../models';

import TimelineItem from './TimelineItem';
import { YearItem } from './YearItem';
import { getUniqueYearsFromItems, calculateHeightAndTop, handleScroll } from './utils';

import './index.scss';

type TTabConfigItem = {
    labelKey: string;
    value: TIMELINE_INFORMATION_TYPE | null;
}

const getSeparatedData = (
    data: TTimelineItem[],
    yearHeight: number,
    uniqueYears: number[],
    setRefs: (el: HTMLElement | null, index: number) => void,
) => {
    const dataLeft: React.ReactElement[] = [];
    const dataRight: React.ReactElement[] = [];

    data.forEach((item, index) => {
        const { dateRange } = item;
        const timelineItemType = dateRange[0] === dateRange[1] ? TIMELINE_ITEM_TYPE.POINT : TIMELINE_ITEM_TYPE.RANGE;
        const { itemHeight, itemTop } = calculateHeightAndTop(item, timelineItemType, yearHeight, uniqueYears);
        const refCallback = (el: HTMLElement | null) => setRefs(el, index);

        const itemNode = (
            <TimelineItem
                key={item.id}
                ref={refCallback} 
                item={item}
                height={itemHeight}
                offsetTop={itemTop}
                type={timelineItemType}
            />
        );

        if (item.position === TIMELINE_ITEM_POSITION.LEFT) {
            dataLeft.push(itemNode);
        } else {
            dataRight.push(itemNode);
        }
    });

    return {
        dataLeft,
        dataRight,
    }
};

export const Timeline: React.FC = () => {
    const yearHeight = 52;
    const { t } = useTranslation();
    const itemRefs = useRef<(HTMLElement | null)[]>([]);
    
    const [activeFilter, setActiveFilter] = useState<null | TIMELINE_INFORMATION_TYPE>(null);

    const toggleTab = useCallback((type: TIMELINE_INFORMATION_TYPE | null) => {
        setActiveFilter(type);
    }, []);

    const setRefs = useCallback((el: HTMLElement | null, index: number) => {
        itemRefs.current[index] = el;
    }, []);

    const tabsConfig: TTabConfigItem[] = useMemo(() => [
        { labelKey: t('timeline.tabs.all'), value: null },
        { labelKey: t('timeline.tabs.work'), value: TIMELINE_INFORMATION_TYPE.WORK },
        { labelKey: t('timeline.tabs.education'), value: TIMELINE_INFORMATION_TYPE.EDUCATION },
        { labelKey: t('timeline.tabs.hobby'), value: TIMELINE_INFORMATION_TYPE.HOBBY },
    ], [t]);

    // Фильтрация данных на основе активного фильтра
    const memoizedData = useMemo(() => getTimelineData(t).filter(item => {
        return activeFilter === null || item.informationType === activeFilter;
    }), [t, activeFilter]);

    const uniqueYears = useMemo(() => getUniqueYearsFromItems(memoizedData), [memoizedData]);
    const { dataLeft, dataRight } = getSeparatedData(memoizedData, yearHeight, uniqueYears, setRefs);

    const years = useMemo(() => {
        return uniqueYears.map((year) => <YearItem key={year} year={year} yearHeight={yearHeight} />);
    }, [uniqueYears]);

    useEffect(() => {
        const throttledHandleScroll = throttle(handleScroll, 100);
        window.addEventListener('scroll', throttledHandleScroll);
        throttledHandleScroll();

        return () => {
            window.removeEventListener('scroll', throttledHandleScroll);
        };
    }, [memoizedData, activeFilter]);

    return (
        <section className="g-outer section-timeline">
            <div className="g-inner">
                <Heading primaryText={t('navigation.timeline')}/>

                <ul className="timeline-filters">
                    {tabsConfig.map(tab => (
                        <li
                            key={tab.labelKey}
                            className={classNames('timeline-filters__item', { 'timeline-filters__item_status-active': activeFilter === tab.value })}
                            onClick={() => toggleTab(tab.value)}
                        >
                            {tab.labelKey}
                        </li>
                    ))}
                </ul>

                <div className="timeline">
                    <div className="timeline-left">{dataLeft}</div>
                    <div className="timeline-years">{years}</div>
                    <div className="timeline-right">{dataRight}</div>
                </div>
            </div>
        </section>
    );
};
