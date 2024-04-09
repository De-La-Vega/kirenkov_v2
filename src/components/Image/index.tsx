import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { TImage } from '../../models';

import './index.scss';

type TProps = {
    className?: string;
    imageObj: TImage;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Image = forwardRef<HTMLDivElement, TProps>(({ imageObj, className, onClick }, ref) => {
    const { small } = imageObj;

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => onClick && onClick(event);

    return (
        <div
            ref={ref}
            className={classNames('image', className)}
            onClick={handleClick}
        >
            <picture>
                <source srcSet={small.srcMain} type="image/webp" />
                <img src={small.srcFallback} alt="" width={small.width} height={small.height} />
            </picture>
        </div>
    );
});

Image.displayName = 'Image';

export default React.memo(Image);
