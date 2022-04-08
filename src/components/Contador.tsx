import { useState } from "react"


export const Contador = () => {

    const [valor, setValor] = useState(0) //? toma el  tipo de useStatee, si es un numero, ebn estec so 0, valor es de tipo number

    const acumular = (numero: number) => {
        setValor(valor + numero)
    }
    return (<>
        <h3>Contador <small>{valor}</small></h3>
        <button onClick={() => acumular(1)} className="btn btn-primary">
            +1
        </button>
        &nbsp;
        <button onClick={() => acumular(-1)} className="ml-3 pl-3 btn btn-primary">
            -1
        </button>
    </>
    )
}
