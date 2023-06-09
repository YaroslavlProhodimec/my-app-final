import {ProductsType} from "./app-reducer";
import {v1} from "uuid";
import adidasGray from "../image/adidasGray.png";


const initialState: ProductsType[]  = [

]
console.log(initialState)
export const basketReducer = (state: ProductsType[] = initialState, action: ActionsType): any => {
    switch (action.type) {
        case 'ADD-BASKET' :
             const onBasketTrue = state.find(el => el.id === action.id)
            console.log(action,state)
            if(onBasketTrue) {
                console.log(onBasketTrue, 'bas')
                return state.map(el => el.id === action.id ?
                    {...el, quantity:el.quantity + action.quantity} : el)
            }
            else {
                return    [...state,{id:action.id,name:action.name,price:action.price,quantity:1}]
            }
        case 'REMOVE-BASKET' :
            return state.filter(el => el.id !== action.id)
        default:
            return [ ...state]
    }
}



export const addPropductsAC = (id:string,name:string,price:number,quantity:number) => ({type: 'ADD-BASKET',id,name,price,quantity} as const)
export const removePropductsAC = (id:string) => ({type: 'REMOVE-BASKET', id} as const)

export type addPropductsACType = ReturnType<typeof addPropductsAC>
export type removePropductsACType = ReturnType<typeof removePropductsAC>

type ActionsType =
    | addPropductsACType
    |removePropductsACType