import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Typography from "@mui/material/Typography";
import * as React from "react";

export const CsmAppBar: React.FC<{ name: string }> = ({name}) => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <CameraIcon sx={{mr: 2}}/>
                <Typography variant="h6" color="inherit" noWrap>
                    {name}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
