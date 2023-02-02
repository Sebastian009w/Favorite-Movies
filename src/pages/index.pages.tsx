import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Batman } from "../components/Batman";

export function IndexPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Batman />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
