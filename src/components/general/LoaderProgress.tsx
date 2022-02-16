import * as React from "react";
import {CircularProgress} from "@mui/material";

const LoaderProgress: React.FC<{ isLoading: boolean, children: React.ReactNode }> = ({isLoading, children}) => {
    return (
        <>
            {isLoading && <CircularProgress/>}
            {!isLoading && children}
        </>
    )
};

export default LoaderProgress