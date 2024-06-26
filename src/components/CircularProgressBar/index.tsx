import React from 'react';

import './index.scss';

type TProps = {
    squareSize?: number;
    strokeWidth?: number;
    percentage: number;
}

export const CircularProgressBar: React.FC<TProps> = ({ squareSize = 50, strokeWidth = 4, percentage = 0 }) => {
    // Size of the enclosing square
    const sqSize = squareSize;

    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (sqSize - strokeWidth) / 2;

    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;

    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;

    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - dashArray * percentage / 100;

    return (
        <svg
            width={sqSize}
            height={sqSize}
            viewBox={viewBox}
            className="circle-progress-bar"
        >
            <circle
                className="circle-background"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
            />

            <circle
                className="circle-progress"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}

                // Start progress marker at 12 O'Clock
                transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset
                }}
            />
        </svg>
    );
}
