import * as React from "react";
import Typography from "@mui/material/Typography";
import {SpringStandardErrorResponse} from "../../model/SpringStandardErrorResponse";

const ErrorRender: React.FC<{ error: SpringStandardErrorResponse | undefined, children: React.ReactNode }> =
    ({
         error,
         children
     }) => {
        const hasError = error !== undefined
        return (
            <>
                {hasError && <Typography variant={"h5"}>{error?.message}</Typography>}
                {!hasError && children}
            </>
        )
    };

export default ErrorRender