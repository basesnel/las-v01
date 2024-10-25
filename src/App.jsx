import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main/Main";
import Sandbox from "./pages/Sandbox/Sandbox";
import NotFound from "./pages/NotFound/NotFound";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
