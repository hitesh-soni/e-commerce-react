import React, { useState } from "react";
import HomeLayout from "layouts/HomeLayout";
import { Col, Row } from "antd";
import CartTotal from "components/Cart/CartTotal";
import CartItmes from "components/Cart/CartItmes";
import EmptyCart from "components/Cart/EmptyCart";
import { PageLoader } from "components/Global";
import { getProductDetails } from "store/actions/cart";
import { connect } from "react-redux";

function Cart({ products, getProductDetails }) {
  const [loading, setLoading] = useState(true);

  /**
   * Fetch cart items
   */
  React.useEffect(() => {
    if (products.length) {
      setLoading(true);
      getProductDetails(products.map((e) => e.product_id)).finally(() =>
        setLoading(false)
      );
    } else {
      setLoading(false);
    }
  }, [getProductDetails]);

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

        {products.length ? (
          <Row
            justify="left"
            className="c-mb-50 text-left"
            style={{ justifyContent: "space-evenly", padding: "24px 9%" }}
          >
            <Col className="c-mb-50">
              <CartItmes />
            </Col>
            <Col style={{ width: "300px" }}>
              <CartTotal />
            </Col>
          </Row>
        ) : (
          <EmptyCart />
        )}
      </div>
    </HomeLayout>
  );
}

const mapStateToProps = ({ cart }) => ({
  products: cart.products,
});

export default connect(mapStateToProps, {
  getProductDetails,
})(Cart);
