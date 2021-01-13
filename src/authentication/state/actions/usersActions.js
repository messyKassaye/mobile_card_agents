import {
    ME, FETCH_USERS
} from "../authConstants/authConstants";
import axios from 'axios'
import {API_AUTH_URL, API_URL} from "../../../constants/constants";

const PATH ='users'
export const me = ()=>dispatch=>{
    axios.get(`${API_AUTH_URL}me`)
        .then(response => response.data)
        .then(res =>dispatch({
            type:ME,
            payload: res.data
        }))
}

export const showUsers =(id)=>dispatch=>{
    axios.get(`${API_URL}${PATH}/${id}`)
    .then(response=>response.data)
    .then(res=>dispatch({
        type:FETCH_USERS,
        payload:res.data
    }))
}


