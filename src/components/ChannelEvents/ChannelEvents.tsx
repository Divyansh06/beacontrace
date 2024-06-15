import { useState } from "react";
import { Button, Card, List } from "antd";
import "./ChannelEvents.css";
import EventPreview from "../EventPreview/EventPreview";

const listData = [
  {
    id: "1",
    name: "Sales page visited!",
    channel: "Sales",
    timeStamp: new Date(),
  },
  {
    id: "2",
    name: "Create new lead button clicked!",
    channel: "Sales",
    timeStamp: new Date(),
  },
  {
    id: "3",
    name: "Clicked launch new marketing campaign!",
    channel: "Marketing",
    timeStamp: new Date(),
  },
  {
    id: "4",
    name: "New user signed up!",
    channel: "Reporting",
    timeStamp: new Date(),
  },
  {
    id: "5",
    name: "New user signed up!",
    channel: "Reporting",
    timeStamp: new Date(),
  },
  {
    id: "6",
    name: "Clicked launch new marketing campaign!",
    channel: "Marketing",
    timeStamp: new Date(),
  },
  {
    id: "7",
    name: "Marketing page visited!",
    channel: "Marketing",
    timeStamp: new Date(),
  },
  {
    id: "8",
    name: "Sales page visited!",
    channel: "Sales",
    timeStamp: new Date(),
  },
  {
    id: "9",
    name: "Create new lead button clicked!",
    channel: "Sales",
    timeStamp: new Date(),
  },
  {
    id: "10",
    name: "Clicked launch new marketing campaign!",
    channel: "Marketing",
    timeStamp: new Date(),
  },
  {
    id: "11",
    name: "Sales page visited!",
    channel: "Sales",
    timeStamp: new Date(),
  },
  {
    id: "12",
    name: "Create new lead button clicked!",
    channel: "Sales",
    timeStamp: new Date(),
  },
  {
    id: "13",
    name: "Clicked launch new marketing campaign!",
    channel: "Marketing",
    timeStamp: new Date(),
  },
  {
    id: "14",
    name: "New user signed up!",
    channel: "Reporting",
    timeStamp: new Date(),
  },
  {
    id: "15",
    name: "New user signed up!",
    channel: "Reporting",
    timeStamp: new Date(),
  },
];

const { Item } = List;

function ChannelEvents() {
  const [preview, setPreview] = useState<string | null>(null);

  function showPreview(eventId: string) {
    setPreview(eventId);
  }

  function hidePreview() {
    setPreview(null);
  }

  function createListItem(item) {
    return (
      <Item key={item.id}>
        <Item.Meta
          title={item.name}
          description={item.timeStamp.toUTCString()}
        />
        <Button type="primary" onClick={() => showPreview(item.id)}>
          Preview
        </Button>
      </Item>
    );
  }

  return (
    <div className="event-container">
      <Card title={"Events"} className="event-list-card">
        <List dataSource={listData} renderItem={createListItem} />
      </Card>
      {preview && <EventPreview eventId={preview} hidePreview={hidePreview} />}
    </div>
  );
}

export default ChannelEvents;
