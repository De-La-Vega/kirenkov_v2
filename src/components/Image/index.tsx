import React from 'react';
import classNames from 'classnames';

import { TImage } from '../../models';

import './index.scss';

type TProps = {
    className?: string;
    imageObj: TImage;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Image: React.FC<TProps> = ({ imageObj, className, onClick }) => {
    const { srcSmallMain, srcSmallFallback, width, height } = imageObj;

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => onClick && onClick(event);

    return (
        <div
            className={classNames('image', className)}
            onClick={handleClick}
        >
            <picture>
                <source srcSet={srcSmallMain} type="image/webp" />
                <img src={srcSmallFallback} alt="" width={width} height={height} />
            </picture>
        </div>
    );
}
