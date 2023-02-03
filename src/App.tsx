import { BrowserRouter } from "react-router-dom";
import { IndexPages } from "./pages/index.pages";
import { Header } from "./components/Header";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <IndexPages />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
