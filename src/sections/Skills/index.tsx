import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';

import useLocalStorage from '../../useLocalStorage';
import { Heading } from '../../components/Heading'
import { getSkillsData } from '../../data/skills';
import { SKILLS_TYPE, LOCAL_STORAGE_KEY } from '../../enums';

import { SkillsContent } from './SkillsContent';
import { SkillsTab } from './SkillsTab';

const SkillsContentMemo = React.memo(SkillsContent);
const SkillsTabMemo = React.memo(SkillsTab);

export const Skills: React.FC = () => {
    const [activeItemType, setActiveItemType] = useLocalStorage<SKILLS_TYPE>(LOCAL_STORAGE_KEY.ACTIVE_SKILLS_TYPE, SKILLS_TYPE.MANAGEMENT);

    const { t } = useTranslation();
    const skillsData = useMemo(() => getSkillsData(t), [t]);

    const handleOpen = useCallback((itemType: SKILLS_TYPE) => {
        setActiveItemType(itemType);
        localStorage.setItem(LOCAL_STORAGE_KEY.ACTIVE_SKILLS_TYPE, itemType);
    }, []);

    const activeItem = skillsData.find((item) => item.type === activeItemType);

    return (
        <section className="g-outer section-skills">
            <div className="g-inner">
                <Heading primaryText={t('navigation.skills')}/>

                <div className="skills">
                    <div className="skills__tabs">
                        {skillsData.map((item) => (
                            <SkillsTabMemo
                                key={item.id}
                                item={item}
                                activeItemType={activeItemType}
                                onClick={handleOpen}
                            />
                        ))}
                    </div>

                    {activeItem && (
                        <SkillsContentMemo item={activeItem} />
                    )}
                </div>
            </div>
        </section>
    )
};
