import React, { useState } from "react";
import { Card, Row, Col } from "antd";
import HomeLayout from "layouts/HomeLayout";
import { SectionLoader } from "components/Global";
import { getProducts } from "store/actions/products";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { addProductToCart, removeProduct } from "store/actions/cart";
import {
  ShoppingCartOutlined,
  ArrowRightOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { routes } from "config/routes";

function Products({
  getProducts,
  products,
  isNextPage,
  addProductToCart,
  cartItem,
  removeProduct,
}) {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { slug } = useParams();
  const history = useHistory();

  /**
   * Fetch products
   */
  React.useEffect(() => {
    setLoading(true);
    getProducts(slug, currentPage).finally(() => setLoading(false));
  }, [currentPage, getProducts, slug]);

  /**
   * Redirect to cart page
   */
  const goToCart = () => {
    history.push(routes.cartPage.path);
  };

  const getActions = (id, quantity) => {
    if (quantity < 1) {
      return [
        <div key="addToCart" style={{ cursor: "not-allowed" }}>
          OUT OF STOCK
        </div>,
      ];
    }

    const product = cartItem.find((e) => e.product_id == id);

    if (product) {
      return [
        <div key="addToCart" onClick={goToCart}>
          GO TO BAG <ArrowRightOutlined />
        </div>,
        <div key="buyNow" onClick={() => removeProduct(id)}>
          <DeleteOutlined /> Remove
        </div>,
      ];
    }

    return [
      <div key="addToCart" onClick={() => addProductToCart(id)}>
        <ShoppingCartOutlined /> ADD TO CART
      </div>,
      <div
        key="buyNow"
        onClick={() => {
          addProductToCart(id);
          goToCart();
        }}
      >
        BUY NOW <ArrowRightOutlined />
      </div>,
    ];
  };

  return (
    <HomeLayout>
      <div>
        <h1 className="text-center c-mt-50 " style={{ letterSpacing: "20px" }}>
          BIGGEST DEALS ON TOP BRANDS
        </h1>
        {!products.length && !loading && (
          <div className="text-center ">
            <img src=" https://image.freepik.com/free-vector/empty-concept-illustration_114360-1573.jpg" />{" "}
            <p className="c-mt-20 " style={{ letterSpacing: "10px" }}>
              NO PRODUCTS AVAILABLE IN THIS CATEGORY
            </p>
          </div>
        )}
        <div style={{ padding: "24px 9%" }}>
          <InfiniteScroll
            dataLength={products?.length || 0}
            next={() => {
              setCurrentPage((v) => v + 1);
            }}
            hasMore={isNextPage}
            style={{ overflow: "none" }}
            scrollableTarget="body"
          >
            <Row
              justify="left"
              className="c-mb-50 text-left"
              style={{ justifyContent: "space-evenly" }}
            >
              {products.map((e) => (
                <Col
                  className="c-mt-20"
                  xxl={5}
                  xl={8}
                  lg={12}
                  md={12}
                  sm={24}
                  key={e._id}
                >
                  <Card
                    style={{ width: 300, height: 350, cursor: "pointer" }}
                    cover={<img alt="example" src={e?.cover_image_url} />}
                    actions={getActions(e._id, e.quantity)}
                  >
                    <Card.Meta
                      title={e.name}
                      description={
                        <div>
                          <p className="single-line-trim">{e.description}</p>
                          <p>
                            Only at <b>${e.price}</b>
                          </p>
                          <p>
                            <b>Save Extra</b> with cashback
                          </p>
                        </div>
                      }
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
        </div>

        {loading && (
          <Row>
            <Col span={24}>
              <SectionLoader height="100" />
            </Col>
          </Row>
        )}
      </div>
    </HomeLayout>
  );
}

const mapStateToProps = ({ products, cart }) => ({
  products: products.products,
  isNextPage: products.isNextPage,
  cartItem: cart.products,
});

export default connect(mapStateToProps, {
  getProducts,
  addProductToCart,
  removeProduct,
})(Products);
