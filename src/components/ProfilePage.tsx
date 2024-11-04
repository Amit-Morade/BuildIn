import { Divider, Paper, Typography } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';
import React, { useContext } from "react";
import UserContext from "./UserProvider";

export default function Profile() {
    const { user } = useContext(UserContext)

    const joinDate = user?.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleString('default', { month: 'long', year: 'numeric' })
    : "N/A";

    return (
        <div style={{height: "100%"}}>
            <Paper 
                sx={{
                    width: "400px",
                    height: "500px",
                    margin: "30px auto",
                    padding: "5px 10px"
                }}
                elevation={3}
            >
                <div style={{paddingBottom: "20px"}}>
                    <DataDisplay>
                        <span>Amit</span>
                    </DataDisplay>
                    <span style={{fontWeight: "bold"}}>Joined {joinDate}</span>
                </div>
               
                <Divider />
            </Paper>
        </div>
        
    )
}

function DataDisplay({children}: {children: React.ReactElement}) {
    return <p style={{
        display: "flex",
        gap: "10px",
    }}>
        <Typography sx={{
            fontSize: "26px",
            fontWeight: "bold"
        }}>
            {children}  
        </Typography>
    </p>
}