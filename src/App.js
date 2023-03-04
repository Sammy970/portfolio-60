import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AchievementsPage from "./pages/AchievementsPage";
import BlogsPage from "./pages/BlogsPage";
import AboutPage from "./pages/AboutPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/projectpage":
        title = "";
        metaDescription = "";
        break;
      case "/achievementspage":
        title = "";
        metaDescription = "";
        break;
      case "/blogspage":
        title = "";
        metaDescription = "";
        break;
      case "/aboutpage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/projectpage" element={<ProjectPage />} />

      <Route path="/achievementspage" element={<AchievementsPage />} />

      <Route path="/blogspage" element={<BlogsPage />} />

      <Route path="/aboutpage" element={<AboutPage />} />
    </Routes>
  );
}
export default App;
