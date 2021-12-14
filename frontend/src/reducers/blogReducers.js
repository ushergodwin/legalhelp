import{
    ADMIN_BLOG_REQUEST,
    ADMIN_BLOG_SUCCESS,
    ADMIN_BLOG_FAIL,
    NEW_BLOG_REQUEST,
    NEW_BLOG_SUCCESS,
    NEW_BLOG_FAIL,
    NEW_BLOG_RESET,
    BLOG_DETAILS_REQUEST,
    BLOG_DETAILS_SUCCESS,
    BLOG_DETAILS_FAIL,
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAIL,
    DELETE_BLOG_RESET,
    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_FAIL,
    UPDATE_BLOG_RESET,
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

export const blogDetailsReducer = (state = {article:{}}, action) =>{
    switch (action.type) {
        case BLOG_DETAILS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case BLOG_DETAILS_SUCCESS:
            return{
                loading:false,
                article: action.payload
            }
        case BLOG_DETAILS_FAIL:
            return{
                ...state,
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

export const blogReducer = (state = {}, action) =>{
    switch (action.type) {
        case DELETE_BLOG_REQUEST:
        case UPDATE_BLOG_REQUEST:
            return{
                ...state,
                loading: true
            }

        case DELETE_BLOG_SUCCESS:
            return{
                ...state,
                loading:false,
                isRemoved: action.payload
            }

        case UPDATE_BLOG_SUCCESS:
            return{
                ...state,
                loading:false,
                isUpdated: action.payload
            }

        case DELETE_BLOG_FAIL:
        case UPDATE_BLOG_FAIL:
            return{
                ...state,
                error: action.payload
            }

        case DELETE_BLOG_RESET:
            return{
                ...state,
                isRemoved: false
            }

        case UPDATE_BLOG_RESET:
            return{
                ...state,
                isUpdated: false
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