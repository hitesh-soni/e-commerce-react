import React from "react";
import { Layout } from "antd";
import { images } from "assets/images";
import { Row, Col } from "antd";

const { Footer } = Layout;

function FooterView() {
  return (
    <Footer className="text-center ">
      <Row
        justify="center"
        className="c-mb-50 text-left"
        style={{ justifyContent: "space-evenly" }}
      >
        <Col className="c-mt-20" md={3} sm={12} xs={24}>
          <h5>Useful links</h5>
          <p>
            <a href="">Contact us</a>
          </p>
          <p>
            <a href="">FAQ</a>
          </p>
          <p>
            <a href="">T&C</a>
          </p>
          <p>
            <a href="">Track Orders</a>
          </p>
          <p>
            <a href="">Returns</a>
          </p>
          <p>
            <a href="">Cancellation</a>
          </p>
          <p>
            <a href="">Blog</a>
          </p>
          <p>
            <a href="">Careers</a>
          </p>
        </Col>
        <Col className="c-mt-20" md={3} sm={12} xs={24}>
          <h5>Experience xendit app on mobile</h5>
          <div>
            <img
              src="https://icon-library.com/images/apple-store-icon-transparent/apple-store-icon-transparent-4.jpg"
              height="150"
              className="c-mr-10"
            />
          </div>
        </Col>
        <Col className="c-mt-20" md={3} sm={12} xs={24}>
          <Col>
            <h5>Connect with us</h5>
            <p>
              <a href="">Facebook</a>
            </p>
            <p>
              <a href="">Youtube</a>
            </p>
            <p>
              <a href="">Instagram</a>
            </p>
            <p>
              <a href="">Twitter</a>
            </p>
          </Col>
        </Col>
        <Col className="c-mt-20" md={3} sm={12} xs={24}>
          <p className="c-mb-20">
            <b>100% ORIGINAL</b> guarantee <br /> for all products at xendit.com
          </p>
          <p>
            <b>Return within 30days</b> of <br />
            receiving your order
          </p>
        </Col>
      </Row>
      <Row style={{ justifyContent: "space-evenly" }} align="middle">
        <Col>
          <div>
            In case of any concern, <a href="">Contact us</a>
          </div>
        </Col>
        <Col>
          <div>
            <img src={images.LOGO_SMALL} height="20" className="c-mr-10" /> ©
            2021 Xendit, Inc. All Rights Reserved.
          </div>
        </Col>
      </Row>
    </Footer>
  );
}

export default FooterView;
