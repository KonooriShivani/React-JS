import React, { useState } from 'react'
import { number } from './../node_modules/zod/v4/core/regexes';

const App = () => {

    let [num, setNum] = useState(0)

    function incrementer(){
        
        num++;
        setNum(num);
    }
    function decrementer(){
        
        num--;
        setNum(num);
    }
    return (
        <div>
            <h1>{num}</h1>
           <button onClick={incrementer}>increase</button>
           <button onClick={decrementer}>decrease</button>
        </div>
    )
}

export default App
