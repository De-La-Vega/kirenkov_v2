import React, { useEffect, useState, useCallback } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// import { CircularProgressBar } from '../../components/CircularProgressBar';
import { scrollTo } from '../../utils';

import './index.scss';

export const ScrollTop: React.FC = () => {
    // const [percentage, setPercentage] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);

    const getTop = useCallback(() => window.scrollY || document.documentElement.scrollTop, []);

    // const updateDashoffset = useCallback(() => {
    //     const height = document.documentElement.scrollHeight - window.innerHeight;
    //     const percentage = (getTop() / height) * 100;

    //     setPercentage(percentage);
    // }, [getTop]);

    const handleScroll = useCallback(() => {
        const shouldBeActive = getTop() > window.innerHeight;
        if (isActive !== shouldBeActive) {
            setIsActive(shouldBeActive);
        }
        // window.requestAnimationFrame(updateDashoffset);
    // }, [getTop, updateDashoffset, isActive]);
    }, [getTop, isActive]);

    const handleClick = useCallback(() => scrollTo('section-hero'), []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div
            className={classNames('scroll-top', { 'scroll-top_status-active': isActive })}
            onClick={handleClick}
        >
            <FontAwesomeIcon icon={faArrowUp} className="scroll-top__arrow" />

            {/* <CircularProgressBar
                percentage={percentage}
                squareSize={50}
                strokeWidth={4}
            /> */}
        </div>
    );
};
