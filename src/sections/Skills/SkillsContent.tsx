import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Trans } from 'react-i18next';

import { GalleryWrapper } from '../../components/GalleryWrapper';
import { LinkText } from '../../components/LinkText';
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
            role="tabpanel"
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
                {content.map((contentItem, contentItemIndex) => (
                    <Fragment key={`${type}-container-${contentItemIndex}`}>
                        <div className="text-subheading">{contentItem.label}</div>

                        {contentItem.text.map((text, textIndex) => (
                            <p key={`${type}-text-${textIndex}`}>
                                <Trans
                                    i18nKey={text}
                                    components={{
                                        youtube: <LinkText href="https://www.youtube.com/@prosto_razrabotka" />
                                    }}
                                />
                            </p>
                        ))}
                    </Fragment>
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
