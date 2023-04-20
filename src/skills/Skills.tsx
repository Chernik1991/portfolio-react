import React from 'react';
import s from './Skills.module.scss'
import c from '../../src/common/styles/Container.module.css'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';
import {Slide} from 'react-awesome-reveal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCss3Alt, faGithub, faHtml5, faReact, faSass} from '@fortawesome/free-brands-svg-icons';

export const Skills = () => {
    return (
        <div className={s.skillsBlock} id={'Skills'}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <Slide direction={'right'} cascade damping={0.1}>
                    <Title title={'Skills'}/>
                    <div className={s.skills}>
                        <Skill title={<FontAwesomeIcon icon={faReact} spin={true} size={'7x'}/>}
                               discription={'REACT'}/>
                        <Skill title={<FontAwesomeIcon icon={faSass} beat={true} size={'7x'}/>}
                               discription={'SASS'}/>
                        <Skill title={<FontAwesomeIcon icon={faCss3Alt} beat={true} size={'7x'}/>}
                               discription={'CSS'}/>
                        <Skill title={<FontAwesomeIcon icon={faGithub} beat={true} size={'7x'}/>}
                               discription={'CSS'}/>
                        <Skill title={<FontAwesomeIcon icon={faHtml5} beat={true} size={'7x'}/>}
                               discription={'CSS'}/>
                    </div>
                </Slide>
            </div>
        </div>
    );
};
