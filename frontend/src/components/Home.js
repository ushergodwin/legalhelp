import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import MetaData from "./layout/MetaData";
import Impact from "./Impact";
import { askQuestion } from "../actions/askQuestionAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./layout/Loader";
import { API_ENDPOINT } from "../constants/api";
import { toast } from "react-toastify";

export default function Home() {
  const dispatch = useDispatch();
  const { loading, success, error, message } = useSelector(
    (state) => state.askQuenstion
  );
  useEffect(() => {
    if (success) {
      document.getElementById("close-modal").click();
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      document.getElementById("askQuestionForm").reset();
      const sendbtn = document.getElementById("send-message-btn");
      sendbtn.innerHTML = "Submit Inquery";
      sendbtn.removeAttribute("disabled");
      document.getElementById("sendMessageForm").reset();
    }
    if (error) {
      const sendbtn = document.getElementById("send-message-btn");
      sendbtn.innerHTML = "Submit Inquery";
      sendbtn.removeAttribute("disabled");
      document.getElementById("close-modal").click();
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({ type: "CLEAR_ERRORS" });
    }
  }, [dispatch, success, error, alert]);

  const handleSendQuestion = () => {
    const formdata = new FormData(document.getElementById("askQuestionForm"));

    let newQuestion = {};
    formdata.forEach((value, key) => (newQuestion[key] = value));
    let errors = 0;
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");
    const nameError = document.getElementById("name-error");
    const subjectError = document.getElementById("subject-error");

    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(newQuestion.email)) {
      alert(newQuestion.email);
      errors++;
      emailError.innerHTML = "Invalid email address";
    }
    const phoneReg =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!phoneReg.test(newQuestion.phone)) {
      errors++;
      phoneError.innerHTML = "Invalid phone number";
      alert(newQuestion.phone);
    }
    const nameReg = /^[a-zA-Z\s]*$/;
    if (!nameReg.test(newQuestion.name)) {
      errors++;
      nameError.innerHTML = "Invalid full name";
      alert(newQuestion.name);
    }
    if (!nameReg.test(newQuestion.subject)) {
      errors++;
      subjectError.innerHTML = "Invalid subject";
      alert(newQuestion.subject);
    }

    if (errors == 0) {
      emailError.innerHTML = "";
      phoneError.innerHTML = "";
      nameError.innerHTML = "";
      subjectError.innerHTML = "";
      newQuestion["send_to"] =
        "godwintumuhimbise96@gmail.com,legalhelponline@gmail.com";
      document.getElementById("close-modal").click();
      dispatch(askQuestion(newQuestion));
      dispatch({ type: "CLEAR_SUCCESS" });
    }
  };
  const handleCharacterCount = (event) => {
    const question = event.target.value;
    const min_char = 100;
    const char_len = question.length;
    const sendbtn = document.getElementById("send-btn");
    sendbtn.setAttribute("disabled", true);
    let char_count = min_char - char_len;
    if (char_count <= 0) {
      char_count = 0;
      sendbtn.removeAttribute("disabled");
    }
    document.getElementById("min-char").innerHTML = char_count;
  };

  const handleMessageCharacterCount = (event) => {
    const question = event.target.value;
    const min_char = 100;
    const char_len = question.length;
    const sendbtn = document.getElementById("send-message-btn");
    sendbtn.setAttribute("disabled", true);
    let char_count = min_char - char_len;
    if (char_count <= 0) {
      char_count = 0;
      sendbtn.removeAttribute("disabled");
    }
    document.getElementById("min-massage-char").innerHTML = char_count;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let newMessage = {};
    for (let [key, value] of formData.entries()) {
      newMessage[key] = value;
    }
    let errors = 0;
    const emailError = document.getElementById("m-email-error");
    const phoneError = document.getElementById("m-phone-error");
    const nameError = document.getElementById("m-name-error");
    console.log(newMessage);
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(newMessage.email)) {
      console.log(newMessage.email);
      errors++;
      emailError.innerHTML = "Invalid email address";
    }
    const phoneReg =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!phoneReg.test(newMessage.phone)) {
      errors++;
      phoneError.innerHTML = "Invalid phone number";
      console.log(newMessage.phone);
    }
    const nameReg = /^[a-zA-Z\s]*$/;
    if (!nameReg.test(newMessage.firstname)) {
      errors++;
      nameError.innerHTML = "Invalid first name";
      console.log(newMessage.firstname);
    }
    if (!nameReg.test(newMessage.lastname)) {
      errors++;
      nameError.innerHTML = "Invalid last name";
      console.log(newMessage.lastname);
    }

    if (errors === 0) {
      emailError.innerHTML = "";
      phoneError.innerHTML = "";
      nameError.innerHTML = "";
      const sendbtn = document.getElementById("send-message-btn");
      sendbtn.innerHTML =
        "<span class='spinner-border spinner-border-sm'></span> sending...";
      sendbtn.setAttribute("disabled", true);
      dispatch({ type: "SEND_QUESTION" });
      dispatch(askQuestion(newMessage, API_ENDPOINT));
      dispatch({ type: "CLEAR_SUCCESS" });
    }
  };
  return (
    <Fragment>
      <MetaData title={"Free Legal Advice Online"} />
      <section className="card w-100">
        <img
          src={"/imgs/banner2.png"}
          className="card-img img-reponsive bunner-img"
          alt="legal help online"
        />
        <div className="card-img-overlay mt-lg-5 c-overlay">
          <h2 className="text-center text-light">Know Your Rights </h2>
          <h4 className="text-center text-light">
            Get Free Legal Advice Online
          </h4>
          <br />
          <div className="d-flex justify-content-center">
            <section className="d-lg">
              <a
                href="javascript:void(0)"
                className="btn btn-success btn-md ml-5"
                id="free_legal_advice"
              >
                Free Legal Advice
              </a>{" "}
              &nbsp;&nbsp;
              <a
                href="#myModal"
                className="btn btn-light btn-md"
                id="ask_question"
                data-bs-toggle="modal"
              >
                {" "}
                Ask Question?
              </a>
            </section>
            <section className="d-sm">
              <a
                href="javascript:void(0)"
                className="btn btn-success btn-sm ml-5"
                id="free_legal_advice"
              >
                Free Legal Advice
              </a>{" "}
              &nbsp;&nbsp;
              <a
                href="#myModal"
                className="btn btn-sm nav-bg"
                id="ask_question"
                data-bs-toggle="modal"
              >
                {" "}
                Ask Question?
              </a>
            </section>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        {/* Modal HTML */}
        {loading ? (
          <Loader />
        ) : (
          <div id="myModal" className="modal fade">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Ask Question </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    Please provide the required information below to proceed
                  </p>
                  <form id="askQuestionForm">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="email" className="w-100">
                            {" "}
                            Email
                            <input
                              type={`email`}
                              name="email"
                              className="form-control"
                            />
                            <span
                              id="email-error"
                              className="text-danger"
                            ></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="phone" className="w-100">
                            {" "}
                            Phone Number
                            <input
                              type={`number`}
                              name="phone"
                              className="form-control"
                            />
                            <span
                              id="phone-error"
                              className="text-danger"
                            ></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="subject" className="w-100">
                            {" "}
                            Name
                            <input
                              type={`text`}
                              name="name"
                              className="form-control"
                            />
                            <span
                              id="name-error"
                              className="text-danger"
                            ></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="subject" className="w-100">
                            {" "}
                            Subject
                            <input
                              type={`text`}
                              name="subject"
                              className="form-control"
                            />
                            <span
                              id="subject-error"
                              className="text-danger"
                            ></span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="question" className="w-100">
                        {" "}
                        Question
                        <textarea
                          name="body"
                          className="form-control"
                          rows={`5`}
                          onKeyUp={(e) => handleCharacterCount(e)}
                        ></textarea>
                      </label>
                      <div className="d-flex justify-content-end">
                        Minimun Characters: <span id="min-char">100</span>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    id="close-modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() =>
                      document.getElementById("askQuestionForm").reset()
                    }
                  >
                    Clear Form
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="send-btn"
                    onClick={() => handleSendQuestion()}
                  >
                    Submit Question
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row mt-2">
          <div className="col-md-12">
            <section className="d-lg">
              <h2 className="text-dark font-weight-bold text-center">
                Legal Services
              </h2>
            </section>
            <section className="d-sm">
              <h2 className="text-dark font-weight-bold text-center lgs-sm">
                Legal Services
              </h2>
            </section>
            <div className="row">
              <div className="col-lg-3 mt-3">
                <div className="card shadow h-100 zoom nav-bg">
                  <img
                    src={"/imgs/free-legal-help.jpg"}
                    className="card-img-top service-img"
                    height="110"
                  />
                  <div className="card-footer">
                    <h5>
                      <Link
                        to="#"
                        className="deco-none stretched-link text-light"
                      >
                        Free Legal Advice
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mt-3">
                <div className="card shadow h-100 zoom nav-bg">
                  <img
                    src={"/imgs/criminal-law.jpg"}
                    className="card-img-top service-img"
                    height="110"
                  />
                  <div className="card-footer">
                    <h5>
                      <Link
                        to="#"
                        className="deco-none stretched-link text-light"
                      >
                        Criminal Law
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mt-3">
                <div className="card shadow h-100 zoom nav-bg">
                  <img
                    src={"/imgs/civil-litigation-1.jpg"}
                    className="card-img-top service-img"
                    height="110"
                  />
                  <div className="card-footer">
                    <h5>
                      <Link
                        to="#"
                        className="deco-none stretched-link text-light"
                      >
                        Civil Litigation
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mt-3">
                <div className="card shadow h-100 zoom nav-bg">
                  <img
                    src={"/imgs/commercial-law.jpeg"}
                    className="card-img-top service-img"
                    height="110"
                  />
                  <div className="card-footer">
                    <h5>
                      <Link
                        to="#"
                        className="deco-none stretched-link text-light"
                      >
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
                  <img
                    src={"/imgs/pro.webp"}
                    className="card-img-top service-img"
                    height="100"
                  />
                  <div className="card-footer">
                    <h5>
                      <Link
                        to="#"
                        className="deco-none stretched-link text-light"
                      >
                        Land Matters/ Property
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mt-3">
                <div className="card shadow h-100 zoom nav-bg">
                  <img
                    src={"/imgs/divorce-law.jpg"}
                    className="card-img-top service-img"
                    height="100"
                  />
                  <div className="card-footer">
                    <h5>
                      <Link
                        to="#"
                        className="deco-none stretched-link text-light"
                      >
                        Marriage / Divorce
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mt-3">
                <div className="card shadow h-100 zoom nav-bg">
                  <img
                    src={"/imgs/employment.jpg"}
                    className="card-img-top service-img"
                    height="100"
                  />
                  <div className="card-footer">
                    <h5>
                      <Link
                        to="#"
                        className="deco-none stretched-link text-light"
                      >
                        Employment / Labour Law
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mt-3">
                <div className="card shadow h-100 zoom nav-bg">
                  <img
                    src={"/imgs/cyber-crime.jpg"}
                    className="card-img-top service-img"
                    height="100"
                  />
                  <div className="card-footer">
                    <h5>
                      <Link
                        to="#"
                        className="deco-none stretched-link text-light"
                      >
                        Cyber Crime Law
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <section className="mt-5">
              <h2 className="text-dark font-weight-bold text-center">
                Why Choose LegalHelpOnline
              </h2>
            </section>
            <br />
            <div className="row mt-2">
              <div className="col-md-12 col-lg-3">
                <br />
                <div className="d-flex justify-content-center">
                  <i
                    className="fas fa-award rounded-circle"
                    style={{ fontSize: "80px" }}
                  ></i>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <h5>Quality</h5>
                </div>
                <div className="d-flex justify-content-center">
                  Documents are prepared and updated regulary by practicing
                  advocates
                </div>
              </div>

              <div className="col-md-12 col-lg-3">
                <div className="d-flex justify-content-center">
                  <i
                    className="fas fa-thumbs-up rounded-circle"
                    style={{ fontSize: "80px" }}
                  ></i>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <h5>Reliable</h5>
                </div>
                <div className="d-flex justify-content-center">
                  All documents are practical and effective
                </div>
              </div>

              <div className="col-md-12 col-lg-3">
                <div className="d-flex justify-content-center">
                  <i
                    className="fas fa-wallet rounded-circle"
                    style={{ fontSize: "80px" }}
                  ></i>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <h5>Value</h5>
                </div>
                <div className="d-flex justify-content-center">
                  All documents are affordable
                </div>
              </div>

              <div className="col-md-12 col-lg-3">
                <div className="d-flex justify-content-center">
                  <i
                    className="fas fa-clock  rounded-circle"
                    style={{ fontSize: "80px" }}
                  ></i>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <h5>Conveniece</h5>
                </div>
                <div className="d-flex justify-content-center">
                  Create your documents from anywhere at any time.
                </div>
              </div>
              <span className="mt-3 text-muted">
                We provide a platform that ensures everyone has access to
                justice. Clients can raise queries and get free legal advice.
                LegalHelpOnline is built upon one simple but powerful belief:
                that no person should be denied the right to access equal
                justice.
              </span>
            </div>
          </div>
        </div>
        <hr />
        <section id="impact" className="mt-5">
          <Impact />
        </section>

        <section className="mt-5" style={{ backgroundColor: "#f0f2f5" }}>
          <h2 className="text-dark font-weight-bold text-center">
            Get In Touch <br />
          </h2>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="d-flex justify-content-center">
                <div>
                  <p className="text-muted">
                    Fill in the form below and a LegalHelpOnline Vision team
                    member will be in touch shortly.
                  </p>
                  <form
                    id="sendMessageForm"
                    method="POST"
                    onSubmit={(e) => handleSendMessage(e)}
                  >
                    <div className="row">
                      <div className="col-md-6 mt-3">
                        <div className="form-group">
                          <input
                            type="text"
                            id="firstname"
                            className="form-control"
                            placeholder="First Name"
                            name="firstname"
                          />
                        </div>
                        <span id="m-name-error" className="text-danger"></span>
                      </div>
                      <div className="col-md-6 mt-3">
                        <div className="form-group">
                          <input
                            type="text"
                            id="lastname"
                            className="form-control"
                            placeholder="Last Name"
                            name="lastname"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mt-3">
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Your Email Address"
                            name="email"
                          />
                        </div>
                        <span id="m-email-error" className="text-danger"></span>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mt-3">
                          <input
                            type="text"
                            id="phone"
                            className="form-control"
                            placeholder="Your Phone Number"
                            name="phone"
                          />
                        </div>
                        <span id="m-phone-error" className="text-danger"></span>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <textarea
                        className="form-control"
                        rows={5}
                        placeholder="Message"
                        name="message"
                        id="message"
                        onKeyUp={(e) => handleMessageCharacterCount(e)}
                      ></textarea>
                      <div className="d-flex justify-content-end">
                        Minimun Characters:{" "}
                        <span id="min-massage-char">100</span>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <button
                        type="submit"
                        className="btn btn-secondary"
                        id="send-message-btn"
                        disabled
                      >
                        {loading
                          ? `<span class='spinner-border spinner-border-sm'></span>`
                          : `Submit Inquiry`}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br />
        </section>
      </section>
    </Fragment>
  );
}
