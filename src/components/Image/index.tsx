import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { TImageModel } from '../../models';

import './index.scss';

type TProps = {
    className?: string;
    imageObj: TImageModel;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Image = forwardRef<HTMLDivElement, TProps>(({ imageObj, className, onClick }, ref) => {
    const { alt, preview, previewRetina } = imageObj;

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => onClick && onClick(event);

    return (
        <div
            ref={ref}
            className={classNames('image', className)}
            onClick={handleClick}
        >
            <picture>
                <source type="image/webp" srcSet={`${previewRetina.sources.webp} 2x, ${preview.sources.webp} 1x`} />
                <source type="image/jpeg" srcSet={`${previewRetina.sources.jpg} 2x, ${preview.sources.jpg} 1x`} />
                <img
                    src={preview.sources.jpg}
                    alt={alt || ''}
                    width={preview.width}
                    height={preview.height}
                    loading="lazy"
                />
            </picture>
        </div>
    );
});

Image.displayName = 'Image';

export default React.memo(Image);
