import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, useLocation } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import AnimatedCursor from "../hooks/AnimatedCursor";
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

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
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
                        <BrowserRouter basename={process.env.PUBLIC_URL}>
                          <div className="cursor__dot">
                            <AnimatedCursor
                              innerSize={15}
                              outerSize={15}
                              color="255, 255 ,255"
                              outerAlpha={0.4}
                              innerScale={0.7}
                              outerScale={5}
                            />
                          </div>
                          <ScrollToTop>
                            <AppRoutes />
                          </ScrollToTop>
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
  );
}
