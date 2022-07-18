import Home from './pages/home/index'
import AboutUs from './pages/aboutUs/index'
import Blog from './pages/blog/index'
import GithubPage from './pages/github/index'
import Navbar from './components/navBar/index'
import Footer from './components/footer/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="github" element={<GithubPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
