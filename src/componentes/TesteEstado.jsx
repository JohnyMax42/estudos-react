import React, {useState} from 'react'

export default function TesteEstado(){
    let[cor, setCor] = useState('red')

    function mudarCor(cor){
        setCor(cor)
    }
    return(
        <div>
            <h1 style={{backgroundColor: cor}}>Teste de estado</h1>
            <button onClick={()=>mudarCor('red')}>vermelho</button>
            <button onClick={()=>mudarCor('blue')}>azul</button>
            <button onClick={()=>mudarCor('green')}>verde</button>
        </div>
    )
}