import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function hello() {
    alert('Hello IT')
}

function App() {
    console.log("App rendered")
    return (
        <div>
            <Accordion titleValue ={'Menu'} collapsed={false}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            
            <Rating value={1}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={5}/>
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
