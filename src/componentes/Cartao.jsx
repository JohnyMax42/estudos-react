export default function Cartao({nome, imagem, descricao}){
    function handleClick(){
        alert(`você clicou em ${nome}`)
    }
    return(
        <div class='card' style={{width: '18rem'}}>
            <img src={imagem} class='card-img-top' alt='nome'/>
            <div class='card-body'>
                <h5 class='card-title'>{nome}</h5>
                <p class='card-text'>{descricao}</p>
                <a href="#" class='btn btn-primary' onClick={()=>handleClick(7)}>Go somewhere</a>
            </div>
        </div>
    )
}