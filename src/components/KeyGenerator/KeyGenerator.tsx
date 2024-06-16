import { Button, Input, Modal } from "antd";
import { useId, useState } from "react";
import "./KeyGenerator.css";

function KeyGenerator(props: {
  showKeyGenerator: boolean;
  onClose: () => void;
  onGenerate: () => void;
}) {
  const [title, setTitle] = useState("");
  const [generateButtonText, setGenerateButtonText] = useState("Generate");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [inputStatus, setInputStatus] = useState<"" | "error">("");

  const inputId = useId();

  const handleOk = () => {
    if (title.length) {
      setGenerateButtonText("Generating");
      setConfirmLoading(true);
      setTimeout(() => {
        setTitle("");
        setGenerateButtonText("Generate");
        setConfirmLoading(false);
        props.onClose();
      }, 2000);
    } else {
      setInputStatus("error");
    }
  };

  const handleCancel = () => {
    props.onClose();
  };

  return (
    <Modal
      title="Key Generator"
      open={props.showKeyGenerator}
      onCancel={handleCancel}
      onOk={handleOk}
      okText={generateButtonText}
      confirmLoading={confirmLoading}
    >
      <div className="title-label">
        <label htmlFor={inputId}>
          Title <span style={{ color: "red" }}>*</span>
        </label>
      </div>
      <Input
        status={inputStatus}
        required
        id={inputId}
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
          if (inputStatus === "error") setInputStatus("");
        }}
      ></Input>
    </Modal>
  );
}

export default KeyGenerator;
