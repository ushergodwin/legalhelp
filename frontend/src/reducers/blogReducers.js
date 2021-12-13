import{
    ADMIN_BLOG_REQUEST,
    ADMIN_BLOG_SUCCESS,
    ADMIN_BLOG_FAIL,
    NEW_BLOG_REQUEST,
    NEW_BLOG_SUCCESS,
    NEW_BLOG_FAIL,
    NEW_BLOG_RESET,
    CLEAR_ERRORS
} from '../constants/blogConstants'

export const blogsReducer =(state ={articles:[]}, action) =>{
    switch(action.type) {
        case ADMIN_BLOG_REQUEST:
            return{
                loading: true,
                articles:[]
            }
    

        case ADMIN_BLOG_SUCCESS:
            return{
                loading: false,
                articles:action.payload
            }


        case ADMIN_BLOG_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }

        default:
            return state;
    }
}

export const newBlogReducer = (state = {article:{}}, action) =>{
    switch (action.type) {
        case NEW_BLOG_REQUEST:
            return{
                ...state,
                loading: true
            }
        case NEW_BLOG_SUCCESS:
            return{
                loading:false,
                success: action.payload.success,
                article: action.payload.article
            }
        case NEW_BLOG_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case NEW_BLOG_RESET:
            return{
                ...state,
                success: false
            }
         case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null
                }
    
        default:
                return state;
    }
}