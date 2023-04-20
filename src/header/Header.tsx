import React from 'react';
import s from './Header.module.scss'
import {Nav} from '../nav/Nav';

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div></div>
                <Nav/>
            </div>
        </div>

    )
        ;
};

