import React from 'react';
import s from './Title.module.scss'

type Props = {
    title: string
}

export const Title = (props: Props) => {
    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>
    );
};
