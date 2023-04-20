import React, {useCallback} from 'react';
import s from './Main.module.scss'
import Particles from 'react-tsparticles';
import type {Engine} from 'tsparticles-engine';
import {loadFull} from 'tsparticles';
import {Slide} from 'react-awesome-reveal';
import {Tilt} from 'react-tilt'
import ReactTypingEffect from 'react-typing-effect';

export const Main = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className={s.mainBlock} id={'Main'}>
            <Particles
                className={s.particles}
                init={particlesInit}
                options={{
                    fullScreen: false,
                    particles: {
                        color: {
                            value: '#ffffff',
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce',
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 60,
                        },
                    },
                }}
            />
            <div className={s.container}>
                <div className={s.greeting}>
                    <Slide direction={'left'} cascade damping={0.9}>
                        <div>Hi There</div>
                        <div>I am Maksim <div>Chernik</div></div>
                        <ReactTypingEffect text={'Front-end Developer'}/></Slide>
                </div>
                <Slide direction={'right'} damping={0.9}>
                    <Tilt options={{max: 25}}>
                        <div className={s.photo}>
                            <div className={s.image}></div>
                        </div>
                    </Tilt>
                </Slide>
            </div>
        </div>
    )
};
