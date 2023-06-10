import React, { useState } from 'react'
import data from './data'

export default function App() {
  const [count, setCount] = useState(0)
  const[text, setText] = useState([])

  function handleSubmit(e){
    e.preventDefault();
    let amount = parseInt(count);
    if(count<0){
      amount = 1;
    }
    if(count>=8){
      amount = 8;
      return amount;
    }
    setText(data)
  }

  return (
    <section className='section-center'>
      <h2>Tired of Boring Lorem Ipsum?</h2>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label for="amount">Paragragh:</label>
        <input type="number" id='amount' 
        name="amount" 
        value={count} onChange={(e)=>setCount()}/>
        <button type="submit" className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        <div>
          {text.map((item,index)=>{
            return <p key={index}>{item}</p>
          })}
        </div>
      </article>
    </section>
  )
}
