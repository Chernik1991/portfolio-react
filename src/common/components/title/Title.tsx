import React from 'react';
import s from './Title.module.scss'



export const Title = (props:any) => {
    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>
    );
};
