import React, { useState, useEffect, useContext } from "react"
import Header from "./Header"
import LoginPage from "./authentication/LoginPage"
import { auth } from "../utilities/firebase"
import UserContext from "./UserProvider"
import { createBrowserRouter, Route, RouterProvider, Routes, useNavigate } from "react-router-dom"
import Home from "./HomePage"
import Profile from "./ProfilePage"
import ProtectedRoute from "./authentication/ProtectedRoute"
import SignUpPage from "./authentication/SignUpPage"
import Onboarding from "./Onboarding"

export default function Main() {
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()

    return (
        <div style={{height: "100%", display: "flex", flexDirection: "column", paddingBottom: "50px", boxSizing: "border-box" }}>
            <Header />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            </Routes>
        </div>
    )
}