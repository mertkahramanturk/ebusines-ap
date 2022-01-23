import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import footer from "../../images/title.jpg";
export default class Footer extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12">
            <div style={{ position: "relative", display: "flex" }}>
              <footer>
                <ul
                  id="x"
                  style={{
                    display: "flex",
                    marginTop: " 1rem",
                    alignSelf: "center",
                    paddingLeft: "48rem",
                  }}
                >
                  <a
                    style={{
                      padding: "1rem",
                      fontSize: "2rem",
                      color: "black",
                    }}
                    href="https://github.com/mertkahramanturk"
                    target="_blank"
                  >
                    <i class="fab fa-github"></i>
                  </a>

                  <a
                    style={{ padding: "1rem", fontSize: "2rem", color: "red" }}
                    href="http://instagram.com/mertkahramanturk/?hl=tr"
                    target="_blank"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>

                  <a
                    style={{
                      padding: "1rem",
                      fontSize: "2rem",

                      color: "blue",
                    }}
                    href="https://twitter.com/mertkahramnturk"
                    target="_blank"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                </ul>
                <div class="container">
                  <p class="float-right "></p>
                  <p>
                    For E-Business Class &copy; REACT, JavaScript,CSS. For your questions
                    and suggestions:{" "}
                    <email style={{ color: "blue" }}>
                      kahramanturkk@gmail.com
                    </email>
                  </p>
                  <img
                    src={footer}
                    style={{
                      display: "flex",
                      marginTop: " 1rem",
                      alignSelf: "center",
                      paddingLeft: "5rem",
                      width: "50%",
                    }}
                  ></img>
                </div>
              </footer>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
