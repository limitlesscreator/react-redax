import {useState} from "react";

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: PropsType) {


    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(true)
    }

    return <div>
        <div style={onStyle} onClick={onClicked}> On</div>
        <div style={offStyle} onClick={offClicked}>Off</div>
        <div style={IndicatorStyle}></div>
    </div>
}