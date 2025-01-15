import { Navigate, createBrowserRouter } from "react-router-dom";
import { Bridge } from "./pages/bridge";
import RootLayout from "./pages/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Bridge />,
      },
      { path: "*", element: <Navigate to="/" replace={true} /> },
    ],
  },
]);
