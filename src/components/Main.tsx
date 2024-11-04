import React, { useState, useEffect, useContext } from "react"
import Header from "./Header"
import LoginPage from "./LoginPage"
import { auth } from "../utilities/firebase"
import UserContext from "./UserProvider"
import { createBrowserRouter, Route, RouterProvider, Routes, useNavigate } from "react-router-dom"
import Home from "./HomePage"
import Profile from "./ProfilePage"

export default function Main() {
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()

    /*
        This code has been moved to header for more clarity. This can be removed in future
    */
    // useEffect(() => {
    //     try{
    //         const subscriber = auth.onAuthStateChanged(function(user) {
    //             if(user) {
    //                 setUser(user)
    //                 navigate("/home")
    //             }
    //         })
    
    //         return () => subscriber()
    //     }catch(e) {
    //         console.log(e)
    //     }
        
    // }, [])

    return (
        <div style={{height: "100%", display: "flex", flexDirection: "column" }}>
            <Header />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    )
}