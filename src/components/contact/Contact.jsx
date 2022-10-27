import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactimg from "../../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
//const CORS_URL = "http://localhost:5000/contact";
const CORS_URL = "https://portfolio-laureano-back.herokuapp.com/contact";
const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await axios.post(CORS_URL, formDetails);
    setButtonText("Send");
    //let result = response.data;
    if (response.data.code === 200) {
      setStatus({ success: true, message: "Message sent succesfully" });
      setFormDetails(formInitialDetails);
    } else {
      setStatus({ success: false, message: response.data.status });
    }
  };

  return (
    <div class="d-flex w-100 justify-content-center" id="connect">
      <div id="contact-c" class=" d-flex flex-column align-items-center">
        <div className="bar w-100">
          <div class="d-flex m-1">
            <div id="red"></div>
            <div id="yellow"></div>
            <div id="green"></div>
          </div>
        </div>
        <div class="">
          <form
            onSubmit={handleSubmit}
            id="form-contact"
            class="d-flex flex-column"
          >
            <div class="mb-3">
              <label for="first-name" class="form-label">
                First name
              </label>
              <input
                type="text"
                value={formDetails.firstName}
                placeholder="First Name"
                class="form-control"
                id="first-name"
                aria-describedby="first-name"
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="last-name" class="form-label">
                Last name
              </label>
              <input
                type="text"
                value={formDetails.lastName}
                placeholder="Last Name"
                class="form-control"
                id="last-name"
                aria-describedby="last-name"
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                value={formDetails.email}
                placeholder="Email"
                class="form-control"
                id="email"
                aria-describedby="email"
                onChange={(e) => onFormUpdate("email", e.target.value)}
              />
              <div id="emailHelp" class="form-text">
                I'll never share your email with anyone else.
              </div>
            </div>
            <div class="form-floating">
              <textarea
                value={formDetails.message}
                onChange={(e) => onFormUpdate("message", e.target.value)}
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Send me a message</label>
            </div>
            <button type="submit" class="btn btn-secondary">
              Submit
            </button>
          </form>
        </div>
        <div >
          {formDetails.firstName === "" ||
            formDetails.lastName === "" ||
            formDetails.email === "" ||
            formDetails.message === "" ?
            <p class="danger">You must complete all inputs</p> : ""
            }
        </div>
        <div>
          {status.message && (
            <p className={status.success === false ? "danger" : "success"}>
              {status.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
