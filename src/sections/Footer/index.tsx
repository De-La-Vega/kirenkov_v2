import React from 'react';

import { FollowMe } from '../../components/FollowMe';
import { WriteToMe } from '../../components/WriteToMe';
import { Logo } from '../../components/Logo';

import './index.scss';

export const Footer: React.FC = () => {
    return (
        <section className="g-outer section-footer">
            <div className="g-inner">
                <div className="section-footer__logo"><Logo /></div>
                <WriteToMe />
                <FollowMe />
            </div>
        </section>
    )
};
