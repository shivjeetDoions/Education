import React from "react";
import { Container } from "react-bootstrap";
import CardTwoImg from "./AllCourseComponent/CardTwoImg";
import CardTwoKnowMore from "./AllCourseComponent/CardTwoKnowMore";
import CardTwoMH from "./AllCourseComponent/CardTwoMH";
import CardTwoMsg from "./AllCourseComponent/CardTwoMsg";
import CardTwoTime from "./AllCourseComponent/CardTwoTime";

function CardTwo(props) {
  return (
    <div>
      <Container className="border border-Secondary p-0 m-3">
        <CardTwoImg />
        <CardTwoTime />
        <CardTwoMH />
        <CardTwoMsg />
        <CardTwoKnowMore {...props} />
      </Container>
    </div>
  );
}

export default CardTwo;
