import { PRINT_CARDS } from "../AgentConstant";
const initialState = {
    response:{
        status:false,
        cards:[],
        message:''
    }
}

export default function(state=initialState,action){
    switch(action.type){
        case PRINT_CARDS:
            return {
                ...state,
                response:action.payload
            }

            default:
                return state
    }
}