import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {Projects} from './projects/Projects';
import {Works} from './work/Works';
import {Contacts} from './contacts/Contacts';
import {Footers} from './footers/Footers';

function App() {
    return (
        <div className={'App'}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Works/>
            <Contacts/>
            <Footers/>
        </div>
    )

}

    export default App;
