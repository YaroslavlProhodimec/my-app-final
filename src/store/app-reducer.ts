import {v1} from "uuid";
import nike from '../image/nikeBlack.png';

const initialState: ProductsType[] = [
    {id:v1(),image:nike,name:'Balmain',price:3000,quantity:0},
    {id:v1(),image:nike,name:'Balmain',price:3000,quantity:0},
    {id:v1(),image:nike,name:'Balmain',price:3000,quantity:0},
    {id:v1(),image:nike,name:'Balmain',price:3000,quantity:0},

]
export const productsReducer = (state: ProductsType[] = initialState, action: ActionsType): ProductsType[] => {
    switch (action.type) {
        case 'APP/SET-PRODUCTS' :
            return state.map(el=>({...el}))
        default:
            return [ ...state]
    }
}

export type ProductsType = {
    id: string
    image?:any
    name:string
    price:number
    quantity:number
}

export const getPropductsAC = (products:ProductsType) => ({type: 'APP/SET-PRODUCTS', products} as const)

export type getPropductsACType = ReturnType<typeof getPropductsAC>

type ActionsType =
    | getPropductsACType
