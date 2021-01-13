import { FETCH_BANKS } from "../../../commons/state/commonConstants";

const initialState = {
    loading:true,
    banks:{}
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_BANKS:
            return{
                ...state,
                loading:false,
                banks:action.payload
            }

            default:
                return state
    }
}