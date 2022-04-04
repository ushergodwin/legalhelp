import {QUESSION_SENT, QUESTION_NOT_SENT, SEND_QUESTION, CLEAR_SUCCESS} from '../constants/asQuestionConstants'
import { CLEAR_ERRORS } from '../constants/blogConstants'

export const askQuenstionReducer = (state={}, action) => {

    switch (action.type) {
        case SEND_QUESTION:
            return {
                loading: true
            }
        
        case QUESSION_SENT:
            return {...action.payload, loading: false}

        case QUESTION_NOT_SENT:
            return {...state, loading: false}

        case CLEAR_ERRORS:
            return {...state, error: null, loading: false}

        case CLEAR_SUCCESS:
            return {success: false}
        default:
            return state
    }
}