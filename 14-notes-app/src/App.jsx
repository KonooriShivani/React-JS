import React, { useState } from 'react'



const App = () => {
  
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(title, details);
    
    const copyTask = [...task];

    copyTask.push({title, details})
    setTask(copyTask)
    
    console.log(task);
    
    setTitle('')
    setDetails('')
    
  }

  const deleteNote =(idx) =>{

    const copyTask= [...task];
    copyTask.splice(idx, 1)

    setTask(copyTask)
  }



  return (
    <div className='h-screen lg:flex bg-black text-white overflow-auto'>
      <form 
      className=' flex items-start flex-col lg:w-1/2 p-10  gap-5'
      onSubmit = {(e) =>{
          submitHandler(e)
      }}
      >

        <h1 className='text-4xl font-bold'>Add Notes</h1>
        <input 
        type="text" 
        placeholder='Enter Notes Heading' 
        className='px-5 py-2 w-full font-medium border-2 rounded outline-none'
        value = {title}
        onChange ={(e) =>{
          setTitle(e.target.value)
        }}
        />

        <textarea
          placeholder = "Enter Details" 
          name="" id=""
          className='px-5 py-2 w-full font-medium border-2 rounded h-30 outline-none'
          value = {details}
          onChange = {(e)=>{
            setDetails(e.target.value)
          }}
        >
        </textarea>

        <button 
          className='bg-white active:bg-gray-400 font-medium text-black px-5 py-2 w-full rounded outline-none'
        >Add Notes</button>
      
      </form>

      <div className=' p-10 lg:w-1/2 lg:border-l-2 '>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5  overflow-auto'>
          {task.map(function(elem, idx){
            return <div key={idx} className="flex justify-between items-start h-52 w-40 rounded-xl relative p-5 ">

                <img src="/images/note.png" alt="Note" className='absolute inset-0 w-full h-full'/>
                <div className='absolute  pl-5'>
                  <h1 className='text-blue-800 text-2xl font-semibold'>{elem.title}</h1>
                  <p className='text-gray-500 text-base font-medium mt-4 leading-tight'>{elem.details}</p>
                </div>
                
                <button className="text-white cursor-pointer active:scale-95 absolute top-[150px] left-[39px] bg-red-600 rounded-full w-25 font-semibold py-1 "
                        onClick={() =>{
                          deleteNote(idx)
                        }}>delete note</button>
            </div>
            
          })}
        </div>
      </div>

      
    </div>
  )
}

export default App

