import Header from "./Header";
import Sidebar from "../views/sidebar/Sidebar";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex flex-col justify-start bg-card m-0 px-4 py-2 w-full">
          {children}
        </main>
      </div>
    </>
  );
}
