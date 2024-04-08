import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { SlideImage } from 'yet-another-react-lightbox';
import { Trans } from 'react-i18next';

import { useLightbox } from '../../components/LightboxContainer/LightboxContext';
import { Image } from '../../components/Image';
import { YouTubeVideo } from '../../components/YouTubeVideo';
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
    const { openLightbox } = useLightbox();
    const { position, content, level, image } = item;

    const handleImageClick = () => {
        if (image) {
            const slides: SlideImage[] = [{ src: image.srcLarge }];
            openLightbox(slides, 0)
        }
    }
  
    return (
        <div
            ref={ref}
            data-id={item.id}
            className={classNames('timeline__item', {
                'timeline__item_level-0': position === TIMELINE_ITEM_POSITION.LEFT && level === 0,
                'timeline__item_level-1': position === TIMELINE_ITEM_POSITION.LEFT && level === 1,
                'timeline__item_level-2': position === TIMELINE_ITEM_POSITION.LEFT && level === 2,
                'timeline__item_type-point': type === TIMELINE_ITEM_TYPE.POINT,
                'timeline__item_type-range': type === TIMELINE_ITEM_TYPE.RANGE,
            })}
            style={{ height: `${height}px`, top: `${offsetTop}px` }}
        >
            {type === TIMELINE_ITEM_TYPE.POINT && <Point className="timeline__item-point" />}
            {type === TIMELINE_ITEM_TYPE.RANGE && <Range className="timeline__item-range" timelineSide={position} />}

            <div className="timeline__item-content">
                {content.heading && <div className="timeline__item-heading">{content.heading}</div>}
                {content.subheading && <div className="timeline__item-subheading">{content.subheading}</div>}
                <div className="timeline__item-description"><Trans i18nKey={content.description} /></div>
            </div>

            {image && (
                <Image
                    imageObj={image}
                    className="timeline__item-image"
                    onClick={handleImageClick}
                />
            )}
            {item.video && <YouTubeVideo video={item.video} className="timeline__item-video" />}
        </div>
    );
});

TimelineItem.displayName = 'TimelineItem';

export default React.memo(TimelineItem);
