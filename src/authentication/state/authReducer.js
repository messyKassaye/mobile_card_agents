import {combineReducers} from "redux";
import AgentReducer from "../agents/state/AgentReducer";
import commonReducer from '../commons/state/commonReducers'
export default combineReducers({
  commonReducer:commonReducer,
  agentReducer:AgentReducer
})
