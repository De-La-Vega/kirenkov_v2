import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { SlideImage } from 'yet-another-react-lightbox';

import { useLightbox } from '../../components/LightboxContainer/LightboxContext';
import { YouTubeVideo } from '../../components/YouTubeVideo';
import { Image } from '../../components/Image';
import { TPortfolioItem } from '../../models';

import './index.scss';

type TProps = {
    item: TPortfolioItem;
};

export const PortfolioContent: React.FC<TProps> = ({ item }) => {
    const { t } = useTranslation();
    const { openLightbox } = useLightbox();
    const { content, image, videoGallery, video, type } = item;

    const handleMainImageClick = () => {
        if (image) {
            const singleImageSlides: SlideImage[] = [{ src: image.srcLarge }];
            openLightbox(singleImageSlides, 0)
        }
    }

    return (
        <div className="portfolio-content">
            {image && <Image className="portfolio-content__image" imageObj={image} onClick={handleMainImageClick} />}
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
