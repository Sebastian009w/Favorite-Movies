import { BrowserRouter } from "react-router-dom";
import { IndexPages } from "./pages/index.pages";
import { Header } from "./components/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="bg-gray-900">
          <IndexPages />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
