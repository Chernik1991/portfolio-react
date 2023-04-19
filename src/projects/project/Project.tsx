import React from 'react';
import s from './Project.module.scss'

export const Project = (props: any) => {
    return (
        <div className={s.project}>
            <div className={s.icon} style={props.style}>
                <a className={s.button}>VIEW</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};
