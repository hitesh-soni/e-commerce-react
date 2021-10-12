import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { MailOutline, LockOutlined } from "@material-ui/icons";
import { loginValidate } from "validations/auth";
import HomeLayout from "layouts/HomeLayout";
import AuthLayout from "layouts/AuthLayout";
import { loginUser } from "store/actions/auth";
import { connect } from "react-redux";

function Login({ loginUser }) {
  const [isSubmitting, setSubmitting] = useState(false);

  /**
   * Handle form submit
   */
  const saveForm = (v) => {
    setSubmitting(true);
    loginUser(v.email, v.password).finally(() => setSubmitting(false));
  };

  return (
    <HomeLayout>
      <AuthLayout>
        <div className="text-left c-ml-20 c-mr-20">
          <div className="c-mb-25  text-center">
            <h2 className="c-mb-5">Sign In to Xendit</h2>
            <p>Please enter your credentials below.</p>
          </div>

          <Form
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={saveForm}
          >
            <Form.Item name="email" label="Email" rules={loginValidate.email}>
              <Input
                prefix={
                  <MailOutline fontSize="small" style={{ margin: "5px" }} />
                }
                placeholder="Email address"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={loginValidate.password}
            >
              <Input.Password
                prefix={
                  <LockOutlined fontSize="small" style={{ margin: "5px" }} />
                }
                placeholder="Password"
              />
            </Form.Item>

            <div className="auth-bottom-container">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                loading={isSubmitting}
              >
                Continue
              </Button>
            </div>
          </Form>
        </div>
      </AuthLayout>
    </HomeLayout>
  );
}

export default connect("", {
  loginUser,
})(Login);
