import React, { useState } from 'react'
import { number } from './../node_modules/zod/v4/core/regexes';
import { arr } from './../../import and export/app';


const App = () => {
  
  const [num, setNum] = useState({user:'Sarthak', age: 20})
  const [arr, setArr] = useState([10, 20, 30])
  const [user, setUser] = useState({name: 'Keerthi', age: 15})
  const [number, setNumber] = useState(10)

  const btnClicked = () =>{
    //destructuring of objects with the use of useState
    const newNum = {...num};
    newNum.user= 'Aman';
    setNum(newNum)
    
    //destructuring of arrays with the use of useState
    const newArr = [...arr];
    newArr.push(40)
    setArr(newArr);

    //destructuring of arrays using arrow function 
    setUser(prev =>({...prev, age: 50}))


    //Using batch updates concept in useState(.........BATCH UPDATE)
    setNum(prev =>{prev + 1})
    setNum(prev =>{prev + 1})
    setNum(prev =>{prev + 1})
}
  return (
    <div>
      <h1>{num.user},{num.age} <br/> {arr}</h1>
      <h2>{user.name}, {user.age}</h2>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
