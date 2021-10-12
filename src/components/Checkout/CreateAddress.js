import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Row, Col, Button } from "antd";
import { addressValidate } from "validations/auth";
import { createAddress } from "store/actions/cart";
import { connect } from "react-redux";

function CreateAddress({ isModalVisible, setIsModalVisible, createAddress }) {
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [isModalVisible]);

  const onFinish = (val) => {
    setLoading(true);
    createAddress(val).finally(() => {
      handleCancel();
      setLoading(false);
    });
  };

  return (
    <Modal
      title="Create address"
      visible={isModalVisible}
      onCancel={handleCancel}
      maskClosable={false}
      footer={null}
    >
      <Form
        layout="vertical"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="address"
          label="Address"
          rules={addressValidate.address}
        >
          <Input placeholder="Enter Your Address" />
        </Form.Item>
        <Form.Item name="city" label="City" rules={addressValidate.city}>
          <Input placeholder="Enter Your City" />
        </Form.Item>
        <Form.Item name="state" label="State" rules={addressValidate.state}>
          <Input placeholder="Enter Your State" />
        </Form.Item>
        <Form.Item
          name="country"
          label="Country"
          rules={addressValidate.country}
        >
          <Input placeholder="Enter Your Country" />
        </Form.Item>
        <Form.Item
          name="pin_code"
          label="Zip code"
          rules={addressValidate.zip_code}
        >
          <Input placeholder="Enter Your Zip code" />
        </Form.Item>
        <Form.Item>
          <div className="submitBtn">
            <Row justify="end">
              <Col>
                <Button
                  className="c-mr-10"
                  type="dafault"
                  ghost
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </Col>
              <Col>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Done
                </Button>
              </Col>
            </Row>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default connect("", { createAddress })(CreateAddress);
