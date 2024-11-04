import React, { useState, createContext, ReactNode } from "react";
import { User as FirebaseUser } from "firebase/auth"; // Import the Firebase User type

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

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
