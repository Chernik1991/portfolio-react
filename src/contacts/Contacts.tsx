import React from 'react';
import s from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';
import {Slide} from 'react-awesome-reveal';

export const Contacts = () => {
    return (
        <div className={s.contactsBlock} id={'Contacts'}>
            <div className={s.container}>
                <Title title={'Contacts'}/>
                <Slide triggerOnce>
                    <form action="" method="post" className={s.form}>
                        <input type={'text'} className={s.formArea} placeholder={'name'}/>
                        <input type={'text'} className={s.formArea} placeholder={'e-mail'}/>
                        <textarea className={s.messageArea} placeholder={'Message'}/>
                        <button type={'submit'} className={s.button}>Send message</button>
                    </form>
                </Slide>
            </div>
        </div>
    );
};
