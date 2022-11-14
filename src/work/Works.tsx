import React from 'react';
import s from './Works.module.scss'
import c from '../../src/common/styles/Container.module.css'
import {Title} from '../common/components/title/Title';

export const Works = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <Title title={"Looking into remote work options"}/>
                <a className={s.button}> Hire me</a>
                </div>
            </div>
    );
};
