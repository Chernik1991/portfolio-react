import React from 'react';
import s from './Contacts.module.scss'
import c from '../../src/common/styles/Container.module.css'
import {Title} from '../common/components/title/Title';

export const Contacts = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <Title title={"Contacts"}/>
                <form action="" method="post" className={s.form}>
                    <input type={'text'}/>
                    <input type={'text'}/>
                    <textarea/>
                    <button type={"submit"} className={s.button}>Send</button>
                </form>
            </div>
        </div>
    );
};
