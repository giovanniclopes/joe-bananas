import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import BananaMaca from "./pages/blog/BananaMaca";
import BananaNanica from "./pages/blog/BananaNanica";
import BananaPrata from "./pages/blog/BananaPrata";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />

      {/* Bananas */}
      <Route path="/blog/banana-prata" element={<BananaPrata />} />
      <Route path="/blog/banana-maca" element={<BananaMaca />} />
      <Route path="/blog/banana-nanica" element={<BananaNanica />} />
    </Routes>
  );
}
