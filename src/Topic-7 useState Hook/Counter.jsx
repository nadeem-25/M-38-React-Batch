import React,{useState} from "react"

const Counter = () => {

    // React state variable
    const [countReact,setCountReact] = useState(0);  

    console.log("counter render");

    // Js local variable inside component
    let countJs = 0; 
    const incrementCountJs = ()=>{
        countJs = countJs + 1;
        console.log("countJs:",countJs);
    }

    const incrementCountReact=()=>{
            setCountReact(countReact + 1);
    }
    return <div>
        <h1>Counter Component</h1>
        <h2>Count Js:{countJs}</h2>
        <h2>Count React:{countReact}</h2>
        <button onClick={incrementCountJs}>Incr Js Count</button>
        <button onClick={incrementCountReact}>Incr React Count</button>
    </div>
}

export default Counter;







 