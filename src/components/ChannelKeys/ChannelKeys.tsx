import { Button, Card, Table } from "antd";
import "./ChannelKeys.css";

const dataSource = [
  {
    title: "Personal",
    timestamp: new Date().toUTCString(),
    key: "1234 sample long id 6789",
  },
  {
    title: "Personal",
    timestamp: new Date().toUTCString(),
    key: "1234 sample long id 6789",
  },
  {
    title: "Personal",
    timestamp: new Date().toUTCString(),
    key: "1234 sample long id 6789",
  },
  {
    title: "Personal",
    timestamp: new Date().toUTCString(),
    key: "1234 sample long id 6789",
  },
  {
    title: "Personal",
    timestamp: new Date().toUTCString(),
    key: "1234 sample long id 6789",
  },
];

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Key",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Created",
    dataIndex: "timestamp",
    key: "timestamp",
  },
];

function ChannelKeys(props: { generateKey: () => void }) {
  function handleCreate() {
    props.generateKey();
  }

  return (
    <Card
      title={"Channel keys"}
      extra={
        <Button type="primary" onClick={handleCreate}>
          Create
        </Button>
      }
      className="channel-keys-card"
    >
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
    </Card>
  );
}

export default ChannelKeys;
