import React from 'react';
import s from './Footers.module.scss'
import c from '../../src/common/styles/Container.module.css'
import {Footer} from './footer/Footer';
import {Title} from '../common/components/title/Title';

export const Footers = () => {
    return (
        <div className={s.footersBlock}>
            <div className={`${c.container} ${s.footersContainer}`}>
                <Title title={"Maksim Chernik"}/>"
                <div className={s.footers}>
                    <Footer icon={""} />
                    <Footer icon={""} />
                    <Footer icon={""} />
                    <Footer icon={""} />
                </div>
                <h4 className={s.title}>"© 2022 Все права защищены."</h4>
            </div>
        </div>
    );
};
