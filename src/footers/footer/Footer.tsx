import React from 'react';
import s from './Footer.module.scss'

export const Footer = (props:any) => {
    return (
        <div className={s.footer}>
            <div className={s.icon}>{props.icon}</div>
        </div>
    );
};
