import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import * as yup from "yup";
import Submit from "../Button/Submit";

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
});
const ApplyFormDigitalMarketing = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row className=" d-flex justify-content-center">
        <Col md={10}>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ name: "", phone: "", email: "" }}
            onSubmit={(values) => {
              console.log(values);
              navigate("/");
            }}
          >
            <Form>
              <Field
                name="name"
                placeholder="Name"
                type="text"
                as={FormControl}
              />
              <ErrorMessage name="name" render={CustomError} />
              <br />

              <Field
                name="phone"
                placeholder="Mobile no."
                type="text"
                as={FormControl}
              />
              <ErrorMessage name="phone" render={CustomError} />
              <br />

              <Field
                name="email"
                placeholder="E-mail"
                type="email"
                as={FormControl}
              />
              <ErrorMessage name="email" render={CustomError} />
              <br />

              <div role="group" aria-labelledby="my-radio-group">
                <h4>When do you want to start this course?</h4>
                <label>
                  <Field
                    type="radio"
                    name="StartThisCourse"
                    value="Within this week"
                  />
                  &nbsp; Within this week
                </label>
                <br />
                <label>
                  <Field
                    type="radio"
                    name="StartThisCourse"
                    value="Within this month"
                  />
                  &nbsp; Within this month
                </label>
                <br />
                <label>
                  <Field
                    type="radio"
                    name="StartThisCourse"
                    value=" Next month"
                  />
                  &nbsp; Next month
                </label>
                <br />
                <label>
                  <Field type="radio" name="StartThisCourse" value="other" />
                  &nbsp; other
                </label>
              </div>

              <br />
              <div role="group" aria-labelledby="my-radio-group">
                <h4>Suitable time to contact you.</h4>
                <label>
                  <Field type="radio" name="SuitableTime" value=" 09Am- 12pm" />
                  &nbsp; 09Am- 12pm
                </label>
                <br />
                <label>
                  <Field type="radio" name="SuitableTime" value="12Pm- 03pm" />
                  &nbsp; 12Pm- 03pm
                </label>
                <br />
                <label>
                  <Field
                    type="radio"
                    name="SuitableTime"
                    value="   03Pm- 06pm"
                  />
                  &nbsp; 03Pm- 06pm
                </label>
              </div>

              <br />
              <div className=" d-flex justify-content-center">
                <Submit />
              </div>
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplyFormDigitalMarketing;

function CustomError(msg) {
  return <div style={{ color: "red" }}>{msg}</div>;
}
