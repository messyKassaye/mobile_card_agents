import { FETCH_CARD_PRICE, STORE_CARD_PRICE } from "../AgentConstant";

const initialState ={
    loading:true,
    card_price:[],
    response:{
        status:false,
        message:''
    }
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_CARD_PRICE:
            return{
                ...state,
                card_price:action.payload
            }

            case STORE_CARD_PRICE:
                return {
                    ...state,
                    response:action.payload
                }

            default:
                return state
    }
}