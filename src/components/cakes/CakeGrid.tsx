import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CakeCard from "./CakeCard";
import * as React from "react";
import {Cake} from "../../model/Cake";
import {useEffect, useState} from "react";
import axios from "axios";
import {PaginatedResponse} from "../../model/PaginatedResponse";
import LoaderProgress from "../general/LoaderProgress";
import ErrorRender from "../general/ErrorRender";
import {CAKES_URL} from "../../api/CakesApi";
import {SpringStandardErrorResponse} from "../../model/SpringStandardErrorResponse";

const CakeGrid: React.FC = () => {
    const [cakes, setCakes] = useState<Cake[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<SpringStandardErrorResponse>()

    useEffect(() => {
        setIsLoading(true)
        axios.get<PaginatedResponse<Cake>>(CAKES_URL)
            .then(res => setCakes(res.data.content))
            .catch(res => setError(res.response.data))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <LoaderProgress isLoading={isLoading}>
            <ErrorRender error={error}>
                <Container maxWidth={"md"} sx={{py: 4}}>
                    <Grid container spacing={4}>
                        {
                            cakes.map((cake) => (
                                <Grid item key={cake.id} xs={12} sm={6} md={4}>
                                    <CakeCard cake={cake}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </ErrorRender>
        </LoaderProgress>
    );
};

export default CakeGrid