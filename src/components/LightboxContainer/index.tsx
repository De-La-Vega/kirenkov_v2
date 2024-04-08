import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import 'yet-another-react-lightbox/styles.css';
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { useLightbox } from './LightboxContext';

export const LightboxContainer: React.FC = () => {
    const { isOpen, slides, currentIndex, closeLightbox } = useLightbox();

    return (
        <Lightbox
            slides={slides}
            index={currentIndex}
            open={isOpen}
            close={closeLightbox}
            carousel={{ finite: slides.length <= 1 }}
            controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
            render={{
                buttonPrev: slides.length <= 1 ? () => null : undefined,
                buttonNext: slides.length <= 1 ? () => null : undefined,
            }}
            plugins={slides.length > 1 ? [Thumbnails] : undefined}
        />
    )
};
