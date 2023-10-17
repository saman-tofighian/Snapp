import React from "react";
import Header from "./Components/Header";
import Motto from "./Components/Motto";
import Downloads from "./Components/Downloads";
import Applications from "./Components/Applications";
import Banner from "./Components/Banner";
import Need from "./Components/Need";
import Cards from "./Components/Card";
import Register from "./Components/Register";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <section className="w-full overflow-x-hidden">
      <Header />
      <Motto />
      <Downloads />
      <Applications />
      <Banner />
      <Need />
      <Cards />
      <Register />
      <Footer />
    </section>
  );
}
