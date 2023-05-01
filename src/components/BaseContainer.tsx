import React from 'react';
import {Header} from "./header/Header";
import {useAppSelector} from "../store/store";
import {Container, Grid} from "@mui/material";
import {CardItem} from "./main/card/Card";
import {Main} from "./main/Main";

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
                            <Main key={el.id} {...el}/>
                        </main>
                    </Grid>
                )}
            </Grid>
            </Container>
        </>
    );
};

export default BaseContainer;