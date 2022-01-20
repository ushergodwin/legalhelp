import React, {Fragment} from 'react';
import { Link} from 'react-router-dom'
import MetaData from './layout/MetaData'
import Impact from './Impact';
export default function Home() {
    return (
        <Fragment>
            <MetaData title={'Free Legal Advice Online'}/>
            <section className="card">
                <img src={'/imgs/banner.jpg'}
                className="card-img img-reponsive"
                
                alt="legal help online "/>
                <div className="card-img-overlay mt-lg-5">
                    <h2 className="text-center text-light">Know Your Rights <i className="fas fa-handshake"></i></h2>
                    <h4 className="text-center text-light">Free Legal Help Online</h4>
                    <div className="d-flex justify-content-center">
                        <a href="javascript:void(0)" 
                            className="btn btn-light btn-md"
                            id="ask_question"> Ask Question?
                        </a>
                        <a href="javascript:void(0)" 
                            className="btn btn-success btn-md ml-5"
                            id="free_legal_advice">Free Legal Advice
                        </a>
                    </div>
                </div>
            </section>
                <div className="row mt-2">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-center mt-md-5">
                            <h2 className="text-dark font-weight-bold">LEGAL SERVICES.</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom">
                                    <img src={'/imgs/free-legal-help.jpg'} className="card-img-top service-img" height="110"/>
                                    <div className="card-footer nav-bg">
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
                                <div className="card shadow h-100 zoom">
                                    <img src={'/imgs/civil-litigation-1.jpg'} className="card-img-top service-img"
                                    height="110"/>
                                    <div className="card-footer nav-bg">
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
                                <div className="card shadow h-100 zoom">
                                    <img src={'/imgs/civilian-rights.jpg'} className="card-img-top service-img"
                                    height="110"/>
                                    <div className="card-footer nav-bg">
                                        <h5>
                                            <Link to="#"
                                            className="deco-none stretched-link text-light">
                                                Civilian Rights
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom">
                                    <img src={'/imgs/law-documents.jpg'} className="card-img-top service-img" 
                                    height="110"/>
                                    <div className="card-footer nav-bg">
                                        <h5>
                                            <Link to="#"
                                            className="deco-none stretched-link text-light">
                                               Legal Documents 
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom">
                                    <img src={'/imgs/property.jpg'} className="card-img-top service-img" 
                                    height="100"/>
                                    <div className="card-footer nav-bg">
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
                                <div className="card shadow h-100 zoom">
                                    <img src={'/imgs/divorce-law.jpg'} className="card-img-top service-img" 
                                    height="100"/>
                                    <div className="card-footer nav-bg">
                                        <h5>
                                            <Link to="#"
                                            className="deco-none stretched-link text-light">
                                                Divorce and Farmily Law 
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom">
                                    <img src={'/imgs/employment.jpg'} className="card-img-top service-img" 
                                    height="100"/>
                                    <div className="card-footer nav-bg">
                                        <h5>
                                            <Link to="#"
                                            className="deco-none stretched-link text-light">
                                                Labour Law
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom">
                                    <img src={'/imgs/cyber-crime.jpg'} className="card-img-top service-img" 
                                    height="100"/>
                                    <div className="card-footer nav-bg">
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
        </Fragment>
    );
}