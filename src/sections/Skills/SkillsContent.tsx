import React from 'react';
import classNames from 'classnames';

import { GalleryWrapper } from '../../components/GalleryWrapper';
import { SKILLS_TYPE } from '../../enums';
import { TSkillsItem } from '../../models';

import './index.scss';

type TProps = {
    item: TSkillsItem;
};

export const SkillsContent: React.FC<TProps> = ({ item }) => {
    const { content, image, type, imageGallery } = item;

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

            {image && <GalleryWrapper data={[image]} itemClassName="skills__content-image" />}

            <div className="skills__content-text">
                {content.map((contentItem, index) => (
                    <div key={`${type}-text-${index}`} className="skills__content-paragraph">
                        {contentItem}
                    </div>
                ))}
            </div>

            {imageGallery && imageGallery.length > 0 ? (
                <div className="skills__content-gallery">
                    <GalleryWrapper data={imageGallery} />
                </div>
            ) : null}
        </div>
    )
};
