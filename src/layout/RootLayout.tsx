import { Outlet } from "react-router-dom";
import React from "react";
import Header  from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default RootLayout

