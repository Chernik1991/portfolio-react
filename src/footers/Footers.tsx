import React from 'react';
import s from './Footers.module.css'
import c from '../../src/common/styles/Container.module.css'
import {Footer} from './footer/Footer';

export const Footers = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Maksim Chernik</h2>
                <div className={s.skills}>
                    <Footer icon={"JS"} />
                    <Footer icon={"CSS"} />
                    <Footer icon={"REACT"} />
                    <Footer icon={"TS"} />
                </div>
                <h4 className={s.title}>"© 2022 Все права защищены."</h4>
            </div>
        </div>
    );
};
