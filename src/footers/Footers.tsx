import React from 'react';
import s from './Footers.module.scss'
import {Footer} from './footer/Footer';
import {Title} from '../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';

const iconTelegram = 'https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/telegram-512.png'
const iconFaceBook = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png'
const iconGitHub = 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
const iconLinkedIn = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png'
export const Footers = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <Fade cascade damping={0.1}>
                    <Title title={'Maksim Chernik'}/>"
                    <div className={s.socialIcons}>
                        <Fade cascade damping={0.99}>
                            <Footer icon={iconTelegram}/>
                            <Footer icon={iconFaceBook}/>
                            <Footer icon={iconGitHub}/>
                            <Footer icon={iconLinkedIn}/>
                        </Fade>
                    </div>
                </Fade>
                <span className={s.copyright}><Fade cascade damping={0.01}>"© 2022 Все права защищены."</Fade></span>
            </div>
        </div>
    );
};
