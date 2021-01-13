import { MY_CARD_REQUEST, SEND_CARD_REQUEST } from "../AgentConstant";

const initialState = {
    response:{
        status:false,
        message:''
    },
    cardRequests:{},
    loading:true
}

export default function(state=initialState,action){
    switch(action.type){
        case SEND_CARD_REQUEST:
            return {
                ...state,
                response:action.payload
            }

            case MY_CARD_REQUEST:
                return {
                    ...state,
                    loading:false,
                    cardRequests:action.payload
                }

            default:
                return state
    }
}