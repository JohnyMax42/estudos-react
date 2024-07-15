let estilo={
    color: 'black',
    backgroundColor: '#ffffff'
}

function Cabecalho({titulo, subtitulo}){

    return(
        <header style={estilo}>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </header>
    )
}

export default Cabecalho