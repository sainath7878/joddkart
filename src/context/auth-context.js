import { createContext, useContext, useReducer } from "react";
import { initialAuthState, authReducer } from "../reducer/authReducer"

const AuthContext = createContext();


function AuthProvider({ children }) {

    const [authState, authDispatch] = useReducer(authReducer, initialAuthState)
    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </ AuthContext.Provider >
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };