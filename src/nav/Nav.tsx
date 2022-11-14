import React from 'react';
import s from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a>Main</a>
            <a>Skills</a>
            <a>Project</a>
            <a>Contacts</a>
        </div>
    );
};

