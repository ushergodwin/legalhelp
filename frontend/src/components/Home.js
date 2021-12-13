import React, {Fragment} from 'react';
import { Link} from 'react-router-dom'
import MetaData from './layout/MetaData'
import Impact from './Impact';
import Blogs from './blog/Blogs'
export default function Home() {
    function totalNumberOfPeopleServed()
    {
        const num = Math.floor(Math.random() * (999999 - 0 + 1)) + 0;
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    let counter = 0;
    let totalInterval = setInterval(() => {
        counter += 1007;
        if(counter === totalNumberOfPeopleServed())
        {
            clearInterval(totalInterval);
        }
    }, 100);
    return (
        <Fragment>
            <MetaData title={'Get Legal advice Online'}/>
            <section className="card">
                <img src={'/imgs/legal-advice.jpg'}
                className="card-img img-reponsive"
                width="100%"
                alt="legal advice"/>
                <div className="card-img-overlay mt-lg-5">
                    <div className="d-flex justify-content-center">
                    <a href="javascript:void(0)" 
                        className="btn btn-success btn-lg ml-5"
                        id="free_legal_advice">Free Legal Advice
                    </a>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <a href="javascript:void(0)" 
                        className="btn btn-info btn-lg"
                        id="ask_question"> Ask Question?
                    </a>
                    </div>
                    <h2 className="text-center text-light mb-3">Free Legal Help Online</h2>
                </div>
            </section>
                <div className="d-flex justify-content-center">
                    <h2 className="text-dark font-weight-bold">LEGAL SERVICES.</h2>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom">
                                    <img src={'/imgs/free-legal-help.jpg'} className="card-img-top"/>
                                    <div className="card-body">
                                        <h3>
                                            <Link to="#"
                                            className="deco-none stretched-link">
                                                Free Legal Help Online
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom">
                                    <img src={'/imgs/criminal-law.jpg'} className="card-img-top"/>
                                    <div className="card-body">
                                        <h3>
                                            <Link to="#"
                                            className="deco-none stretched-link">
                                                Criminal Law
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom">
                                    <img src={'/imgs/civil-litigation-1.jpg'} className="card-img-top"/>
                                    <div className="card-body">
                                        <h3>
                                            <Link to="#"
                                            className="deco-none stretched-link">
                                                Civil Litigation
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom">
                                    <img src={'/imgs/divorce-law.jpg'} className="card-img-top"/>
                                    <div className="card-body">
                                        <h3>
                                            <Link to="#"
                                            className="deco-none stretched-link">
                                                Divorce Farmily Law 
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom">
                                    <img src={'/imgs/property.jpg'} className="card-img-top"/>
                                    <div className="card-body">
                                        <h3>
                                            <Link to="#"
                                            className="deco-none stretched-link">
                                                Intellectual Property Law
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom">
                                    <img src={'/imgs/employment.jpg'} className="card-img-top"/>
                                    <div className="card-body">
                                        <h3>
                                            <Link to="#"
                                            className="deco-none stretched-link">
                                                Employment / Labour Law
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom">
                                    <img src={'/imgs/cyber-crime.jpg'} className="card-img-top"/>
                                    <div className="card-body">
                                        <h3>
                                            <Link to="#"
                                            className="deco-none stretched-link">
                                                Cyber Crime Law
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 mt-3">
                                <div className="card shadow h-100 zoom">
                                    <img src={'/imgs/law-documents.jpg'} className="card-img-top"/>
                                    <div className="card-body">
                                        <h3>
                                            <Link to="#"
                                            className="deco-none stretched-link">
                                               Law Documents 
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          <section id="blog" className="mt-5">
              <Blogs/>
            <Impact/>
          </section>
        </Fragment>
    );
}