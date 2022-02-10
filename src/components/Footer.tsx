import Typography from "@mui/material/Typography";
import * as React from "react";
import Copyright from "./Copyright";
import Box from "@mui/material/Box";

export const Footer: React.FC<{ text: string }> = ({text}) => {
    return (
        <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                {text}
            </Typography>
            <Copyright/>
        </Box>
    )
}
