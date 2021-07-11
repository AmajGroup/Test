import { DownOutlined } from "@ant-design/icons";
export default function Header(props) {
  return (
    <>
      <header className="bg-app h-10 text-secondary px-2 flex items-center justify-end">
        <p className="mx-2">Babak Arghavan</p>
        <DownOutlined />
      </header>
    </>
  );
}
