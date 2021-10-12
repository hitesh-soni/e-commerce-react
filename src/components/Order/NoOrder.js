import React from "react";
import { Button } from "antd";

function EmptyCart() {
  return (
    <div className="text-center c-mb-50 ">
      <img src="https://image.freepik.com/free-vector/man-shopping-supermarket_74855-7612.jpg" />{" "}
      <p className="c-mt-20 c-mb-50" style={{ letterSpacing: "10px" }}>
        NO PRODUCTS AVAILABLE IN YOUR ORDER HISTORY
      </p>
      <Button href="/" type="primary" size="large">
        View Categories
      </Button>
    </div>
  );
}

export default EmptyCart;
