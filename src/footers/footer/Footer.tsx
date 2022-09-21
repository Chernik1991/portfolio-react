import React from 'react';
import s from './Footer.module.css'

export const Footer = (props:any) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>{props.icon}</div>
        </div>
    );
};
