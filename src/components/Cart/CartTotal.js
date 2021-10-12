import React, { useMemo } from "react";
import { Col, Row, Button } from "antd";
import { connect } from "react-redux";
import { routes } from "config/routes";
import { Link } from "react-router-dom";

function CartTotal({ products, productDetails }) {
  const totalAmount = useMemo(() => {
    let amount = 0;
    products.forEach((element) => {
      const details = productDetails[element.product_id];
      amount += details.price * element.quantity;
    });

    return amount;
  }, [products, productDetails]);

  return (
    <div style={{ position: "sticky", top: "50px" }}>
      <h4 className="c-mb-12">PRICE DETAILS</h4>
      <Row justify="space-between" className="c-mb-12">
        <Col>
          <h6>Total MRP</h6>
        </Col>
        <Col>
          <p>${totalAmount}</p>
        </Col>
      </Row>
      <Row justify="space-between" className="c-mb-12">
        <Col>
          <h6>Discount</h6>
        </Col>
        <Col>
          <p>$0</p>
        </Col>
      </Row>
      <Row justify="space-between" className="c-mb-12">
        <Col>
          <h6>Coupon applied</h6>
        </Col>
        <Col>
          <a>apply coupon</a>
        </Col>
      </Row>
      <Row justify="space-between" className="c-mb-12">
        <Col>
          <h6>Convenience Fee</h6>
        </Col>
        <Col>
          <p>
            <span style={{ textDecoration: "line-through" }}>$99</span> FREE
          </p>
        </Col>
      </Row>
      <Row justify="space-between" className="c-mb-12">
        <Col>
          <h6>Shipping charges</h6>
        </Col>
        <Col>
          <p>
            <span style={{ textDecoration: "line-through" }}>$99</span> FREE
          </p>
        </Col>
      </Row>
      <div className="seprator"></div>
      <Row justify="space-between" className="c-mb-12">
        <Col>
          <h5>Total Amount</h5>
        </Col>
        <Col>
          <p>${totalAmount}</p>
        </Col>
      </Row>
      <Link to={routes.checkoutPage.path}>
        <Button type="primary" block size="large">
          Proceed to checkout
        </Button>
      </Link>
    </div>
  );
}

const mapStateToProps = ({ cart }) => ({
  products: cart.products,
  productDetails: cart.productDetails,
});

export default connect(mapStateToProps, {})(CartTotal);
