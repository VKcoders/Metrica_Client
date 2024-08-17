import { Routes, Route } from "react-router-dom";
// import Login from "./Pages/Login";
// import Pages from "./Pages/Manager";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<Login />} /> */}
      {/* <Route path="/dashboard" element={<Pages />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes;
