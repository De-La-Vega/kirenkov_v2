import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { SlideImage } from 'yet-another-react-lightbox';

import { useLightbox } from '../../components/LightboxContainer/LightboxContext';
import { Image } from '../../components/Image';
import { SKILLS_TYPE } from '../../enums';
import { TSkillsItem } from '../../models';

import './index.scss';

type TProps = {
    item: TSkillsItem;
};

export const SkillsContent: React.FC<TProps> = ({ item }) => {
    const { openLightbox } = useLightbox();
    const { content, image, type, imageGallery } = item;

    const slides = useMemo(() => (
        imageGallery?.map(imageGalleryItem => ({ src: imageGalleryItem.srcLarge })) ?? []
    ), [imageGallery]);

    const handleGalleryImageClick = useCallback((event: React.MouseEvent<HTMLDivElement>, index: number) => {
        event.stopPropagation();
        openLightbox(slides, index);
    }, [slides, openLightbox]);

    const handleMainImageClick = useCallback(() => {
        if (image) {
            const singleImageSlides: SlideImage[] = [{ src: image.srcLarge }];
            openLightbox(singleImageSlides, 0);
        }
    }, [image, openLightbox]);

    return (
        <div
            className={classNames('skills__content', {
                'skills__content_type-management': type === SKILLS_TYPE.MANAGEMENT,
                'skills__content_type-programming': type === SKILLS_TYPE.PROGRAMMING,
                'skills__content_type-blogging': type === SKILLS_TYPE.BLOGGING,
                'skills__content_type-consulting': type === SKILLS_TYPE.CONSULTING,
            })}
        >
            <div className="skills__content-label">{item.label}</div>

            {image && (
                <Image
                    imageObj={image}
                    className="skills__content-image"
                    onClick={handleMainImageClick}
                />
            )}

            <div className="skills__content-text">
                {content.map((contentItem, index) => (
                    <div
                        key={`${type}-text-${index}`}
                        className="skills__content-paragraph"
                    >
                        {contentItem}
                    </div>
                ))}
            </div>

            {imageGallery && imageGallery.length > 0 ? (
                <div className="skills__content-gallery">
                    {imageGallery.map((imageGalleryItem, index) => (
                        <Image
                            key={`${item.type}-image-${index}`}
                            imageObj={imageGalleryItem}
                            onClick={(event) => handleGalleryImageClick(event, index)}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    )
};
