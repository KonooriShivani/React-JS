import React from 'react'

function btnClicked(){
  console.log('Hello');
  
}
function mouseEnter(){
  console.log('Mouse Entered');
  
}
function inputEnter(){
  console.log("Input Entered")
}
function inputChanging(val){
  console.log(val)
}

const pageScrolling =(elem)=>{
  if(elem>0){
    console.log('Seedha scrolling');
  }else{
    console.log('ulta scrolling');
  }
}
const App = () => {
  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY)
      
    }}>
      {/* <button onClick={btnClicked} onMouseEnter={mouseEnter}>Click here</button>

      <input onChange={inputEnter} type="text" placeholder='Enter here'/>
      <input onChange ={function(elem){
        inputChanging(elem.target.value)
      }} type='text' placeholder='Enter name'>


      </input>
      <div onMouseMove={(elem)=>{
        console.log(elem.clientX)
      }} className='box'>
        box
      </div> */}

      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>

    </div>
  )
}

export default App
