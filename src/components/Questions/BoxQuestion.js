import { useState } from "react"
import Card from "./Card"
import QuestionGreen from './QuestionGreen'
import QuestionOrange from './QuestionOrange'
import QuestionRed from './QuestionRed'

import './cardStyle.css'

export default function BoxQuestion({ num, card, answered,setAnswered}) {
  const [flip, setFlip] = useState(false)
  const [respond,setRespond] = useState(0)


  function BoxQuestion() {
    return (
      <div className="boxQuestion"onClick={() => setFlip(true)}>
        <div className="question">Pergunta {num}</div>
        <ion-icon name="play-outline"></ion-icon>
      </div>
    )
  }

  function BoxSelect(){
   if (respond == 0){
      return(
        <Card
        question={card.question}
        answer={card.answer}
        num = {num}
        respond = {setRespond}
        answered ={answered}
        setAnswered = {setAnswered}
         />
      )
    }else if(respond == 1){
      return (
        <QuestionGreen num={num}/>
      )
    }
    else if(respond == 2){
      return (
        <QuestionOrange num={num}/>
      )
    }
    else if(respond == 3){
      return (
        <QuestionRed num={num}/>
      )
    }
  }

  return (
    <>
      {flip ? <BoxSelect />
        : <BoxQuestion />}
    </>
  )
}