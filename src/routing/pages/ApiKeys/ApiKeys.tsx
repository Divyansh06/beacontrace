import { useState } from "react";
import ChannelKeys from "../../../components/ChannelKeys/ChannelKeys";
import KeyGenerator from "../../../components/KeyGenerator/KeyGenerator";
import UserKeys from "../../../components/UserKeys/UserKeys";

function ApiKeys() {
  const [showKeyGenerator, setShowKeyGenerator] = useState(false);

  function handleClose() {
    setShowKeyGenerator(false);
  }

  function handleGenerate() {
    setShowKeyGenerator(false);
  }

  function generateKey() {
    setShowKeyGenerator(true);
  }

  return (
    <>
      <UserKeys generateKey={generateKey} />
      <ChannelKeys generateKey={generateKey} />
      <KeyGenerator
        showKeyGenerator={showKeyGenerator}
        onClose={handleClose}
        onGenerate={handleGenerate}
      />
    </>
  );
}

export default ApiKeys;
