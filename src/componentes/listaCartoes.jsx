import Cartao from "./Cartao";

export default function listaCartoes({listaPessoas}){
    return(
        <div>
        {listaPessoas.map((pessoa, index)=> <Cartao key={index} objeto={pessoa}/>)}   
        </div>
    )
}