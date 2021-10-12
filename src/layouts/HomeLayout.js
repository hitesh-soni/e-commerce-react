import React from "react";
import { Layout, Row, Col, Badge, Popover, Divider, List, Button } from "antd";
import { images } from "assets/images";
import Footer from "layouts/component/Footer";
import { Link } from "react-router-dom";
import { routes } from "config/routes";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { logoutUser } from "store/actions/auth";
const { Header, Content } = Layout;

function HomeLayout({ children, noCart, cartItem, user, logoutUser }) {
  /**
   * Profile actions
   */
  const data = [
    <Link key="orders" to={routes.ordersPage.path}>
      <h3 className="font-14 c-font-w-5">Orders</h3>
    </Link>,

    <h3
      key="profile"
      className="font-14 c-font-w-5"
      style={{ color: "#aaa", cursor: "not-allowed" }}
    >
      Profile
    </h3>,
    <h3
      key="wishlilst"
      className="font-14 c-font-w-5"
      style={{ color: "#aaa", cursor: "not-allowed" }}
    >
      Wishlist
    </h3>,
    <h3
      key="contact"
      className="font-14 c-font-w-5"
      style={{ color: "#aaa", cursor: "not-allowed" }}
    >
      Contact Us
    </h3>,
    <Button onClick={logoutUser} key="logout" danger>
      LOGOUT
    </Button>,
  ];

  /**
   * Profile pop over
   */
  const content = (
    <div>
      <h4 className="font-15 c-font-w-6 ">Welcome</h4>
      <p className="font-12 c-font-w-4 ">
        You can manage your account and your orders
      </p>
      <Divider orientation="left">
        <h4 className="font-13 c-font-w-6 ">Manage account</h4>
      </Divider>
      <List
        size="small"
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
  return (
    <Layout>
      <Header className="header">
        <Row justify="space-around">
          <Col className="text-left">
            <Link key="orders" to={routes.homePage.path}>
              <img src={images.LOGO} height="30" />
            </Link>
          </Col>
          <Col className="text-right ">
            <Row justify="space-around">
              {!noCart && (
                <Col className="text-left c-mr-30">
                  <Link to={routes.cartPage.path}>
                    <Badge
                      count={cartItem.length}
                      status="default"
                      size="small"
                      style={{ top: "20px", color: "#000" }}
                    >
                      <ShoppingCartOutlined className="text-white font-22 c-font-w-5" />
                    </Badge>
                  </Link>
                </Col>
              )}
              <Col className="text-left">
                {!user ? (
                  <Link to={routes.loginPage.path}>
                    <h3 className="text-white font-18 c-font-w-5">Login</h3>
                  </Link>
                ) : (
                  <Popover placement="bottomRight" content={content}>
                    <h3 className="text-white font-18 c-font-w-5 ">
                      Hello, {user?.firstname} {user?.lastname}
                    </h3>
                  </Popover>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content>
        <Layout className="c-h-100 bg-white">
          <Content>{children}</Content>
        </Layout>
      </Content>
      <Footer />
    </Layout>
  );
}

const mapStateToProps = ({ cart, auth }) => ({
  cartItem: cart.products,
  user: auth.user,
});

export default connect(mapStateToProps, { logoutUser })(HomeLayout);
