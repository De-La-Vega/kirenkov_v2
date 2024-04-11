import { TImageModel } from '../models';

// Consulting
import consulting_main_preview_webp from '../assets/portfolio/consulting_main_preview_200x200.webp';
import consulting_main_preview_jpg from '../assets/portfolio/consulting_main_preview_200x200.jpg';
import consulting_main_previewRetina_webp from '../assets/portfolio/consulting_main_previewRetina_400x400.webp';
import consulting_main_previewRetina_jpg from '../assets/portfolio/consulting_main_previewRetina_400x400.jpg';
import consulting_main_original_webp from '../assets/portfolio/consulting_main_original_600x600.webp';
import consulting_main_original_jpg from '../assets/portfolio/consulting_main_original_600x600.jpg';
import consulting_main_originalRetina_webp from '../assets/portfolio/consulting_main_originalRetina_1200x1200.webp';
import consulting_main_originalRetina_jpg from '../assets/portfolio/consulting_main_originalRetina_1200x1200.jpg';

export const gallery: Record<string, TImageModel> = {
    'consulting_main': {
        id: 'consulting_main',
        title: 'Consulting main',
        preview: {
            width: 200,
            height: 200,
            sources: {
                webp: consulting_main_preview_webp,
                jpg: consulting_main_preview_jpg,
            },
        },
        previewRetina: {
            width: 400,
            height: 400,
            sources: {
                webp: consulting_main_previewRetina_webp,
                jpg: consulting_main_previewRetina_jpg,
            },
        },
        original: {
            width: 600,
            height: 600,
            sources: {
                webp: consulting_main_original_webp,
                jpg: consulting_main_original_jpg,
            },
        },
        originalRetina: {
            width: 1200,
            height: 1200,
            sources: {
                webp: consulting_main_originalRetina_webp,
                jpg: consulting_main_originalRetina_jpg,
            },
        },
    },
};
