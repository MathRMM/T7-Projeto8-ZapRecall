import Return from '../../assets/setinha.png'
import { useState } from 'react'


export default function Card({ question, answer, respond , answered , setAnswered}) {
    const [turn, setTurn] = useState(false)
    console.log(respond)
    
    function CardFront() {
        return (
            <div className='card' >
                <p>{question}</p>
                <img src={Return} onClick={() => setTurn(true)} />
            </div>

        )
    }


    function CardBack() {
        return (
            <div className='card'>
                <p>{answer}</p>
                <div className='tags'>
                    <div className='tag red' onClick={()=>{
                        respond(3)
                        setAnswered([...answered,3])                            
                    }}
                    >Não lembrei</div>
                    <div className='tag orange'onClick={()=>{
                        respond(2)
                        setAnswered([...answered,2])                            
                    }}>Quase não lembrei</div>
                    <div className='tag green'onClick={()=>{
                        respond(1)
                        setAnswered([...answered,1])                            
                    }}>Zap!</div>
                </div>
                
            </div>
        )
    }



    return (
        <>
        {turn ? <CardBack/>:<CardFront/>}
        </>
    )
}

