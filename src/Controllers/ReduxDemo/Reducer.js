import { ACTION_TYPE1, ACTION_TYPE2, ACTION_TYPE3 } from './Type'

const initialState = {
    products: []
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE1:
            const product = action.payload;
            return {
                ...state,
                products: [...state.products,
                {
                    id: Math.random(),
                    p_brand: product.p_brand,
                    p_variant: product.p_variant,
                    p_desc: product.p_desc,
                    p_sprice: product.p_sprice,
                    p_qty: product.p_qty,
                    p_category: product.p_category,
                    p_simg: product.p_simg,
                    p_size: product.p_size
                }
                ]
            }

        case ACTION_TYPE2: return {
            ...state,
            products: action.payload
        }
        case ACTION_TYPE3: return {
            ...state,
            products: state.products.filter(product => product.id !== action.payload)
        }
        default: return state
    }
}