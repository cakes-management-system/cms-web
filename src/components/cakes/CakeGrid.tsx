import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CakeCard from "./CakeCard";
import * as React from "react";
import {Cake} from "../../model/Cake";

const CakeGrid: React.FC<{ cakes: Cake[] }> = ({cakes}) => {
    return (
        <Container maxWidth={"md"} sx={{py: 4}}>
            <Grid container spacing={4}>
                {cakes.map((cake) => (
                    <Grid item key={cake.id} xs={12} sm={6} md={4}>
                        <CakeCard cake={cake}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CakeGrid