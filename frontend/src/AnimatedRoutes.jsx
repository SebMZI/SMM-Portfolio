import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";

import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/blog/*" element={<Error />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
