import Header from "./Header"
import Footer from "./Footer"
import Rotas from "./Rotas"
import { BrowserRouter } from "react-router-dom"

export default function Layout(){
   return( <>
    <BrowserRouter>
    <Header/>
    <Rotas/>
    <Footer/>
    </BrowserRouter>
    </>
    )
}