import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import "./App.css";
import SocialProfilsProvider from "../context/SocialProfilsContext";
import LogoTextProvider from "../context/LogoTextContext";
import DataAboutProvider from "../context/DataAboutContext";
import MetaProvider from "../context/MetaContext";
import WorkTimeLineProvider from "../context/WorkTimeLineContext";
import SkillsProvider from "../context/SkillsContext";
import ServicesProvider from "../context/ServicesContext";
import ContactConfigProvider from "../context/ContactConfigContext";
import IntroDataProvider from "../context/IntroDataContext";
import DataPortfolioProvider from "../context/DataPortfolioContext";
import FavoritesProvider from "../context/FavoritesContext";

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
                            <AppRoutes />
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
