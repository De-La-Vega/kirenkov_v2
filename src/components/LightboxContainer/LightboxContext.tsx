import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { SlideImage } from 'yet-another-react-lightbox';

type TLightboxContext = {
    isOpen: boolean;
    slides: SlideImage[];
    currentIndex: number;
    openLightbox: (newSlides: SlideImage[], index: number) => void;
    closeLightbox: () => void;
};

const LightboxContext = createContext<TLightboxContext | undefined>(undefined);

type TLightboxProviderProps = {
    children: ReactNode;
};

export const useLightbox = (): TLightboxContext => {
    const context = useContext(LightboxContext);
    if (context === undefined) {
        throw new Error('useLightbox must be used within a LightboxProvider');
    }
    return context;
};

export const LightboxProvider: React.FC<TLightboxProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [slides, setSlides] = useState<SlideImage[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);

    const openLightbox = useCallback((newSlides: SlideImage[], index: number): void => {
        setSlides(newSlides);
        setCurrentIndex(index);
        setIsOpen(true);
    }, []);
    
    const closeLightbox = useCallback((): void => {
        setIsOpen(false);
        setSlides([]);
        setCurrentIndex(-1);
    }, []);

    return (
        <LightboxContext.Provider value={{ isOpen, slides, currentIndex, openLightbox, closeLightbox }}>
            {children}
        </LightboxContext.Provider>
    );
};
