import {MY_CARDS} from '../AgentConstant'
const initialState = {
    cards:{},
    loading:true
}

export default function(state=initialState,action){
    switch(action.type){
        case MY_CARDS:
            return {
                ...state,
                cards:action.payload,
                loading:false
            }

            default:
                return state
    }
}