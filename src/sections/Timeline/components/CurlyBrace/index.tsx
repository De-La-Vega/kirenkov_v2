import React from 'react';
import classNames from 'classnames';

import './index.scss';

type TProps = {
    className?: string;
}

export const CurlyBrace: React.FC<TProps> = ({ className }) => (
    <div className={classNames('curly-brace', className)}>
        <div className="curly-brace__part curly-brace__part_position-start"></div>
        <div className="curly-brace__part curly-brace__part_position-end"></div>
    </div>
);
