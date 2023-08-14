import React from "react";
import { Outlet } from "react-router-dom";
import "../styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <div style={{position: 'fixed', width: '100%', top: 0, zIndex: 1000}}>
        <div className="header-advice">DISCOUNT OF 50% IN EVERY PRODUCT</div>
        <Header />
      </div>
      <Outlet />
      <Footer/>
    </>
  );
}
