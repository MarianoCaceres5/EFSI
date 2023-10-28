import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/Home";
import { Portfolio } from "../pages/Portfolio";
import { About } from "../pages/About";
import { Favorites } from "../pages/Favorites";
import Creation from "../pages/Creation";
import { Socialicons } from "../components/SocialIcons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Layout from "../pages/Layout";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/portfolio/:creationId" element={<Creation />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Route>
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
