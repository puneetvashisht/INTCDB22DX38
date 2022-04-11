import { useState } from "react";

function Badge(props){

    const [count, setCount] = useState(0)

    const increment = () => {
        console.log('click event...');
        setCount(count + 1)
    }

    return( 
        <button onClick={increment} type="button" className="btn btn-primary">
        {props.caption} <span className="badge bg-secondary">{count}</span>
        </button>
    )
}

export default Badge;