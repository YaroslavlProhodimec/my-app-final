import {ProductsType} from "./app-reducer";
import {v1} from "uuid";


const initialState: ProductsType[] = []
export const basketReducer = (state: ProductsType[] = initialState, action: ActionsType): ProductsType[] => {
    switch (action.type) {
        case 'ADD-BASKET' :
            return [...state,{id:v1(),name:action.name,price:action.price,quantity:action.quantity}]
        default:
            return [ ...state]
    }
}



export const getPropductsAC = (name:string,price:number,quantity:number) => ({type: 'ADD-BASKET', name,price,quantity} as const)

export type getPropductsACType = ReturnType<typeof getPropductsAC>

type ActionsType =
    | getPropductsACType
