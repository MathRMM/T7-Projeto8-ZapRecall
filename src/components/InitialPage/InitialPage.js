import { Link } from 'react-router-dom'

import './initial.css'
import ZapLogo from '../../assets/logo.png'

export default function InitialPage() {
    return (
        <div className="initialPage">
            <header>
                <img src={ZapLogo} alt="logo" />
                <h1>ZapRecall</h1>
            </header>
            <Link to = "/flashcard">
                <button > Iníciar Recall!</button>
            </Link>
        </div>
    )
}
