import {
  QUESSION_SENT,
  QUESTION_NOT_SENT,
} from "../constants/asQuestionConstants";
import axios from "axios";

export const askQuestion =
  (question, url = "/api/v1/question/ask") =>
  async (dispatch) => {
    try {
      const response = await axios.post(url, question);
      if (response.data.message.indexOf("Failed") !== -1) {
        dispatch({
          type: QUESTION_NOT_SENT,
          payload: response.data,
        });
        return;
      }

      dispatch({
        type: QUESSION_SENT,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: QUESTION_NOT_SENT,
        error: true,
        payload: { error: true },
      });
    }
  };
