import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { userSignOut, auth } from '../utilities/firebase';
import { useContext, useEffect } from 'react';
import UserContext from './UserProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';


export default function Header() {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const location = useLocation();


    return (
        <Box>
            <AppBar position="static" sx={{background: "#2a2d3d"}}>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <span onClick={() => navigate("/home")} style={{cursor: "pointer"}}>
                        BuildIn
                    </span>
                </Typography>
                
                {user ? (
                    <>
                        <Button color="inherit" onClick={async () => {
                            const resp = await userSignOut()
                            if(resp) {
                                setUser(null)
                                navigate("/")
                            }
                        }}>Logout</Button>
                        <Avatar 
                            sx={{cursor: "pointer"}}
                            alt="Remy Sharp" 
                            src="/static/images/avatar/1.jpg" 
                            onClick={(e => {
                                navigate("/profile")
                            })}
                        />
                    </>
                    

                    ) : (
                        <Button color="inherit" onClick={() => {
                            if(!user){
                                navigate("/")
                            }
                        }}>Login</Button>
                    )
                }
                </Toolbar>
            </AppBar>
        </Box>
    )
}