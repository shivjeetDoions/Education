import React from "react";
import axios from "axios";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import * as yup from "yup";

import SuccessContact from "./SuccessContact";

const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email is Required.")
    .email("Email is not Valid."),
  message: yup.string().required("Message is Required"),
});
const ContactForm = (props) => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);

  return (
    <Container>
      {!showResults && (
        <Row className=" d-flex justify-content-center">
          <Col md={12}>
            <Formik
              validationSchema={validationSchema}
              initialValues={{ email: "", message: "" }}
              onSubmit={(values, actions) => {
                console.log(values);
                actions.setSubmitting(
                  axios
                    .post(
                      "http://localhost:8090/api/message/doions-education",
                      values
                    )
                    .then(function (response) {
                      console.log(response);
                    })
                    .catch(function (error) {
                      console.log(error.response);
                    })
                );

                actions.resetForm({
                  values: {
                    email: "",
                    message: "",
                  },
                });
              }}
            >
              {({ values, errors, touched, dirty, isValid }) => (
                <FormikForm>
                  <Field
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    as={FormControl}
                    style={{ borderRadius: "0px" }}
                  />
                  <ErrorMessage name="email" render={CustomError} />
                  <br />

                  <Field name="message">
                    {({ field, form, meta }) => (
                      <Form.Control
                        as="textarea"
                        placeholder="Message"
                        style={{ height: "100px", borderRadius: "0px" }}
                        {...field}
                      />
                    )}
                  </Field>
                  <ErrorMessage name="message" render={CustomError} />
                  <br />
                  <div className=" d-flex justify-content-center">
                    <button
                      type="submit"
                      className="p-2 px-4 me-2 m-3 fw-bold "
                      disabled={!dirty || !isValid}
                      style={{
                        background: "#E63732",
                        color: "#fff",
                        border: "none",
                      }}
                      onClick={onClick}
                    >
                      Submit
                    </button>
                  </div>
                </FormikForm>
              )}
            </Formik>
          </Col>
        </Row>
      )}
      {showResults && <Results {...props} />}
    </Container>
  );
};

export default ContactForm;

const Results = (props) => (
  <div id="results" className="search-results">
    <SuccessContact {...props} />
  </div>
);

function CustomError(msg) {
  return <div style={{ color: "red" }}>{msg}</div>;
}
