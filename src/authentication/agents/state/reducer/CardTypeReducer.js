import {FETCH_CARD_TYPE} from '../AgentConstant'

const initialState = {
    cardType:[],
    loading:true
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_CARD_TYPE:
        return{
            ...state,
            cardType:action.payload,
            loading:false
        }

        default:
            return state
    }
}