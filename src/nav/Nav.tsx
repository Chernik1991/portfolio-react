import React from 'react';
import s from './Nav.module.scss'
import {Fade} from 'react-awesome-reveal';
import {Link} from 'react-scroll';

export const Nav = () => {
    return (
        <div className={s.nav}>
            <Fade damping={0.9}>
                <Link activeClass={s.active} to="Main" spy={true} smooth={true} offset={1} duration={500}>
                    Main</Link>
                <Link activeClass={s.active} to="Skills" spy={true} smooth={true} offset={1} duration={500}>
                    Skills</Link>
                <Link activeClass={s.active} to="Projects" spy={true} smooth={true} offset={1} duration={500}>
                    Projects</Link>
                <Link activeClass={s.active} to="Contacts" spy={true} smooth={true} offset={1} duration={500}>
                    Contacts</Link>
            </Fade>
        </div>
    );
};

