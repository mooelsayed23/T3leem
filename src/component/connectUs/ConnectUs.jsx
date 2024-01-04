// ContactUsPage.jsx

import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log("تم إرسال النموذج:", values);
    resetForm();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "يرجى إدخال الاسم";
    }

    if (!values.email) {
      errors.email = "يرجى إدخال البريد الإلكتروني";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!values.message) {
      errors.message = "يرجى إدخال الرسالة";
    }

    return errors;
  };

  return (
    <div className="contact-us-container">
      <h2>اتصل بنا</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">
              الاسم<span className="required-field">*</span>:
            </label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              البريد الإلكتروني<span className="required-field">*</span>:
            </label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              الرسالة<span className="required-field">*</span>:
            </label>
            <Field as="textarea" id="message" name="message" />
            <ErrorMessage
              name="message"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <button type="submit">إرسال</button>
          </div>
        </Form>
      </Formik>

      {isSubmitted && (
        <div className="success-message">تم إرسال الرسالة بنجاح!</div>
      )}
    </div>
  );
};

export default ContactUsPage;
