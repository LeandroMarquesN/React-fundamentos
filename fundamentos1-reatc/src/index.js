import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import Comparametro from './components/basicos/ComParametro'


ReactDOM.render(
    <div>

        <Primeiro></Primeiro>
        <Comparametro 
            titulo = "Situação do aluno"
            aluno ="Leandro" nota = {9.9} 
            
        />
    </div>
    ,
    document.getElementById('root')
)