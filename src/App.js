import Base from "./jsx/layout/base/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ...............Pages ...............
import Homepage from "./jsx/pages/homepage/Homepage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
