import { useState } from "react"

const ColorCounter =() =>{
    const [count, setcount] = useState(0)
    return(
        <div>
            <h2>{count}</h2> 
            
            <button onClick={() => setcount(count+1)}>count increase</button>
        </div>
    )
}

export default ColorCounter