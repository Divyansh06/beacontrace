import React, { Children, useEffect, useState } from "react";
import { Table, Tree, Typography } from "antd";
import "./PropertyTree.css";

const columns = [
  {
    title: "Key",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
  },
];

const PropertyTree: React.FC = (props) => {
  const [tree, setTree] = useState([]);

  useEffect(() => {
    if (props.dataTree) {
      prepareData();
    }
  }, [props.dataTree]);

  function prepareData() {
    const result = [];
    let keyNode = 0;

    function parseTree(value, parent) {
      const keys = Object.keys(value);

      for (let key of keys) {
        if (typeof value[key] === "object") {
          const newParent = [];
          parent.push({
            title: <strong>{`${key}:`}</strong>,
            key: keyNode++,
            children: newParent,
          });
          parseTree(value[key], newParent);
        } else {
          parent.push({
            title: (
              <span>
                <strong>{key}:</strong> {value[key]}
              </span>
            ),
            key: keyNode++,
          });
        }
      }
    }
    parseTree(props.dataTree.properties, result);
    setTree(result);
  }

  return (
    <div className="properties-container">
      <Typography.Title level={5}>Properties</Typography.Title>
      <Tree
        selectable={false}
        treeData={tree}
        showLine
        style={{
          background: "#eee",
          padding: 20,
          width: "100%",
          borderRadius: 5,
        }}
      />
    </div>
  );
};

export default PropertyTree;
