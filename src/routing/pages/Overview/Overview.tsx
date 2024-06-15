import OverviewInfo from "../../../components/OverviewInfo/OverviewInfo";
import RecentEvents from "../../../components/RecentEvents/RecentEvents";

function Overview() {
    return (
        <div className="overview-container">
            <OverviewInfo />
            <RecentEvents />
        </div>
    );
}

export default Overview;