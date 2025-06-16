import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import WAFloat from "./Components/subComponents/WAFloat";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Header />
      <WAFloat />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
