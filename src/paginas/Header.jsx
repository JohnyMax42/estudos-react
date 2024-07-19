import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>
        <h1>Topo da Pagina</h1>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/PaginaSecundaria'}>Secundaria</Link></li>
        </ul>
        </>
    )
}