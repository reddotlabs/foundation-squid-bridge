import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../components/Header";
import { Backdrop } from "../components/Backdrop";

const RootLayout: React.FC = () => {
  return (
    <div className="relative">
      <div className="fixed z-0 inset-0 overflow-hidden">
        <Backdrop />
      </div>
      <ScrollRestoration />
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
