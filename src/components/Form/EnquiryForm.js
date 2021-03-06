import React from "react";
import axios from "axios";
import SuccessForm from "../Form/SuccessFrom";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("Name is Required"),
  phone: yup
    .string()
    .required("Phone Number is Required.")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  email: yup
    .string()
    .required("Email is Required.")
    .email("Email is not Valid."),
  message: yup.string().required("Message is Required"),
});
const EnquireForm = (props) => {
  console.log(props);
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);

  return (
    <Container>
      {!showResults && (
        <Row className=" d-flex justify-content-center">
          <Col md={10}>
            <Formik
              validationSchema={validationSchema}
              initialValues={{ name: "", phone: "", email: "", message: "" }}
              onSubmit={(values, actions) => {
                console.log(values);
                // Send a POST request
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
              }}
            >
              {({ values, errors, touched, dirty, isValid }) => (
                <FormikForm autoComplete="off">
                  <Field
                    name="name"
                    placeholder="Name"
                    type="text"
                    as={FormControl}
                  />
                  <ErrorMessage name="name" render={CustomError} />
                  <br />

                  <Field
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    as={FormControl}
                  />
                  <ErrorMessage name="email" render={CustomError} />
                  <br />

                  <Field
                    name="phone"
                    placeholder="Mobile no."
                    type="text"
                    as={FormControl}
                  />
                  <ErrorMessage name="phone" render={CustomError} />
                  <br />

                  <Field name="message">
                    {({ field, form, meta }) => (
                      <Form.Control
                        as="textarea"
                        placeholder="Message"
                        style={{ height: "100px" }}
                        {...field}
                      />
                    )}
                  </Field>
                  <ErrorMessage name="message" render={CustomError} />
                  <br />
                  <div className=" d-flex justify-content-center">
                    {/* <pre>
                      {JSON.stringify(
                        { isValid, dirty, disabled: !dirty || !isValid },
                        null,
                        2
                      )}
                    </pre> */}
                    <button
                      type="submit"
                      className="p-2 px-4 me-2 m-3 fw-bold SubBtn"
                      disabled={!dirty || !isValid}
                      style={{
                        background: "#E63732",
                        color: "#fff",
                        border: "none",
                      }}
                      // onClick={() => {
                      //   props.onHide();
                      // }}
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

export default EnquireForm;

const Results = (props) => (
  <div id="results" className="search-results">
    <SuccessForm {...props} />
  </div>
);

function CustomError(msg) {
  return <div style={{ color: "red" }}>{msg}</div>;
}
