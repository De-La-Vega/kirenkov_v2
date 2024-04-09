import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { YouTubeVideo } from '../../components/YouTubeVideo';
import { GalleryWrapper } from '../../components/GalleryWrapper';
import { TPortfolioItem } from '../../models';

import './index.scss';

type TProps = {
    item: TPortfolioItem;
};

export const PortfolioContent: React.FC<TProps> = ({ item }) => {
    const { t } = useTranslation();
    const { content, image, videoGallery, video, type } = item;

    return (
        <div className="portfolio-content">
            {image && <GalleryWrapper data={[image]} itemClassName="portfolio-content__image" />}
            {video && <YouTubeVideo video={video} className="portfolio-content__video" />}

            {content && (
                <div className="portfolio-content__text">
                    {content.map((text, index) => <div className="portfolio-content__paragraph" key={`${type}-text-${index}`}><Trans i18nKey={text} /></div>)}
                </div>
            )}

            {videoGallery && (
                <div className="portfolio-content__video-gallery">
                    {videoGallery.map((video, index) => (
                        <div key={`${type}-video-${index}`} className="portfolio-content__video-item">
                            <video width={video.width} height={video.height} controls>
                                <source src={video.id} type="video/mp4" />
                                {t('systemInformation.videoSupport')}
                            </video>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
};
