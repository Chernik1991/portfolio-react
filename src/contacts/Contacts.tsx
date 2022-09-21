import React from 'react';
import s from './Contacts.module.css'
import c from '../../src/common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form action="" method="post" className={s.form}>
                    <input />
                    <input />
                    <textarea />
                </form>
                <input type="submit" value="Отправить" className={s.button}/>
            </div>
        </div>
    );
};
