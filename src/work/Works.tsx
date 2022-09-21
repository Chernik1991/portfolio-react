import React from 'react';
import s from './Works.module.css'
import c from '../../src/common/styles/Container.module.css'

export const Works = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Looking into remote work options</h2>
                <button className={s.button}> Hire me</button>
                </div>
            </div>
    );
};
