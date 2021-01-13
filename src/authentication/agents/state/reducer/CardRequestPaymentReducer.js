import { SEND_CARD_REQUEST_PAYMENT } from "../AgentConstant";

const initialState={
    response:{
        status:false,
        message:''
    }
}

export default function(state=initialState,action){
    switch(action.type){
        case SEND_CARD_REQUEST_PAYMENT:
            return{
                ...state,
                response:action.payload
            }

            default:
                return state
    }
}