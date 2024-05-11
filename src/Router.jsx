import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Team from "./components/Team";
import Rocket from "./components/Rocket";
import Research from "./components/Research";
import JoinUs from "./components/JoinUs";
import BlogDetail from "./components/BlogDetail";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/team" element={<Team />} />
      <Route path="/rockets" element={<Rocket />} />
      <Route path="/research" element={<Research />} />
      <Route path="/join" element={<JoinUs />} />
      <Route path="/blog-detail/:issue" element={<BlogDetail />} />
    </Routes>
  );
};

export default Routers;
