import { Button } from "antd";
import {
  DownOutlined,
  MenuOutlined,
  LeftOutlined,
  SettingOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import "./Sidebar.scss";
import { ReactComponent as Logo } from "../../assets/icons/SpecReady.svg";

export default function Sidebar(props) {
  const {} = props;

  return (
    <aside className="w-80 min-h-screen bg-app px-4 text-secondary">
      <div className="flex items-center justify-between mt-2 mb-4">
        <Logo />
        <MenuOutlined />
      </div>
      <div className="w-100 flex items-center justify-between my-3">
        <div className="flex items-center">
          <BarChartOutlined />
          <Button className="sidebar__main-btn">Bussines</Button>
        </div>
        <DownOutlined />
      </div>
      <div className="flex flex-col items-start">
        <Button className="sidebar__item">Customers</Button>
        <Button className="sidebar__item">Suppliers</Button>
        <Button className="sidebar__item">Users</Button>
        <Button className="sidebar__item">Certificates</Button>
        <Button className="sidebar__item bg-pink">Products</Button>
      </div>
      <div className="w-100 flex items-center justify-between my-3">
        <div className="flex items-center">
          <SettingOutlined />
          <Button className="sidebar__main-btn">Settings</Button>
        </div>
        <LeftOutlined />
      </div>
    </aside>
  );
}
