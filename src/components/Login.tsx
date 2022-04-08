import { useEffect, useReducer } from "react"

const initialState = {
    validando: true,
    token: null,
    username: "",
    nombre: "  "
}
interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string,
}
type LoginPayload = {
    username: string, nombre: string
}
type AuthAction = {
    type: "logout"
} | { type: 'login', payload: LoginPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }
        case 'login':
            return {
                validando: false,
                token: 'abc',
                nombre: action.payload.nombre,
                username: action.payload.username
            }

        default:
            return state;
    }

}
export const Login = () => {


    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: "logout" })
        }, 3000);
    }, [])

    if (validando) {
        return <>
            <div>Login</div>
            <div className="alert alert-danger">validando</div>
        </>
    }

    const logout = () => {
        dispatch({
            type: "logout"
        })
    }
    const login = () => {
        dispatch({
            type: "login",
            payload: {
                username: "lucas",
                nombre: "prro"
            }
        })
    }

    return (
        <>
            <div>Login</div>
            {token ?
                <div className="alert alert-success">autenticado {nombre}</div> : <div className="alert alert-error">NOOO autenticado </div>
            }
            {token ?
                <button className="btn btn-primary" onClick={() => logout()}>
                    logout
                </button> : <button className="btn btn-primary" onClick={() => login()}>
                    login
                </button>
            }


        </>
    )
}
