import { Empty } from "antd";
import "./NoData.css";

function NoData() {
  return (
    <div className="no-data-container">
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={"Feature comming soon!"}
      />
    </div>
  );
}

export default NoData;
