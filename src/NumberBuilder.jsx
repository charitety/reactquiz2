import React from "react";

export const NumberBuilder = () => {
    let[listOfNumbers, setListOfNumbers] = useState("");
    let[counter, setCounter] = useState(0);


    const numberTracker = (n) => {
        if (n=== "add"){
            setCounter(++counter);
            setListOfNumbers ((listOfNumbers += counter.toString()+""));
        }
    }else{
        setCounter(0);
        setListOfNumbers("");
    }

    
    return (
        <div>
            <button onClick={()=> numberTracker("add")}>Add Number</button>
            <button onClick={()=> numberTracker("reset")}>Reset</button>
            <br>
            Numbers: {listOfNumbers}
            </br>
           
        </div>
    )
};