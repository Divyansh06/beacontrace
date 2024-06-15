import { Badge, Card, List } from "antd";
import "./RecentEvents.css";

const listData = [
    {
        id: "1",
        name: 'Sales page visited!',
        channel: 'Sales',
        timeStamp: new Date(),
    },
    {
        id: "2",
        name: 'Create new lead button clicked!',
        channel: 'Sales',
        timeStamp: new Date(),
    },
    {
        id: "3",
        name: 'Clicked launch new marketing campaign!',
        channel: 'Marketing',
        timeStamp: new Date(),
    },
    {
        id: "4",
        name: 'New user signed up!',
        channel: 'Reporting',
        timeStamp: new Date(),
    },
    {
        id: "5",
        name: 'New user signed up!',
        channel: 'Reporting',
        timeStamp: new Date(),
    },
    {
        id: "6",
        name: 'Clicked launch new marketing campaign!',
        channel: 'Marketing',
        timeStamp: new Date(),
    },
    {
        id: "7",
        name: 'Marketing page visited!',
        channel: 'Marketing',
        timeStamp: new Date(),
    },
    {
        id: "8",
        name: 'Sales page visited!',
        channel: 'Sales',
        timeStamp: new Date(),
    },
    {
        id: "9",
        name: 'Create new lead button clicked!',
        channel: 'Sales',
        timeStamp: new Date(),
    },
    {
        id: "10",
        name: 'Clicked launch new marketing campaign!',
        channel: 'Marketing',
        timeStamp: new Date(),
    }
];

const { Item } = List;
const { Ribbon } = Badge

function RecentEvents() {
    function createListItem(item) {
        return (
            <Ribbon text={item.channel}>
                <Item key={item.id}>
                    <Item.Meta
                        title={item.name}
                        description={item.timeStamp.toUTCString()}
                    />
                </Item>
            </Ribbon>
        )
    }

    return (
        <Card title={"Recent Events"} className="recent-event-card">
            <List
                dataSource={listData}
                renderItem={createListItem}
            />
        </Card>
    );
}

export default RecentEvents;