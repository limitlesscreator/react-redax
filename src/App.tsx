import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {Rating, RatingValueType} from "./components/Rating/Rating";

function hello() {
    alert('Hello IT')
}

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <div className={"App"}>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}

            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed}/>
            {/*<UncontrolledAccordion titleValue={'Accordion'}/>*/}
            <UncontrolledRating/>


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendered")
    return <h1>{props.title}</h1>
}

export default App;
