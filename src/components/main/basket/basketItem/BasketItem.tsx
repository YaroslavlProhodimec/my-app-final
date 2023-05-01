import React from 'react';
import {ProductsType} from "../../../../store/app-reducer";
import {Close} from "@mui/icons-material";
import {ListItem} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

type PropsBasketItemType = {
    name: string
    price: number
    quantity: number
}
const BasketItem = ({name, price, quantity}: PropsBasketItemType) => {
    return (
        <ListItem>
            <Typography
            variant={'body1'}
            >
            {name}{price}руб х {quantity}
            </Typography>
            <IconButton>
                <Close/>
            </IconButton>

        </ListItem>
    );
};

export default BasketItem;