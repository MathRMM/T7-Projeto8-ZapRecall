import './flashcard.css'
import { useState } from 'react'
import ZapLogo from '../../assets/logo.png'
import BoxQuestion from '../Questions/BoxQuestion'
import Footer from '../Footer/Footer'


import {deck} from '../../database'



export default function Flashcards() {
  const [answered , setAnswered] = useState([])
  const cards = [...deck]
  cards.sort(random)
  cards.sort(random)


  function random() {
    return Math.random() - 0.5;
}

  return (
    <>
      <header className='flashcard '>
        <img src={ZapLogo} alt="logo" />
        <h1>ZapRecall</h1>
      </header>

      <div className="container">
        {cards.map((e , i) => <BoxQuestion 
        key={i}
        card={e} 
        num = {i+1}
        answered = {answered}
        setAnswered= {setAnswered}/>)}
      </div>

      <Footer answered = {answered}
              num = {cards.length}/>
    </>
  )
}

