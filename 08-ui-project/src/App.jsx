import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users =[
    {
      img:'https://images.unsplash.com/photo-1715635846028-f162249377c8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuayUyMGN1c3RvbWVyJTIwaGFwcHl8ZW58MHx8MHx8fDA%3D',
      color: 'royalblue',
      intro:'Prime customers, that have access to bank credit and are satisfied with the current product',
      tag:'Satisfied'
    
    },
    {
      img:'https://media.istockphoto.com/id/2172808798/photo/a-young-worried-woman-using-her-smartphone-to-shop-online-and-holding-a-credit-card.webp?a=1&b=1&s=612x612&w=0&k=20&c=UZmBetO5qSJpVR7dItGnOnxMZva6joVciRfvhemU9Vg=',
      color:'orange',
      intro:'Prime customers, that have access to bank credit and are not satisfied with the current service',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1758273705998-05655eea4635?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuayUyMGN1c3RvbWVyJTIwaGFwcHl8ZW58MHx8MHx8fDA%3D',
      color:'green',
      intro:'Customers from near-prime and sub-prime segments with no access to bank credit',
      tag:'Underbanked'
    },
     {
      img:'https://i.pinimg.com/736x/42/54/0e/42540e6878e714a67411afcd9595d91e.jpg',
      color:'pink',
      intro:'Customers from near-prime and sub-prime segments with no access to bank credit',
      tag:'Average'
    }
    
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
