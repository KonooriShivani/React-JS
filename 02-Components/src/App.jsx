import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <div className="card">
        <h1>Shivani Konoori</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dolorem, nostrum incidunt sapiente et, minus distinctio molestias tenetur eligendi ipsum numquam molestiae magni! Labore magni maxime reiciendis pariatur architecto doloribus!</p>
      </div>

      {/* Calling a function from imported value */}
      {Card()}
    </div>
  )
}


export default App
