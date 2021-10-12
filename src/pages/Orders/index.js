import React, { useState } from "react";
import HomeLayout from "layouts/HomeLayout";
import OrderItems from "components/Order/OrderItems";
import NoOrder from "components/Order/NoOrder";
import { PageLoader } from "components/Global";
import { getOrders } from "store/actions/order";
import { connect } from "react-redux";
import { Card } from "antd";

function Orders({ getOrders, orders }) {
  const [loading, setLoading] = useState(true);

  /**
   * Fetch cart items
   */
  React.useEffect(() => {
    setLoading(true);
    getOrders().finally(() => setLoading(false));
  }, [getOrders]);

  if (loading) return <PageLoader />;

  return (
    <HomeLayout noCart>
      <div>
        <h1
          className="text-center c-mt-50 c-mb-50"
          style={{ letterSpacing: "20px" }}
        >
          ORDER HISTORY
        </h1>

        {orders.length ? (
          <React.Fragment>
            {orders.map((odr) => (
              <Card
                key={odr.order_number}
                className="c-mb-30"
                style={{ margin: "auto", width: "60%" }}
              >
                <div>
                  <h5>#{odr.order_number}</h5>
                  <p>Address : {odr.address}</p>
                  <p>Total amount : ${odr.orderTotal}</p>
                  <p className="c-mb-20">
                    Payment method : {odr.payment_method}
                  </p>
                  {odr?.products?.map((e) => (
                    <OrderItems
                      key={odr.order_number + e.product._id}
                      product={e.product}
                    />
                  ))}
                </div>
              </Card>
            ))}
          </React.Fragment>
        ) : (
          <NoOrder />
        )}
      </div>
    </HomeLayout>
  );
}

const mapStateToProps = ({ order }) => ({
  orders: order.orders,
});

export default connect(mapStateToProps, {
  getOrders,
})(Orders);
