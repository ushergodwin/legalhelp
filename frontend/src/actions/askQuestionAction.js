import {QUESSION_SENT, QUESTION_NOT_SENT, SEND_QUESTION} from '../constants/asQuestionConstants'
import axios from 'axios'

export const askQuestion = (question) => async (dispatch) => {
    try {
        dispatch({type: SEND_QUESTION})
        const { data } = await axios.post('/api/v1/question/ask', question)
        console.log(data);
        dispatch({
            type: QUESSION_SENT,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: QUESTION_NOT_SENT,
            error: true,
            payload: {error: true}
        })
    }
}