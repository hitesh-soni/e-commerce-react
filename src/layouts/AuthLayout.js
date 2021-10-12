import React from "react";
import { Layout, Card } from "antd";
import { images } from "assets/images";

const { Content } = Layout;

function AuthLayout({ children }) {
  return (
    <Layout className="site-layout-background c-h-100 bg-white">
      <Content className="c-m-auto text-center">
        <Card
          className="c-mt-50 c-mb-50"
          title={<img src={images.LOGO_DARK} height="30" />}
          bordered={false}
          style={{ width: 500 }}
        >
          {children}
        </Card>
      </Content>
    </Layout>
  );
}

export default AuthLayout;
