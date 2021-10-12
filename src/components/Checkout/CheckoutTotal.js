import React, { useMemo } from "react";
import { Col, Row, Button, List, Radio } from "antd";
import { connect } from "react-redux";

const data = [
  {
    title: "Debit card",
  },
  {
    title: "Credit card",
  },
  {
    title: "Net banking",
  },
  {
    title: "UPI transfer",
  },
];

function CheckoutTotal({
  products,
  productDetails,
  selectedAddress,
  paymentMethod,
  setPaymentMethod,
  addOrder,
  orderLoading
}) {
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
      <div className="c-mb-20">
        <h4 className="c-mb-12">PAYMENT METHOD</h4>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              style={{ cursor: "pointer" }}
              onClick={() => setPaymentMethod(item.title)}
              extra={<Radio checked={paymentMethod === item.title}></Radio>}
            >
              <List.Item.Meta title={item.title} />
            </List.Item>
          )}
        />
      </div>
      <div>
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
      </div>
      <Button
        onClick={addOrder}
        disabled={
          selectedAddress === undefined ||
          selectedAddress === null ||
          !paymentMethod
        }
        loading={orderLoading}
        type="primary"
        block
        size="large"
      >
        Place Order
      </Button>
    </div>
  );
}

const mapStateToProps = ({ cart }) => ({
  products: cart.products,
  productDetails: cart.productDetails,
});

export default connect(mapStateToProps, {})(CheckoutTotal);
