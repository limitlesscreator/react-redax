import {useState} from "react";

type PropsType = {
    // on: boolean
}



export function OnOff(props: PropsType){


    let [on, setOn] = useState(false)

    const onStyle = {
        width: "40px",
        padding: "5px 0px",
        border: "1px solid black",
        display: "inline-block",
        background: on ? "green" : "white"
    }
    const offStyle = {
        width: "40px",
        padding: "5px 0px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "4px",
        background: on ? "white" : "red"



    }
    const IndicatorStyle = {
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        background: on ? "green" : "red"

    }

    return(
        <div>
            <div style={onStyle} onClick={ () => { setOn(true)} }>On</div>
            <div style={offStyle} onClick={ () => { setOn(false)} }>Off</div>
            <div style={IndicatorStyle} ></div>
        </div>
    )
}