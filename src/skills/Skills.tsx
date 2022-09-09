import React from 'react';
import s from './Skills.module.css'
import c from '../../src/common/styles/Container.module.css'
import {Skill} from './skill/Skill';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"JS"} discription={"send......."}/>
                    <Skill title={"CSS"} discription={"send2......."}/>
                    <Skill title={"REACT"} discription={"send3......."}/>
                </div>
            </div>
        </div>
    );
};
