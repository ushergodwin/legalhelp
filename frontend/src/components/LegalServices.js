import React, {Fragment} from 'react';
import { Link} from 'react-router-dom'

export default function LegalServices() {
    
    return (
        <Fragment>
            <section className="container mt-3">
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
            </section>
        </Fragment>
    );
}