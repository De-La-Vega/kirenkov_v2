import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery'
import classNames from 'classnames';

import { TImage } from '../../models';
import Image from '../Image';

type TProps = {
    data: TImage[];
    itemClassName?: string;
}

export const GalleryWrapper: React.FC<TProps> = ({ data, itemClassName }) => (
    <Gallery>
        {data.map((item, index) => (
            <Item
                key={index}
                original={item.large.srcMain}
                thumbnail={item.small.srcFallback}
                width={item.large.width}
                height={item.large.height}
            >
                {({ ref, open }) => (
                    <Image
                        className={classNames('image', itemClassName)}
                        ref={ref}
                        imageObj={item}
                        onClick={open}
                    />
                )}
            </Item>
        ))}
    </Gallery>
);