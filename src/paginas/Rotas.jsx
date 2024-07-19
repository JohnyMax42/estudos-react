import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import PaginaSecundaria from "./PaginaSecundaria"

export default function Rotas(){
    return(

        <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/PaginaSecundaria' element={<PaginaSecundaria/>} exact/>
        </Routes>

    )
}