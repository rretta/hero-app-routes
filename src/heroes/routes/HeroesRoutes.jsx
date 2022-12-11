import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../../ui/components";
import { DCPage, MarvelPage, HeroPage, SearchHeroPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
<div className="container">


      <Routes>

        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />
        <Route path="search" element={<SearchHeroPage />} />
        <Route path="hero/:heroId" element={<HeroPage />} />



        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>

</div>

    </>
  );
};
