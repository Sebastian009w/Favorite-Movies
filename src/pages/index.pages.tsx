import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Superman } from "../components/Superman";
import { WonderWoman } from "../components/WonderWoman";
export function IndexPages() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/superman" element={<Superman />}></Route>
      <Route path="/wonderWoman" element={<WonderWoman />}></Route>
    </Routes>
  );
}
