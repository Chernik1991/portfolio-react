import React from 'react';
import s from './Projects.module.css'
import c from '../../src/common/styles/Container.module.css'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${c.container} ${s.projectsContainer}`}>
                <Title title={"My Projects"}/>
                <div className={s.projects}>
                    <Project title={'Social Network'} description={'send.......'}/>
                    <Project title={'Todo List'} description={'send.......'}/>
                </div>
            </div>
        </div>
    );
};