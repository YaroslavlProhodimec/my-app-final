import React from 'react';
import {Header} from "./header/Header";
import {useAppSelector} from "../store/store";
import {Card, Main} from "./main/Main";
import s from "./main/Main.module.css"
import {Container, Grid} from "@mui/material";

const BaseContainer = () => {
    const products = useAppSelector(state => state.products)
    return (
        <>
            <Header/>
            <Container sx={{mt:'1rem'}}>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>

                {products.map(el =>
                    <Grid item xs={6}>
                        <main>
                            <Card key={el.id} products={products}/>
                        </main>
                    </Grid>
                )}
            </Grid>
            </Container>
        </>
    );
};

export default BaseContainer;