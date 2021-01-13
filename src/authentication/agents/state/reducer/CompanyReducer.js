import { FETCH_COMPANY } from "../AgentConstant";

const initialState ={
    company:{},
    loading:true
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_COMPANY:
            return {
                ...state,
                company:action.payload,
                loading:false
            }

            default:
                return state
    }
}