import React from "react";
import { Col, Row, Card, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { removeProduct } from "store/actions/cart";
import { connect } from "react-redux";

function CartItmes({ products, productDetails, removeProduct }) {
  return (
    <div>
      {products.map((p) => {
        const details = productDetails[p.product_id];
        return (
          <Card
            className="c-mb-30"
            key={p.product_id}
            style={{ width: "600px" }}
          >
            <Row justify="space-between">
              <Col>
                <Row>
                  <Col>
                    <img
                      src={details.cover_image_url}
                      height="150"
                      width="100"
                      style={{ objectFit: "cover" }}
                    />
                  </Col>
                  <Col className="c-ml-20" style={{ width: "380px" }}>
                    <h5>{details.name}</h5>
                    <p>{details.description}</p>
                    <p>1 QTY</p>
                    <p>${details.price}</p>
                    <p>
                      <b>FREE DELIVERY</b> Available
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Button
                  onClick={() => removeProduct(p.product_id)}
                  shapr="circle"
                  icon={<CloseOutlined />}
                ></Button>
              </Col>
            </Row>
          </Card>
        );
      })}
    </div>
  );
}

const mapStateToProps = ({ cart }) => ({
  products: cart.products,
  productDetails: cart.productDetails,
});

export default connect(mapStateToProps, { removeProduct })(CartItmes);
