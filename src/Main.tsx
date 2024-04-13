import React from 'react';

import { Overlay } from './components/Overlay';
import { BgLines } from './components/BgLines';
import { ScrollTop } from './components/ScrollTop';

import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { YearsOfExperience } from './sections/YearsOfExperience';
import { Timeline } from './sections/Timeline';
import { Skills } from './sections/Skills';
import { Portfolio } from './sections/Portfolio';
import { ViewsAndIdeas } from './sections/ViewsAndIdeas';
import { Footer } from './sections/Footer';

export const Main: React.FC = () => (
    <>
        <Overlay />
        <BgLines />
        <ScrollTop />
        <Navigation />

        <main>
            <Hero />
            <YearsOfExperience />
            <Timeline />
            <Skills />
            <Portfolio />
            <ViewsAndIdeas />
            <Footer />
        </main>
    </>
);
