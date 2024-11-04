import { useState } from "react"
import Login from "./Login"
import { userLoginIn } from "../utilities/firebase"

export default function LoginPage() {
    const [user, setUser] = useState(null)

    const handleUserLogin = (email: string, password: string) => {
        userLoginIn(email, password)
    }

    return (
        <div style={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "10%",
            margin: "0px auto"
        }}
        >
            <Login onUserLogin={handleUserLogin}/>   
        </div>
    )
}