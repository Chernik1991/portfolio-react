import React from 'react';
import s from './Skills.module.css'
import c from '../../src/common/styles/Container.module.css'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
               <Title title={"Skills"}/>
                <div className={s.skills}>
                    <Skill title={"JS"} discription={"send......."}/>
                    <Skill title={"CSS"} discription={"send2......."}/>
                    <Skill title={"REACT"} discription={"send3......."}/>
                </div>
            </div>
        </div>
    );
};
