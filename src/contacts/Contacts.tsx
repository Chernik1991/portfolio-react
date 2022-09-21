import React from 'react';
import s from './Contacts.module.css'
import c from '../../src/common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form action="" method="post" className={s.form}>
                    <input type={'text'}/>
                    <input type={'text'}/>
                    <textarea/>
                </form>
                <a className={s.button}>{"Send"}</a>
            </div>
        </div>
    );
};
