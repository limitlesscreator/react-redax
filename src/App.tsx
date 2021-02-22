import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion';

function hello() {
    alert('Hello IT')
}

function App() {
    console.log("App rendered")
    return (
        <div>
            <OnOff />
            <OnOff />
            <OnOff />
            <UncontrolledAccordion titleValue ={'Menu'} />
            <UncontrolledAccordion titleValue={'Users'} />
            
            <Rating value={2}/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props:PageTitlePropsType) {
    console.log("PageTitle rendered")
    return <h1>{props.title}</h1>
}


export default App;
