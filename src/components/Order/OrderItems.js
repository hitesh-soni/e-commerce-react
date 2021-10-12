import React from "react";
import { Col, Row, Card } from "antd";
import { connect } from "react-redux";

function CartItmes({ product }) {
  return (
    <Card className="c-mb-30" style={{ margin: "auto", width: "100%" }}>
      <Row>
        <Col>
          <img
            src={product.cover_image_url}
            height="90"
            width="90"
            style={{ objectFit: "cover" }}
          />
        </Col>
        <Col className="c-ml-20">
          <h5>{product.name}</h5>
          <p>{product.description}</p>
          <p>1 QTY</p>
          <p>
            <b>Current price : </b>${product.price}
          </p>
        </Col>
      </Row>
    </Card>
  );
}

const mapStateToProps = ({ cart }) => ({
  products: cart.products,
  productDetails: cart.productDetails,
});

export default connect(mapStateToProps, {})(CartItmes);
