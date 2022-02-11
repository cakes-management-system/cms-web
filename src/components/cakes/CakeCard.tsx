import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Cake} from "../../model/Cake";
import {CardMedia} from "@mui/material";
import React from "react";

const CakeCard: React.FC<{ cake: Cake }> = ({cake}) => {
    return (
        <Card>
            <CardMedia
                component="img"
                src={cake.imageSrc}
                sx={{
                    height: 200
                }}
            />
            <CardContent>
                <Typography align={"center"} variant={"h6"}>
                    {cake.name}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CakeCard