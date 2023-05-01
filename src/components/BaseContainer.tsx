import React, {useState} from 'react';
import {Header} from "./header/Header";
import {useAppSelector} from "../store/store";
import {Container, Grid} from "@mui/material";
import {Main} from "./main/Main";
import s from "./main/Main.module.css";
import Basket from "./main/basket/Basket";
const BaseContainer = () => {
    const products = useAppSelector(state => state.products)
    const basket = useAppSelector(state => state.basket)

    const [open, setOpen] = useState(false);
    return (
        <>
            <Header openBasket={()=>setOpen(true)}   />
            <Container sx={{mt:'1rem'}}>

                <main className={s.mainContainer}>
                {products.map(el =>


                            <Main key={el.id} {...el}/>


                )}
                </main>
            </Container>
            <Basket  basket={basket} open={open} closeCart={()=>setOpen(false)}/>
        </>
    );
};

export default BaseContainer;