import { Layout, Tag, Typography } from "antd";
import "./Header.css";

const { Header } = Layout;
const { Title } = Typography;

const HeaderStyle: Record<string, string | number> = {
  position: "sticky",
  top: 0,
  zIndex: 1,
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: "10px",
};

function AppHeader(props: AppHeaderProps) {
  return (
    <Header style={HeaderStyle}>
      <Title level={4} className="header-title">
        <p className="header-title-text">{props.title}</p>
      </Title>
      <Tag color="#f50" className="tag">
        <p className="header-title-text">{props.tier}</p>
      </Tag>
    </Header>
  );
}

export interface AppHeaderProps {
  title: string;
  tier: string;
}

export default AppHeader;
