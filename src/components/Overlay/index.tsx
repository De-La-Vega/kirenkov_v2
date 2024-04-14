import React, { useState, useEffect } from 'react';

// Импортируйте оба изображения
import bgBodyWebP from '../../assets/bg-body.webp';
import bgBodyPng from '../../assets/bg-body.png';

import './index.scss';

export const Overlay: React.FC = () => {
    const [backgroundImage, setBackgroundImage] = useState<string>('');

    useEffect(() => {
        // Функция для проверки поддержки WebP
        const supportsWebP = () => {
            const img = new Image();
            img.onload = () => setBackgroundImage(bgBodyWebP);
            img.onerror = () => setBackgroundImage(bgBodyPng);
            img.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIADyQCIAAJAAkAAkAAAMgCABIBAwABAAAAAP4AAA3AACxAgAcABAAkADEAHzBAQAAAAAA';
        };

        supportsWebP();
    }, []);

    return <div className="overlay" style={{ background: `url(${backgroundImage}) repeat top left` }} />;
};
