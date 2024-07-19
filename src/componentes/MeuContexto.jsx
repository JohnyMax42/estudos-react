import React from "react";
import { createContext, useState } from "react";

let MeuContexto = createContext();

function MeuContextoProvider({children}){
 let[pessoas, setpessoas] = useState(
[
    {id:1, nome: 'João', idade:20},
    {id:2, nome: 'Maria', idade:20},
    {id:3, nome: 'José', idade:20},
    {id:4, nome: 'Pedro', idade:20}
]
);

return(
    <MeuContexto.Provider value={{pessoas, setpessoas}}>
        {children}
    </MeuContexto.Provider>
);
}

export{MeuContexto, MeuContextoProvider};