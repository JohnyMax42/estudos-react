export default function Card({objeto}){
    return(
        <div>
            <h1>{objeto.nome}</h1>
            <h2>{objeto.profissao}</h2>
            {objeto.idade !== undefined ? (<h2>{objeto.idade}</h2>) : (null)}
        </div>
    )
}