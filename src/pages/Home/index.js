import React from "react";
import { images } from "assets/images";
// import { Card, Row, Col } from "antd";

import HomeLayout from "layouts/HomeLayout";

function Home() {
  return (
    <HomeLayout>
      <div>
        <img src={images.CATEGORY_HEADER}  className="c-ma-10 c-w-100" />
      </div>
    </HomeLayout>
  );
}

export default Home;
