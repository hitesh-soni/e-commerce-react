import React from "react";
import "./SectionLoader.scss";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined spin />;

function SectionLoader(props) {
  return (
    <div className="SectionLoaderStyle" style={{ height: props.height + "px" }}>
      <Spin tip="Loading..." indicator={antIcon} />
    </div>
  );
}

export default SectionLoader;
