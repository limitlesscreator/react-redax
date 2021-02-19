import React from 'react';
import logo from './logo.svg';
import './App.css';

function hello() {
    alert('Hello IT')
}

function App() {
    console.log("App rendered")
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>

        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendered")
    return <>This is APP component</>
}
function AccordionTitle() {
    return (
        <div>
            <h3>Menu</h3>
        </div>
    )
}
function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
function Rating() {
    console.log("Rating rendered")
    return(
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}
function Star() {
    return (
        <div>
            <div>star</div>
        </div>
    )
}


function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

export default App;
