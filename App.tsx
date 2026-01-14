import React, { useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Courses from "./pages/Courses";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Teegespraeche from "./pages/Teegespraeche";
import Privacy from "./pages/Privacy";
import Imprint from "./pages/Imprint";
import Satzung from "./pages/Satzung";
import GuelenMovement from "./pages/GuelenMovement";
import Volunteer from "./pages/Volunteer";
import VolunteerForm from "./pages/VolunteerForm";
import { Language, PageView } from "./types";

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>("tr");
  const [currentPage, setCurrentPage] = useState<PageView>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home lang={lang} setPage={setCurrentPage} />;
      case "about":
        return <About lang={lang} />;
      case "activities":
        return <Activities lang={lang} />;
      case "courses":
        return <Courses lang={lang} setPage={setCurrentPage} />;
      case "donate":
        return <Donate lang={lang} />;
      case "contact":
        return <Contact lang={lang} />;
      case "teegespraeche":
        return <Teegespraeche lang={lang} />;
      case "privacy":
        return <Privacy lang={lang} />;
      case "imprint":
        return <Imprint lang={lang} />;
      case "satzung":
        return <Satzung lang={lang} />;
      case "guelen":
        return <GuelenMovement lang={lang} />;
      case "volunteer":
        return <Volunteer lang={lang} setPage={setCurrentPage} />;
      case "volunteer-form":
        return <VolunteerForm lang={lang} />;
      default:
        return <Home lang={lang} setPage={setCurrentPage} />;
    }
  };

  return (
    <Layout
      lang={lang}
      setLang={setLang}
      setPage={setCurrentPage}
      currentPage={currentPage}
    >
      {renderPage()}
    </Layout>
  );
};

export default App;
