import { Routes, Route } from "react-router-dom";
import { Batman } from "../components/Batman";
import { Superman } from "../components/Superman";

export function IndexPages() {
  return (
    <Routes>
      <Route path="/" element={<Batman />}></Route>
      <Route path="/superman" element={<Superman />}></Route>
      <Route path="/wonderWoman" element={<Superman />}></Route>
    </Routes>
  );
}
