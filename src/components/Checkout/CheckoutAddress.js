import React, { useState } from "react";
import { Col, Row, Card, Radio, Button } from "antd";
import { connect } from "react-redux";
import NoAddress from "./NoAddress";
import CreateAddress from "./CreateAddress";

function CheckoutAddress({
  address,
  user,
  selectedAddress,
  setselectedAddress,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div>
      <Row justify="space-between" className="c-mb-12">
        <Col>
          <h4>Select Address</h4>
        </Col>
        <Col>
          <Button onClick={showModal}>Create Address</Button>
        </Col>
      </Row>

      {!address.length ? (
        <NoAddress />
      ) : (
        address.map((p, i) => {
          return (
            <Card
              className="c-mb-30"
              key={i}
              style={{ width: "600px", cursor: "pointer" }}
              onClick={() => setselectedAddress(i)}
            >
              <Row>
                <Col>
                  <Radio checked={selectedAddress === i}></Radio>
                </Col>
                <Col className="c-ml-20" style={{ width: "380px" }}>
                  <h5>
                    {user?.firstname} {user?.lastname}
                  </h5>
                  <p>{p.address}</p>
                  <p>
                    {p.city}, {p.state} ({p.pin_code})
                  </p>
                  <p>{p.country}</p>
                </Col>
              </Row>
            </Card>
          );
        })
      )}
      <CreateAddress
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
}

const mapStateToProps = ({ cart, auth }) => ({
  address: cart.address,
  user: auth.user,
});

export default connect(mapStateToProps, {})(CheckoutAddress);
