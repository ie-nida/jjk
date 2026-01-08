import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import HomePage from "./pages/HomePage";
import LoadingPage from "./pages/LoadingPage";
import StoryPage from "./pages/StoryPage";
import CharactersPage from "./pages/CharactersPage";
import AbilitiesPage from "./pages/AbilitiesPage";

export default function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  // ✅ show loading first, then the router
  if (isLoading) return <LoadingPage />;

  return (
    <div className="animate-page-fade">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/abilities" element={<AbilitiesPage />} />

          {/* ✅ fallback so it never goes blank */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}
