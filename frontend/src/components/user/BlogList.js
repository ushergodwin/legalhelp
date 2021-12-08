import React, {Fragment, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {MDBDataTable} from 'mdbreact'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import SideBar from '../user/Sidebar'

import {useAlert} from 'react-alert'
import {useDispatch, useSelector} from "react-redux";

import {getBlogs,deleteBlog, clearErrors} from "../../actions/blogActions"

// import { DELETE_BLOG_RESET } from '../../'

const BlogList = ({history}) => {

    const alert = useAlert()
    const dispatch = useDispatch()

    // const {error: deleteError, isRemoved } = useSelector((state) => state.product)
    const {loading, error, articles} = useSelector(state => state.blog)

    useEffect(()=>{
        dispatch(getBlogs())

        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }

        // if(deleteError){
        //     alert.error(deleteError)
        //     dispatch(clearErrors())
        // }

        // if(isRemoved){
        //     alert.success('Article Deleted Successfully')
        //     history.push('/admin/products')
        //     dispatch({ type: DELETE_BLOG_RESET})
        // }
    },[dispatch, alert, error,history])

    const setBlogs = () =>{
        const data ={
            columns: [ 
                {
                    label: 'Blog ID',
                    field: 'id',
                    sort: 'desc',
                },
                {
                    label: 'Title',
                    field: 'title',
                    sort: 'desc',
                },
                {
                    label: 'Slung',
                    field: 'slung',
                    sort: 'desc',
                },
                {
                    label: 'Author',
                    field: 'author',
                    sort: 'desc',
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    
                },

            ],
            rows: []
        }

        articles.forEach(article => {
            data.rows.push({
                id: article._id,
                title:article.title,
                slung: article.slung,
                author: article.author,
                actions: 
                <Fragment>
                    <Link className="btn btn-primary py-1 px-2" to={`/blog/${article._id}`}>
                        <i className="fa fa-pencil"></i>
                        </Link>
                        {/* <button className="btn btn-danger py-1 px-2 ml-2" onClick={()=>deleteBlogHandler(article._id)}> */}
                        <i className="fa fa-trash"></i>
                        {/* </button> */}
               </Fragment>       
            })
        })

        return data
    }


    // const deleteBlogHandler = (id)=>{
    //     dispatch(deleteBlog(id))
    // }

    return (
        <Fragment>
            <MetaData title={'All Articles'}/>
            <div className="row">
                <div className="col-12 col-md-2">
                    <SideBar/>
                </div>  

                <div className='col-12 col-md-10'>
                    <Fragment>
                        <h1 className="my-5">All Articles</h1>

                        {loading ? <Loader/> :(
                                <MDBDataTable
                                data={setBlogs()}
                                className="px-3"
                                bordered
                                striped
                            />
                        )}
                    </Fragment>

                </div>
            </div>
            
        </Fragment>
    )
}

export default BlogList
