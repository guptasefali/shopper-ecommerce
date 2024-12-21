import {ACTION_TYPE1,ACTION_TYPE2,ACTION_TYPE3} from './Type'

export const addProduct=(product)=>{
    return {
        type:ACTION_TYPE1,
        payload:product
    }
}
export const getProduct=(products)=>{
    return {
        type:ACTION_TYPE2,
        payload:products
    }
}
export const deleteProduct=(id)=>{
    return {
        type:ACTION_TYPE3,
        payload:id
    }
}