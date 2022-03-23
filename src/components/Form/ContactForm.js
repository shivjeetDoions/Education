import React from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email is Required.")
    .email("Email is not Valid."),

  message: yup.string().required("Message is Required"),
});
const EnquireForm = () => {
  return (
    <Container>
      <Row className=" d-flex justify-content-center">
        <Col md={12}>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ email: "", message: "" }}
            onSubmit={(values, actions) => {
              console.log(values);
              actions.resetForm({
                values: {
                  email: "",
                  message: "",
                },
              });
            }}
          >
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
                  style={{
                    background: "#E63732",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  Submit
                </button>
              </div>
            </FormikForm>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default EnquireForm;

function CustomError(msg) {
  return <div style={{ color: "red" }}>{msg}</div>;
}
