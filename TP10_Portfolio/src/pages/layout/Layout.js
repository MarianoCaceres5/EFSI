import React from "react";
import { Outlet } from "react-router-dom";
import Headermain from "../../components/header";
import Footer from "../../components/footer";

export default function Layout() {
    return (
        <>
            <Headermain />
            <Outlet />
            <Footer />
        </>
    );
}
