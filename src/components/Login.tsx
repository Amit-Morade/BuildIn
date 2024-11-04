import { 
    Box, 
    CardActions, 
    Link, 
    TextField, 
} from "@mui/material";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { Paper } from "@mui/material"
import React, {useState} from "react";


export default function Login({onUserLogin: handleUserLogin}: {onUserLogin: (email: string, password: string) => void}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Paper
            sx={{
                width: "400px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}
            elevation={3}
        >
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    boxSizing: "border-box",
                    fontSize: "24px",
                    gap: "16px",
                    padding: "0px 0px 24px 0px"
                }}
                onSubmit={(e) => {
                    e.preventDefault()
                    handleUserLogin(email, password)
                }}
            >
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    type="Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <Button 
                    variant="contained"
                    type="submit" 
                    size="large"
                    sx={{
                        textTransform: "none",
                        fontSize: "24px",
                        fontWeight: "bold"
                    }}
                >Log In</Button>
                <Link style={{
                    textTransform: "none",
                    textDecoration: "none",
                    fontSize: "16px",
                    textAlign: "center",
                    fontWeight: "bold",
                    cursor: "pointer"
                }}>Forgot password?</Link>
            </form>
            <Divider></Divider>
            <CardActions
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <Button
                    variant="contained" 
                    size="large"
                    color="success"
                    sx={{
                        textTransform: "none",
                        fontSize: "24px",
                        fontWeight: "bold",
                        margin: "24px 0px",
                        width: "fitContent"
                    }}
                >Create new account</Button>
            </CardActions>
            
        </Paper>
    )
}