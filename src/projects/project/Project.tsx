import React from 'react';
import s from './Project.module.css'

export const Project = (props: any) => {
    return (
        <div className={s.project}>
            <div className={s.icon}>
                <a className={s.button}>{'Смотреть'}</a>
            </div>
            <div className={s.title2}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};
