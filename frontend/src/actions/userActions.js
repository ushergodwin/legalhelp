import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS
} from '../constants/userConstants'

import axios from 'axios'

//login
export const login = (email,password)=>async (dispatch) =>{
    try{
        dispatch({type: LOGIN_REQUEST})

        
        const config ={
            headers: {
                'Content-Type':'application/json'
            }
        }

        //fetch the user email and password from backend
        const {data} = await axios.post('/api/v1/login' , {email,password}, config)

        //if user info has been fecthed, dispatch and store user info in state
        dispatch({
            type:LOGIN_SUCCESS,
            payload:data.user
        })

    }//incase user details are not fetched, what error to execute
    catch (error) { 
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data.message
        })
    }
}

//clear errors

export const clearErrors = () => async (dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}