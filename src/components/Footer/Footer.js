import { useState } from "react"
import sad from '../../assets/sad.png'
import party from '../../assets/party.png'

export default function Footer({ answered, num }) {
    const [finish, setFinish] = useState(false)
    const list = [...answered]

    function Icons({ click }) {
        if (click == 1) {
            const green = { 'color': '#2FBE34' }
            return (
                <ion-icon name="checkmark-circle-sharp" style={green}></ion-icon>
            )
        }
        if (click == 2) {
            const orange = { 'color': '#FF922E' }
            return (
                <ion-icon name="help-circle-sharp" style={orange}></ion-icon>
            )
        }
        if (click == 3) {
            const red = { 'color': '#FF3030' }
            return (
                <ion-icon name="close-circle-sharp" style={red}></ion-icon>
            )
        }
    }

    function Count() {
        return (
            <div>
                {answered.map((e) => <Icons click={e} />)}
            </div>
        )
    }


    if (!finish) {
        if (num == answered.length) {
            setFinish(true)
        }
    }

    function Final() {
        const result = answered.find((e) => e == 3)
        if (!result) {
            return (
                <>
                    <p>
                        <img src={party} />
                        Parabéns!</p>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </>
            )
        } else {
            return (
                <>
                    <p>
                        <img src={sad} />
                        Putz...</p>
                    <p>Ainda faltam alguns... Mas não desanime!</p>
                </>
            )
        }
    }
    return (
        <div className='count'>
            {finish ? <Final /> : <></>}
            <p> {answered.length}/{num} CONCLUÍDOS</p>
            <Count />
        </div>
    )
}