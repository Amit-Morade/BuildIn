import { useContext } from "react"
import UserContext from "./UserProvider"

export default function Home() {
    const { user } = useContext(UserContext)

    return <div style={{
        height: "100%"
    }}>
        Hello  {user?.email}  
    </div>
}