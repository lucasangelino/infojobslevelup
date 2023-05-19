import "./App.css";
import { Card, Text, Metric } from "@tremor/react";
import { AppLayout } from "./components/layout/AppLayout";
import { PageLayout } from "./components/layout/PageLayout";

import { Main } from "./pages/Main";

function App() {
  return (
    <AppLayout>
      <PageLayout>
        <Main />
      </PageLayout>
    </AppLayout>
  );
}

export default App;
