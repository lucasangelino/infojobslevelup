import "./App.css";
import { Card, Text, Metric } from "@tremor/react";
import { AppLayout } from "./components/layout/AppLayout";
import { PageLayout } from "./components/layout/PageLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Main } from "./pages/Main";
import { PowerUp } from "./pages/PowerUp";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/power-up/:powerUpId",
    element: <PowerUp />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <AppLayout>
      <PageLayout>
        <RouterProvider router={router} />
      </PageLayout>
    </AppLayout>
  );
}

export default App;
