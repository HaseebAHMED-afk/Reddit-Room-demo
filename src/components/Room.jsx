import React,{useState} from 'react';

function Room(props){
    const [isLit,setLit]=useState(false);
    const [temp,setTemp]=useState(32);
    const [color,setColor]=useState("black");
    const [textColor,setTextColor]=useState("white");
    function turnOn(){
        setLit(true);
        setColor("white")
        setTextColor("black");
    }
    function turnOff(){
        setLit(false);
        setColor("black")
        setTextColor("white");
    }
    function incTemp(){
        setTemp(temp+1);
    }
    function decTemp(){
        setTemp(temp-1);
    }

    return <div className="room" style={{backgroundColor:color,color:textColor }}> <h1>The room is {isLit? "lit":"dark"}</h1>
    <button onClick={turnOn}>On</button>
    <button onClick={turnOff}>Off</button>
    <p>Temprature={temp}℃</p>
    <button onClick={incTemp}>+</button>
    <button onClick={decTemp}>-</button>
    </div>
}

export default Room;