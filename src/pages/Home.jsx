import React from "react";
import Header from "../components/Header";
import Bestsellers from "../components/Bestsellers";
import WomenSection from "../components/WomenSection";
import NavBar from "../components/NavBar";
import { useState } from "react";
import WingedPhrase from "../components/WingedPhrase";
import ManCollection from "../components/ManCollection";
import FreeMind from "../components/FreeMind";
import AccessoriesRunners from "../components/AccessoriesRunners";
import ExamplesOtherClothes from "../components/ExamplesOtherClothes";

const Home = () => {
  const [showSearchWindow, setShowSearchWindow] = useState(false);
  function showTrue() {
      setShowSearchWindow(!showSearchWindow)
  }
  return (
    <div>
      <div className="bg-[#FAFAFF] pl-6 pr-6 w-[100%] h-[111px] fixed z-[3]">
        <NavBar showTrue={showTrue} showSearchWindow={showSearchWindow}/>
      </div>
      <Header showSearchWindow={showSearchWindow}/>
      <Bestsellers />
      <WomenSection />
      <WingedPhrase />
      <ManCollection />
      <FreeMind />
      <AccessoriesRunners />
      <ExamplesOtherClothes />
    </div>
  );
};

export default Home;
