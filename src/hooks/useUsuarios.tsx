import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResListado, User } from "../interfaces/reqRes"

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<User[]>([])
    const paginaRef = useRef(1)
    useEffect(() => {
        cargarUsuarios()
    }, [])
    useEffect(() => {
        console.log('paginaRef.cur :>> ', paginaRef.current);
    }, [paginaRef])

    const cargarUsuarios = async () => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })
        console.log('resp.data :>> ', resp.data);
        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data)
        }
        else {
            paginaRef.current--;
            alert("No hay más registros")
        }
        console.log('paginaRef.current after call :>> ', paginaRef.current);
    }
    const paginaSiguiente = () => {
        paginaRef.current++
        cargarUsuarios();
    }
    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current--;
            cargarUsuarios();
        }
    }
    return { usuarios, paginaSiguiente, paginaAnterior }
}
