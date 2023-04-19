import React from 'react';
import s from './Nav.module.scss'
import {Fade} from 'react-awesome-reveal';

export const Nav = () => {
    return (
        <div className={s.nav}>
            <Fade damping={0.9}>
                <a>Main</a>
                <a>Skills</a>
                <a>Project</a>
                <a>Contacts</a>
            </Fade>
        </div>
    );
};

