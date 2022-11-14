import React from 'react';
import s from './Header.module.scss'
import {Nav} from '../nav/Nav';
import c from '../../src/common/styles/Container.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={c.container}>
                <div></div>
                <Nav/>
            </div>
        </div>

    )
        ;
};

