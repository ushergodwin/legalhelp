import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {userReducer} from './reducers/userReducers'

import {blogsReducer,blogDetailsReducer,newBlogReducer,blogReducer} from './reducers/blogReducers'



//rducers for every resource in the backend will be combined here
const reducer = combineReducers({

    user:userReducer,
    newBlog:newBlogReducer,
    blog:blogsReducer,
    blogDetails:blogDetailsReducer,
    blogReducer:blogReducer

})

//all information we need to be store in the state
let initialState = {}

//all middleware to use
const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store