import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../components/Home";
import { Superman } from "../components/Superman";
import { WonderWoman } from "../components/WonderWoman";
import { Header } from "../components/Header";
export function IndexPages() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/superman" element={<Superman />}></Route>
        <Route path="/wonderWoman" element={<WonderWoman />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
