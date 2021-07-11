import { Button } from "antd";
import {
  CheckOutlined,
  DownOutlined,
  Loading3QuartersOutlined,
} from "@ant-design/icons";
import ProductTable from "./ProductTable";

export default function Products(props) {
  return (
    <div>
      <p className="text-sm">Business> Product> Product Weight & Packaging</p>
      <p className="text-lg mt-8">White Misso</p>
      <p className="text-sm text-third">Draft Editing</p>
      <div className="flex my-7 items-center justify-between">
        <Button className="bg-white w-40 h-10 rounded-t flex items-center justify-around">
          <Loading3QuartersOutlined className="mx-2" />
          <p>Food Value</p>
          <DownOutlined />
        </Button>
        <Button className="bg-green-blue w-40 h-10 rounded flex items-center justify-around text-white">
          Final Submit <CheckOutlined />
        </Button>
      </div>
      <p className="text-app text-base mb-3  ">Primary Packaging</p>
    </div>
  );
}
