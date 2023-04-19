import React from 'react';
import s from './Projects.module.scss'
import c from '../../src/common/styles/Container.module.css'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from '../assets/image/todolist.jpg'
import socialImage from '../assets/image/socialSet.jpg'
import {Slide} from 'react-awesome-reveal';

export const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div className={s.projectsBlock}>
            <div className={`${c.container} ${s.projectsContainer}`}>
                <Title title={'My Projects'}/>
                <div className={s.projects}>
                    <Slide direction={'left'} cascade damping={0.1}>
                        <Project style={socialNetwork} title={'Social Network'} description={'send.......'}/>
                        <Project style={todolist} title={'Todo List'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    </Slide></div>
            </div>
        </div>
    );
};