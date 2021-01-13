import { FETCH_BANK_ACCOUNTS } from "../AgentConstant";

const initialState={
    bankAccounts:{},
    loading:true
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_BANK_ACCOUNTS:
            return {
                ...state,
                bankAccounts:action.payload,
                loading:false
            }

            default:
                return state
    }
}