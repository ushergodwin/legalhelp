import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS
} from '../constants/userConstants'

//parameters inside the the functional component
//state represents what the initial value of the user will be when added to redux store
export const userReducer = (state={user: {} }, action)=>{
    switch(action.type){

        case LOGIN_REQUEST:
            return{
                loading:true,
                isUserAuthenticated:false
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                isUserAuthenticated:true,
                user:action.payload
            }
        case LOGIN_FAIL:
            return{
                ...state,
                loading:false,
                isUserAuthenticated:false,
                user:null,
                error:action.payload
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }

            default: 
            return state
    }
}