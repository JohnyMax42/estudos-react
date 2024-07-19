import { useContext } from "react"
import { MeuContexto } from "../componentes/MeuContexto"

export default function Home(){
    let [pessoas, setpessoas] = useContext(MeuContexto)
    return(
        <h1>Primeira Página</h1>
    )
}