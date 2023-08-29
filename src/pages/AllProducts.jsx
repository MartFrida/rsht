import SmallDetail from "../components/AllProducts/SmallDetail";
import NavBar from "../components/NavBar"
import LineDropMenu from "../components/AllProducts/LineDropMenu";
import { useState } from "react";
import Catalog from "../components/AllProducts/Catalog";
export default function AllProducts() {
    const [showSearchWindow, setShowSearchWindow] = useState(false);
    function showTrue() {
        setShowSearchWindow(!showSearchWindow)
    }
    return(
        <div className=" pl-6 pr-6 bg-[#FAFAFF]">
            <NavBar showTrue={showTrue} showSearchWindow={showSearchWindow}/>
            <SmallDetail showSearchWindow={showSearchWindow}/>
            <LineDropMenu />
            <Catalog />
        </div>
    )
}