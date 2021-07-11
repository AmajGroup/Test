import { Table, Tag, Space } from "antd";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
];

const columns = [
  {
    title: "Component Description",
    key: "Component Description",
  },
  {
    title: "Material",
    key: "Material",
  },
  {
    title: "Supplier name",
    key: "address",
  },
  {
    title: "Height (mm)",
    key: "tags",
  },
  {
    title: "Width(mm)",
    key: "action",
  },
  { title: "Length(mm)", key: "Length(mm)" },
  { title: "Diameter(mm)", key: "Diameter(mm)" },
  { title: "Gauge or Thickeness (μm)", key: "Gauge or Thickeness (μm)" },
];

export default function ProductTable(props) {
  return <Table className="text-sm" dataSource={data} columns={columns} />;
}
