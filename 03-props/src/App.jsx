import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user='Aman' age={18} img='https://images.unsplash.com/photo-1777877714035-57392b1c99c4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Sarthak' age={20} img='https://plus.unsplash.com/premium_vector-1731922571886-37d0c34f894f?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'/>
    </div>
  )
}

export default App
