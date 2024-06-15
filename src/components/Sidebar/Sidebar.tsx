import { Layout, Menu, MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Sidebar.css";
import { useEffect, useState } from "react";

const { Sider } = Layout;
const SiderStyles: Record<string, string | number> = {
  overflow: "auto",
  height: "fit-content",
  minHeight: "100vh",
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
};

function AppSidebar(props: AppSidebarProps) {
  const [current, setCurrent] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setCurrent(location.pathname.split("/").reverse());
  }, [location]);

  const sidebarConfig: MenuProps["items"] = [
    {
      key: "overview",
      label: "Overview",
    },
    {
      key: "api-keys",
      label: "API Keys",
    },
    {
      key: "analytics",
      label: "Analytics",
    },
    {
      key: "channel",
      label: "Channels",
      children: props.channels.map((channel) => {
        return {
          key: channel.id,
          label: channel.name,
        };
      }),
    },
  ];

  const handleSidebar = (event: { keyPath: string[] }) => {
    let path = "";
    event.keyPath.reverse().forEach((item) => {
      path += item + "/";
    });
    navigate(path);
  };

  return (
    <Sider style={SiderStyles}>
      <img className="brand-logo" src={logo} alt="logo" />
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={current}
        defaultSelectedKeys={["overview"]}
        defaultOpenKeys={["channels"]}
        style={{ height: "100%", borderRight: 0 }}
        items={sidebarConfig}
        onClick={handleSidebar}
      />
    </Sider>
  );
}

export interface AppSidebarProps {
  channels: any[];
}

export default AppSidebar;
