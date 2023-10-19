import React, { useContext } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { MetaContext } from "../../context/MetaContext";
import { IntroDataContext } from "../../context/IntroDataContext";
import { DataPortfolioContext } from "../../context/DataPortfolioContext";

export const Home = () => {
  let { meta } = useContext(MetaContext);
  let { introData } = useContext(IntroDataContext);
  let { dataPortfolio } = useContext(DataPortfolioContext);

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{"" + meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introData.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introData.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introData.animated.first,
                        introData.animated.second,
                        introData.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introData.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dataContainer">
          <h1 style={{fontSize: 50, marginTop: '100px', marginBottom: '50px', width: '100%'}}>Best Creations</h1>
          {dataPortfolio.map((creation, i) =>
            (i < 6 ? (
              <Link to={creation.link} key={i} className="po_item">
                <img src={creation.img} alt="" />
                <div className="content">
                  <p>{creation.description}</p>
                  <Link to={creation.link}>view project</Link>
                </div>
              </Link>
            ) : (
              <></>
            ))
          )}
        </div>
      </section>
    </HelmetProvider>
  );
};
