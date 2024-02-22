import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  //   const [isMenu, setIsMenu] = useState(true);
  //   const handleClick = () => {
  //     setIsMenu((prevIsMenu) => !prevIsMenu);
  //   };

  return (
    <div>
      <Header />

      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
