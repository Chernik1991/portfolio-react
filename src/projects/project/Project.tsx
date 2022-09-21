import React from 'react';
import s from './Project.module.css'

export const Project = (props: any) => {
    return (
        <div className={s.project}>
            <div className={s.icon}>
                <a className={s.button}>{'Смотреть'}</a>
            </div>
            <div>
                <div className={s.title}><h3 className={s.title2}>{props.title}</h3></div>
                <div><span className={s.description}>{props.description}</span></div>
            </div>
        </div>
    );
};
