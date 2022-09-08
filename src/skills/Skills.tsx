import React from 'react';
import s from './Skills.module.css'
import c from '../../src/common/styles/Container.module.css'
export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>

                </div>
            </div>
        </div>
    );
};
