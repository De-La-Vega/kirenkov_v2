import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';

import { TVideo } from '../../models';

import './index.scss';

type TProps = {
    video: TVideo;
    className?: string;
}

export const YouTubePreview: React.FC<TProps> = ({ video, className }) => (
    <a
        className={classNames('youtube-preview', className)}
        href={`https://youtu.be/${video.id}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Video Thumbnail"
    >
        <img
            src={video.thumbnail}
            width={video.width}
            height={video.height}
            alt="Video Thumbnail"
            className="youtube-preview__thumbnail"
        />
        <FontAwesomeIcon icon={faYoutube} className="youtube-preview__play-icon" />
    </a>
);
