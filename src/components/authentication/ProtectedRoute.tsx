import { ReactNode, useContext } from "react"
import UserContext from "../UserProvider"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute({children}: {children: ReactNode}) {
    const { user } = useContext(UserContext)

    if(!user) {
        return <Navigate to="/"/>
    }

    return <>
        {children}
    </>
}