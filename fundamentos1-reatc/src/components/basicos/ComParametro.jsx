import React from "react"

export default function ComParametro(props) {

    const status = props.nota >= 7 ? ' Aprovadão Parceiro!!' : "Recuperação NAo foi desta Vez!!"

    const nomeAlun = props.aluno
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{nomeAlun} Ficou com a nota = {props.nota}</h3>
            E está
            <strong>{status}</strong>

        </div>
    )
}