import React from "react";
import { Layout, Row, Col } from "antd";
import { images } from "assets/images";
import Footer from "layouts/component/Footer";
// import { Link } from "react-router-dom";
// import { routes } from "config/routes";

const { Header, Content } = Layout;

function HomeLayout({ children }) {
  return (
    <Layout className="c-hv-100">
      <Header className="header">
        <Row justify="space-around">
          <Col className="text-left">
            <img src={images.LOGO} height="30" />
          </Col>
          <Col className="text-right ">
            {/* <Link to={routes.loginPage.path}>
              <h3 className="text-white font-18 c-font-w-5">Login / Sign up</h3>
            </Link> */}
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

export default HomeLayout;
