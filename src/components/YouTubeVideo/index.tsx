import React, { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';

import { TVideo } from '../../models';

import './index.scss';

type TProps = {
    video: TVideo;
    className?: string;
}

export const YouTubeVideo: React.FC<TProps> = ({ video, className }) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

    const videoFrame = (
        <iframe
            className="video-iframe" 
            width={video.width}
            height={video.height}
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        ></iframe>
    );

    const videoThumbnail = (
        <div className="video-thumbnail" onClick={handleVideoLoad}>
            <img src={video.thumbnail} alt="Video Thumbnail" className="thumbnail-img" width={video.width} height={video.height} />
            <FontAwesomeIcon icon={faYoutube} className="play-icon" />
        </div>
    );

    return (
        <div className={classNames('youtube-video-container', className)} style={{ height: video.height, width: video.width }}>
            {isVideoLoaded ? videoFrame : videoThumbnail}
        </div>
    );
};
