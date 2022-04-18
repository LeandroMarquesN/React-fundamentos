import React from 'react'

export default function ComParametro(props){

    const band = props.situação
    const not = props.nota
    const status = props.nota >= 7 ?' ele está Legal de mais!': "Hoje ele está chato de mais!!"

    return(
        <div>
            <h1>O {props.nome} </h1>
            <h2>Ele é um verdadeiro {band}</h2>
            <h3>Esse cara! <br/>O {props.nome} é nota {not}</h3>
            <h4>Hoje {status} se é loco!</h4> 
            


        </div>
    )
}