import React from 'react';
import style from './Button.module.scss'

type Props = {
    text: string
}
export const Button = (props: Props) => {
    return (
        <a href={''} className={style.btn}>{props.text}</a>
    );
};