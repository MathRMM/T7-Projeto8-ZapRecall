import {BrowserRouter, Route, Routes} from 'react-router-dom'

import InitialPage from './InitialPage/InitialPage'
import Flashcards from './FlashCards/FlashCards'

function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path = "/" element ={<InitialPage/>}/>
            <Route path='/flashcard' element= {<Flashcards/>}/>
        </Routes>
        </BrowserRouter>
    )

}

export default App
