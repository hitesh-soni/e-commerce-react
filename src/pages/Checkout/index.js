import React, { useState } from "react";
import HomeLayout from "layouts/HomeLayout";
import { Col, Row } from "antd";
import CheckoutTotal from "components/Checkout/CheckoutTotal";
import CheckoutAddress from "components/Checkout/CheckoutAddress";
import { PageLoader } from "components/Global";
import { getAddress } from "store/actions/cart";
import { placeOrder } from "store/actions/order";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { routes } from "config/routes";

function CheckOut({ getAddress, placeOrder, products, address }) {
  const [loading, setLoading] = useState(true);
  const [selectedAddress, setselectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [orderLoading, setorderLoading] = useState(false);
  const history = useHistory();
  /**
   * Fetch cart items
   */
  React.useEffect(() => {
    setLoading(true);
    getAddress().finally(() => setLoading(false));
  }, [getAddress]);

  const addOrder = () => {
    const p = address[selectedAddress];
    const order = {
      products: products.map((e) => ({
        id: e.product_id,
        quantity: e.quantity,
      })),
      address: `${p.address} ${p.city}, ${p.state} (${p.pin_code}) ${p.country}`,
      payment_method: paymentMethod,
    };
    setorderLoading(true);
    placeOrder(order).finally(() => {
      setorderLoading(false);
      history.push(routes.homePage.path);
    });
  };

  if (loading) return <PageLoader />;

  return (
    <HomeLayout noCart>
      <div>
        <h1
          className="text-center c-mt-50 c-mb-50 "
          style={{ letterSpacing: "20px" }}
        >
          Shop For Your Loved Once
        </h1>
        <Row
          justify="left"
          className="c-mb-50 text-left"
          style={{ justifyContent: "space-evenly", padding: "24px 9%" }}
        >
          <Col className="c-mb-50">
            <CheckoutAddress
              selectedAddress={selectedAddress}
              setselectedAddress={setselectedAddress}
            />
          </Col>
          <Col style={{ width: "300px" }}>
            <CheckoutTotal
              selectedAddress={selectedAddress}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              addOrder={addOrder}
              orderLoading={orderLoading}
            />
          </Col>
        </Row>
      </div>
    </HomeLayout>
  );
}

const mapStateToProps = ({ cart }) => ({
  address: cart.address,
  products: cart.products,
});

export default connect(mapStateToProps, {
  getAddress,
  placeOrder,
})(CheckOut);
