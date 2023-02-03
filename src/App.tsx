import { BrowserRouter } from "react-router-dom";
import { IndexPages } from "./pages/index.pages";
import { Header } from "./components/Header";
function App() {
  return (
    <>
      <main>
        <IndexPages />
      </main>
    </>
  );
}

export default App;
