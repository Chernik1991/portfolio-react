import React from 'react';
import s from './Main.module.scss'
import c from '../../src/common/styles/Container.module.css'


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={c.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Maksim Chernik</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};
