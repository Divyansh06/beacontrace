import { Card } from "antd";
import './OverviewInfo.css'

function OverviewInfo() {
    return (
        <Card title={'Personal Account'} className={"overview-info-card"}>
            <div className={"overview-info-container"}>
                <div className={"overview-info"}>
                    <p>Total Channels</p>
                    <h1>0</h1>
                </div>
                <div className={"overview-info"}>
                    <p>Total Events (7 days)</p>
                    <h1>0</h1>
                </div>
            </div>
        </Card>
    );
}

export default OverviewInfo;