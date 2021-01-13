import {FETCH_FOLLOW_REQUEST,SHOW_ACCEPTED_FOllOW,UPDATE_FOLLOW} from '../commonConstants'
import axios from 'axios'
import { API_URL } from '../../../../constants/constants'

const PATH = 'partner_agent'

export const showFollows = (status)=>dispatch=>{
    axios.get(`${API_URL}${PATH}/${status}`)
    .then(response=>response.data)
    .then(res=>dispatch({
        type:FETCH_FOLLOW_REQUEST,
        payload:res.data
    }))
}

export const showAcceptedFollows = (status)=>dispatch=>{
    axios.get(`${API_URL}${PATH}/${status}`)
    .then(response=>response.data)
    .then(res=>dispatch({
        type:SHOW_ACCEPTED_FOllOW,
        payload:res.data
    }))
}

export const  updateFollows = (id,data)=>dispatch=>{
    axios.put(`${API_URL}${PATH}/${id}`,data)
    .then(response=>response.data)
    .then(res=>dispatch({
        type:UPDATE_FOLLOW,
        payload:res
    }))
}