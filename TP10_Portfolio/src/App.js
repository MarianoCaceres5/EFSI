import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";
import { Favorites } from "./pages/Favorites";
import Creation from "./pages/Creation";
import Layout from "./pages/Layout";
import "./style.css";
import SocialProfilsProvider from "./context/SocialProfilsContext";
import LogoTextProvider from "./context/LogoTextContext";
import DataAboutProvider from "./context/DataAboutContext";
import MetaProvider from "./context/MetaContext";
import WorkTimeLineProvider from "./context/WorkTimeLineContext";
import SkillsProvider from "./context/SkillsContext";
import ServicesProvider from "./context/ServicesContext";
import ContactConfigProvider from "./context/ContactConfigContext";
import IntroDataProvider from "./context/IntroDataContext";
import DataPortfolioProvider from "./context/DataPortfolioContext";
import FavoritesProvider from "./context/FavoritesContext";


export default function App() {
  return (
    <FavoritesProvider>
      <DataPortfolioProvider>
        <IntroDataProvider>
          <ContactConfigProvider>
            <ServicesProvider>
              <SkillsProvider>
                <WorkTimeLineProvider>
                  <MetaProvider>
                    <DataAboutProvider>
                      <LogoTextProvider>
                        <SocialProfilsProvider>
                          <BrowserRouter >
                            <Routes>
                              <Route path="/" element={<Layout />}>
                                <Route index element={<Home />}></Route>
                                <Route path="/about" element={<About />}></Route>
                                <Route path="/portfolio" element={<Portfolio />}></Route>
                                <Route path="/portfolio/:creationId" element={<Creation />}></Route>
                                <Route path="/favorites" element={<Favorites />}></Route>
                                <Route path="*" element={<Home />}></Route>
                              </Route>
                            </Routes>
                            {/* <AppRoutes /> */}
                          </BrowserRouter>
                        </SocialProfilsProvider>
                      </LogoTextProvider>
                    </DataAboutProvider>
                  </MetaProvider>
                </WorkTimeLineProvider>
              </SkillsProvider>
            </ServicesProvider>
          </ContactConfigProvider>
        </IntroDataProvider>
      </DataPortfolioProvider>
    </FavoritesProvider>
  );
}
