import { Card, Statistic } from "antd";
import { ArrowUpOutlined } from '@ant-design/icons';
import "./ChannelInfo.css"
import Chart from "react-google-charts";

const data = [
    ["Day", "Events", "Users"],
    ["Sun", 1000, 800],
    ["Mon", 1000, 700],
    ["Tue", 1170, 850],
    ["Thu", 660, 200],
    ["Fri", 1030, 1200],
    ["Sat", 1030, 1400],
];

const options = {
    title: "Events & Users ( 7 Days )",
    curveType: "function",
    legend: { position: "bottom" }
};

function ChannelInfo() {
    return (
        <Card title={"Channel Info"} className="channel-info-card">
            <div className="info-container">
                <div className="info-column">
                    <div>
                        <Statistic
                            className="statistic red"
                            title={<span className="tile-heading">Total Events (7 Days)</span>}
                            valueStyle={{ color: '#fff' }}
                            value={592812}
                        />
                        <br />
                        <Statistic
                            className="statistic blue"
                            title={<span className="tile-heading">Events (7 Days)</span>}
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#fff' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </div>
                    <div>
                        <Statistic
                            className="statistic green"
                            title={<span className="tile-heading">Users (7 Days)</span>}
                            valueStyle={{ color: '#fff' }}
                            value={9812}
                        />
                        <br />
                        <Statistic
                            className="statistic yellow"
                            title={<span className="tile-heading">Unique users (7 Days)</span>}
                            value={6.28}
                            precision={2}
                            valueStyle={{ color: '#fff' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </div>
                </div>
                <div className="graph-container">
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="250px"
                        data={data}
                        options={options}
                    />
                </div>
            </div>
        </Card>
    );
}

export default ChannelInfo;