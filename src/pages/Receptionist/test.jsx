import React, { useRef } from "react";
import emailjs from "emailjs-com";
import axios from "axios";

function Contactus_Form_Submitionsl() {
  const form = useRef();

  const sendEmail = (data) => {
    emailjs
      .sendForm(
        "service_sr7pfvh",
        "template_0xugg69",
        form.current,
        "5JSmzYAJ1ZRnFDW9-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    axios
      .post(
        "http://localhost:5400/contactUsSubmition/contactUsFormReplySubmition",
        data
      )
      .then((response) => {
        console.log("Data submitted successfully to backend", response.data);

        // Schedule sending an email after 10 minutes
        setTimeout(() => {
          sendEmail(data);
        }, 0.5 * 60 * 1000); // 10 minutes in milliseconds
      })
      .catch((error) => {
        console.log("Error submitting data", error);
      });
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="tomail" />
      <label>Question</label>
      <input type="text" name="question" hidden />
      <label>id</label>
      <input type="text" name="replySubmitionID" value="10001" hidden />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Contactus_Form_Submitionsl;
