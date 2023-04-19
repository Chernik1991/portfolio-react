import React from 'react';
import s from './Footer.module.scss'

type Props = {
    icon: string
}
export const Footer = (props: Props) => {
    return (
        <div className={s.socialIcon}>
            <a href={''}><img
                src={props.icon}
                alt={''}/></a>
        </div>
    );
};
