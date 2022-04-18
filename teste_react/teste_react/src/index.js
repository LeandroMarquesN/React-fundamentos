
import ReactDom from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './componentes/basico/Primeiro'
import ComParametro from './componentes/basico/ComParametro'

ReactDom.render(
<div>
    Olá React!
    <Primeiro></Primeiro>

    <ComParametro nome ='Leandro' nota ='10.0' situação = 'Bandidão!!' />

</div>
,
document.getElementById('root')

)