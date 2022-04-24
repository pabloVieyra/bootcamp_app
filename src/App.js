// import StandardImageList from "./components/StandardImageList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Error from "./Pages/Error";
import Fauna from "./Pages/Fauna";
import Flora from "./Pages/Flora";

import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fauna" element={<Fauna />} />
        <Route path="/flora" element={<Flora />} />
        <Route path="+" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
