import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery'

import { TImageModel } from '../../models';
import Image from '../Image';

type TProps = {
    data: TImageModel[];
    itemClassName?: string;
}

export const GalleryWrapper: React.FC<TProps> = ({ data, itemClassName }) => (
    <Gallery>
        {data.map((image) => (
            // <Item
            //     key={index}
            //     original={item.large.srcMain}
            //     thumbnail={item.small.srcFallback}
            //     width={item.large.width}
            //     height={item.large.height}
            // >
            //     {({ ref, open }) => (
            //         <Image
            //             className={itemClassName}
            //             ref={ref}
            //             imageObj={item}
            //             onClick={open}
            //         />
            //     )}
            // </Item>

            <Item
                key={image.id}
                original={image.original.sources.webp}
                originalSrcset={`${image.original.sources.webp} 600w, ${image.originalRetina.sources.webp} 1200w`}
                thumbnail={image.preview.sources.webp}
                width={image.original.width}
                height={image.original.height}
            >
            {({ ref, open }) => (
                <Image
                    className={itemClassName}
                    ref={ref}
                    imageObj={image}
                    onClick={open}
                />
            )}
            </Item>
        ))}
    </Gallery>
);