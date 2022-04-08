import { json } from "stream/consumers"



// interface Persona {
//     nombre: string;
//     edad: number;
//     direccion: {
//         pais: string;
//         casaNr: number;
//     }
// }
interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
}
interface Direccion {
    pais: string;
    casaNr: number;
}

export const ObjetosLiterales = () => {
    const person: Persona = {
        nombre: "lucas",
        edad: 22,
        direccion: {
            pais: "Canadá",
            casaNr: 34
        }
    }

    return (
        <>
            <h3>
                ObjetosLiterales
                <code>
                    <pre>

                        {JSON.stringify(person, null, 2)}
                    </pre>
                </code>
            </h3>
        </>
    )
}
