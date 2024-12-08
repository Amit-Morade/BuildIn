import React, { useState, createContext, ReactNode, useEffect } from "react";
import { User as FirebaseUser } from "firebase/auth"; // Import the Firebase User type
import { auth } from "../utilities/firebase";
import { useLocation, useNavigate } from "react-router-dom";

interface UserContextType {
    user: FirebaseUser | null;
    setUser: React.Dispatch<React.SetStateAction<FirebaseUser | null>>;
}

const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
});

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<FirebaseUser | null>(null);
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        try{
            const unsubscribe = auth.onAuthStateChanged(function(user) {
                if(user) {
                    setUser(user)
                }else {
                    if(location.pathname!=="/signup")
                        navigate("/")
                }
            })
    
            return () => unsubscribe()
        }catch(e) {
            console.log(e)
        }
        
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
