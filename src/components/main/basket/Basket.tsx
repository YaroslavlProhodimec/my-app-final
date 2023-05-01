import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import BasketItem from "./basketItem/BasketItem";
import {ProductsType} from "../../../store/app-reducer";

type BasketPropsType = {
    open:boolean
    closeCart:()=>void
    basket:ProductsType[]
}
const Basket = ({open,closeCart,basket}:BasketPropsType) => {
    return (
        <>
        <Drawer
        anchor={"right"}
        open={open}
        onClose={closeCart}
        >
            <List sx={{width:'400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary={'Корзина'}/>
                </ListItem>
                <Divider/>
                {
                    !basket.length ?
                        <ListItem>Корзина пуста!</ListItem>
                        :  basket.map(el=>
                        <BasketItem key={el.id} {...el}/>
                        )
                }
            </List>
        </Drawer>
        </>
    );
};

export default Basket;