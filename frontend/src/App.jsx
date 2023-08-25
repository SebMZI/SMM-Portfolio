import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
