import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { useUsuarios } from "../hooks/useUsuarios"
import { ReqResListado, User } from "../interfaces/reqRes"

export const Usuarios = () => {

    const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios()

    const renderItem = (usuario: User) => {

        return (
            <tr key={usuario.id.toString()}>
                <td><img
                    src={usuario.avatar}
                    alt=""
                    style={{ width: 50, borderRadius: 100 }}
                /></td>
                <td>{usuario.first_name} {usuario.last_name}</td>
                <td>{usuario.email}</td>
            </tr>
        )
    }

    return (
        <>
            <h5>Usuairos:</h5>

            <table className="table">
                <thead>
                    <tr>
                        <th>avatar </th>
                        <th>Nomre</th>
                        <th>email</th>
                    </tr>
                    <tbody>
                        {usuarios.map((usuario, key) => renderItem(usuario))}
                    </tbody>
                </thead>
            </table>
            <button
                className="btn btn-primary"
                onClick={() => paginaAnterior()}
            >
                Anteriores
            </button>
            <button
                className="btn btn-primary"
                onClick={() => paginaSiguiente()}
            >
                Siguientes
            </button>
        </>
    )
}
