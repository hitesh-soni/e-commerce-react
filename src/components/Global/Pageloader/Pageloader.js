import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import "./Pageloader.scss";

const antIcon = <LoadingOutlined spin />;

function Pageloader() {
  return (
    <div className="PageloaderStyles">
      <Spin tip="Loading..." indicator={antIcon} />
    </div>
  );
}

export default Pageloader;
