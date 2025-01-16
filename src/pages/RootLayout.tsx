import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../components/Header";

const RootLayout: React.FC = () => {
  return (
    <div className="w-100vw overflow-x-hidden">
      <ScrollRestoration />
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
