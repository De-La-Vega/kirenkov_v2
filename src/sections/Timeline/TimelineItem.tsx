import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { Trans } from 'react-i18next';

import { YouTubePreview } from '../../components/YouTubePreview';
import { GalleryWrapper } from '../../components/GalleryWrapper';
import { TTimelineItem } from '../../models';
import { TIMELINE_ITEM_TYPE, TIMELINE_ITEM_POSITION } from '../../enums';

import { Point } from './components/Point';
import { Range } from './components/Range';

import './index.scss';

type TProps = {
    item: TTimelineItem;
    height: number;
    offsetTop: number;
    type: TIMELINE_ITEM_TYPE;
};

const TimelineItem = forwardRef<HTMLDivElement, TProps>(({ item, height, offsetTop, type }, ref) => {
    const { position, content, level, image, video, icon } = item;

    return (
        <div
            ref={ref}
            data-id={item.id}
            className={classNames('timeline-item', {
                'timeline-item_level-0': position === TIMELINE_ITEM_POSITION.LEFT && level === 0,
                'timeline-item_level-1': position === TIMELINE_ITEM_POSITION.LEFT && level === 1,
                'timeline-item_level-2': position === TIMELINE_ITEM_POSITION.LEFT && level === 2,
                'timeline-item_type-point': type === TIMELINE_ITEM_TYPE.POINT,
                'timeline-item_type-range': type === TIMELINE_ITEM_TYPE.RANGE,
            })}
            style={{ height: `${height}px`, top: `${offsetTop}px` }}
        >
            {type === TIMELINE_ITEM_TYPE.POINT && icon && <Point icon={icon} className="timeline-item__point" />}
            {type === TIMELINE_ITEM_TYPE.RANGE && <Range className="timeline-item__range" timelineSide={position} />}

            <div className="timeline-item__content">
                {content.heading && <div className="timeline-item__heading">{content.heading}</div>}
                {content.subheading && <div className="timeline-item__subheading">{content.subheading}</div>}
                <div className="timeline-item__description"><Trans i18nKey={content.description} /></div>
            </div>

            {image && <GalleryWrapper data={[image]} itemClassName="timeline-item__image" />}

            {video && <YouTubePreview video={video} className="timeline-item__video" />}
        </div>
    );
});

TimelineItem.displayName = 'TimelineItem';

export default React.memo(TimelineItem);
