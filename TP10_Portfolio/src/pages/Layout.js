import React from "react";
import { Outlet } from "react-router-dom";
import Headermain from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
    return (
        <>
            <Headermain />            
            <Outlet />
            <Footer />
        </>
    );
}
