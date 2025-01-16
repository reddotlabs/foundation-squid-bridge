import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../components/Header";

const RootLayout: React.FC = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
