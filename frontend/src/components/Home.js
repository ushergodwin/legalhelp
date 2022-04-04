import React, {Fragment, useEffect} from 'react';
import { Link} from 'react-router-dom'
import MetaData from './layout/MetaData'
import Impact from './Impact';
import { askQuestion } from '../actions/askQuestionAction';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import Loader from './layout/Loader'

export default function Home() {
    const alert = useAlert()
    const dispatch = useDispatch()
    const {loading, success, error } = useSelector((state) => state.askQuenstion)
    useEffect(() => {
        if(success)
        {
          document.getElementById('close-modal').click()
          alert.success("Your question has been submitted successfully. We shall contact you shortly.")
          document.getElementById('askQuestionForm').reset()

        }
        if(error)
        {
            document.getElementById('close-modal').click()
            alert.error("Oops, question not submitted!")
            dispatch({type: "CLEAR_ERRORS"})
        }
    }, [dispatch, success, error, alert])

    const handleSendQuestion = () => {
        const formdata = new FormData(document.getElementById('askQuestionForm'))

        let newQuestion = {}
        formdata.forEach((value, key) => newQuestion[key] = value)
        let errors = 0
        const emailError = document.getElementById('email-error')
        const phoneError = document.getElementById('phone-error')
        const nameError = document.getElementById('name-error')
        const subjectError = document.getElementById('subject-error')

        const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailReg.test(newQuestion.email))
        {
            alert(newQuestion.email)
            errors++
            emailError.innerHTML = 'Invalid email address'
        }
        const phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        if(!phoneReg.test(newQuestion.phone))
        {
            errors++
            phoneError.innerHTML = 'Invalid phone number'
            alert(newQuestion.phone)
        }
        const nameReg = /^[a-zA-Z\s]*$/
        if(!nameReg.test(newQuestion.name))
        {
            errors++
            nameError.innerHTML = 'Invalid full name'
            alert(newQuestion.name)
        }
        if(!nameReg.test(newQuestion.subject))
        {
            errors++
            subjectError.innerHTML = 'Invalid subject'
            alert(newQuestion.subject)
        }
        
        if(errors == 0)
        {
            emailError.innerHTML = ''; phoneError.innerHTML = '';
            nameError.innerHTML = ''; subjectError.innerHTML = '';
            newQuestion['send_to'] = 'godwintumuhimbise96@gmail.com,legalhelponline@gmail.com'
            document.getElementById('close-modal').click()
            dispatch(askQuestion(newQuestion))
            dispatch({type: "CLEAR_SUCCESS"})
            
        }
        
    }
    const handleCharacterCount = event => {
        const question = event.target.value
        const min_char = 100
        const char_len = question.length
        const sendbtn = document.getElementById('send-btn')
        sendbtn.setAttribute('disabled', true)
        let char_count = min_char - char_len
        if(char_count <= 0)
        {
            char_count = 0
            sendbtn.removeAttribute('disabled')
        }
        document.getElementById('min-char').innerHTML = char_count
    }
    return (
        <Fragment>
            <MetaData title={'Free Legal Advice Online'}/>
            <section className="card w-100">
                <img src={'/imgs/banner2.png'}
                className="card-img img-reponsive bunner-img" alt="legal help online"
                 height={`380px`}/>
                <div className="card-img-overlay mt-lg-5 c-overlay">
                    <h2 className="text-center text-light">Know Your Rights </h2>
                    <h4 className="text-center text-light">Get Free Legal Advice Online</h4>
                    <div className="d-flex justify-content-center">
                        <a href="javascript:void(0)" 
                            className="btn btn-success btn-md ml-5"
                            id="free_legal_advice">Free Legal Advice
                        </a> &nbsp;&nbsp;
                        <a href="#myModal" 
                            className="btn btn-light btn-md"
                            id="ask_question" data-bs-toggle="modal"> Ask Question?
                        </a>
                    </div>
                </div>
            </section>
            <section className='container'>
            {/* Modal HTML */}
            {loading ? 
            (
                <Loader/>
            )
            : 
            (
                <div id="myModal" class="modal fade" tabindex="-1">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div class="modal-header">
                                <h5 className="modal-title">Ask Question </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <p>Please provide the required information below to proceed</p>
                                <form id='askQuestionForm'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='mb-3'>
                                                <label htmlFor='email' className='w-100'> Email
                                                    <input type={`email`} name="email" className='form-control'/>
                                                    <span id='email-error' className='text-danger'></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='mb-3'>
                                                <label htmlFor='phone' className='w-100'> Phone Number
                                                    <input type={`number`} name="phone" className='form-control'/>
                                                    <span id='phone-error' className='text-danger'></span>
                                                </label>
                                            </div>
                                        </div>  
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='mb-3'>
                                                <label htmlFor='subject' className='w-100'> Name
                                                    <input type={`text`} name="name" className='form-control'/>
                                                    <span id='name-error' className='text-danger'></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='mb-3'>
                                                <label htmlFor='subject' className='w-100'> Subject
                                                    <input type={`text`} name="subject" className='form-control'/>
                                                    <span id='subject-error' className='text-danger'></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <label htmlFor='question' className='w-100'> Question
                                            <textarea name="body" className='form-control' 
                                            rows={`5`} onKeyUp={(e) => handleCharacterCount(e)}></textarea>
                                        </label>
                                        <div className='d-flex justify-content-end'>
                                            Minimun Characters: <span id="min-char">100</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" 
                                data-bs-dismiss="modal" id='close-modal'>Cancel</button>
                                <button type="button" className="btn btn-danger" onClick={()=> document.getElementById('askQuestionForm').reset()} >Clear Form</button>
                                <button type="button" className="btn btn-primary"
                                id='send-btn' onClick={ () => handleSendQuestion()} >Submit Question</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="row mt-2">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-center mt-md-5">
                            <h2 className="text-dark font-weight-bold">Legal Services</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 mt-3">
                              <div className="card shadow h-100 zoom nav-bg">
                                    <img src={'/imgs/free-legal-help.jpg'} className="card-img-top service-img" height="110"/>
                                    <div className="card-footer">
                                        <h5>
                                            <Link to="#"
                                            className="deco-none stretched-link text-light">
                                                Free Legal Advice
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom nav-bg">
                                    <img src={'/imgs/criminal-law.jpg'} className="card-img-top service-img"
                                    height="110"/>
                                    <div className="card-footer">
                                        <h5>
                                            <Link to="#"
                                            className="deco-none stretched-link text-light">
                                                Criminal Law
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom nav-bg">
                                    <img src={'/imgs/civil-litigation-1.jpg'} className="card-img-top service-img"
                                    height="110"/>
                                    <div className="card-footer">
                                        <h5>
                                            <Link to="#"
                                            className="deco-none stretched-link text-light">
                                                Civil Litigation
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom nav-bg">
                                    <img src={'/imgs/commercial-law.jpeg'} className="card-img-top service-img" 
                                    height="110"/>
                                    <div className="card-footer">
                                        <h5>
                                            <Link to="#"
                                            className="deco-none stretched-link text-light">
                                               Commercial Law 
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom nav-bg">
                                    <img src={'/imgs/property.jpg'} className="card-img-top service-img" 
                                    height="100"/>
                                    <div className="card-footer">
                                        <h5>
                                            <Link to="#"
                                            className="deco-none stretched-link text-light">
                                                Land Matters/ Property
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom nav-bg">
                                    <img src={'/imgs/divorce-law.jpg'} className="card-img-top service-img" 
                                    height="100"/>
                                    <div className="card-footer">
                                        <h5>
                                            <Link to="#"
                                            className="deco-none stretched-link text-light">
                                                Marriage / Divorce
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom nav-bg">
                                    <img src={'/imgs/employment.jpg'} className="card-img-top service-img" 
                                    height="100"/>
                                    <div className="card-footer">
                                        <h5>
                                            <Link to="#"
                                            className="deco-none stretched-link text-light">
                                                Employment / Labour Law
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom nav-bg">
                                    <img src={'/imgs/cyber-crime.jpg'} className="card-img-top service-img" 
                                    height="100"/>
                                    <div className="card-footer">
                                        <h5>
                                            <Link to="#"
                                            className="deco-none stretched-link text-light">
                                                Cyber Crime Law
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <hr/>
                <section id="impact" className="mt-5">
                    <Impact/>
                </section>
            </section>
        </Fragment>
    );
}