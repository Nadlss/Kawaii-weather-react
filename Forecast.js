import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row" id="forecast-grid">
      <Container>
        <Row>
          <Col>1 of 5</Col>
          <Col>2 of 5</Col>
          <Col>3 of 5</Col>
          <Col>4 of 5</Col>
          <Col>5 of 5</Col>
        </Row>
      </Container>
    </div>
  );
}
