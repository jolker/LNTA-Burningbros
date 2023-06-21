import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact component={Home} />
      </Routes>
    </div>
  );
}

export default App;
