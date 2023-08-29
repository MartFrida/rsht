import { useState } from "react";

import Buf from "../img/buffs.png"
import Hat from "../img/hats.png"
import Socks from "../img/socks.png"

function BtnComponent(){
    return (
        <>
            <button className="btn-grab-your absolute top-[50%] right-[25%] rounded-2xl text-xl font-medium text-white">Grab Your</button>
        </>
    )
}

export default function ExamplesOtherClothes() {
    const [imgHovered, setImgHovered] = useState(null);
    const setIndexImg = (index) => setImgHovered(index);
    return(
        <>
            <div className="pl-14 pr-14 mt-[76px] exampes-clothes mb-24">
                <div className="describtion-clothes flex flex-row justify-between w-[100%] flex-wrap">
                    <div className="flex flex-column gap-[56px] t-shirt-card">
                        <div className="border-l-2 border-[#EE5622] pl-6">
                            <p className="font-[400] text-[31px] font-riposte mb-[16px]">Hats</p>
                            <p>Perfect blend of comfort and<br />functionality engineered to keep you<br />cool and focused on your stride.</p>
                        </div>
                        <button className="relative pl-6"  onMouseEnter={()=>setIndexImg(4)} onMouseLeave={()=>setIndexImg(null)}>
                                <img src={Hat} alt="Boy in T-Short"/>
                                {imgHovered === 4 && < BtnComponent />}
                        </button>
                    </div>
                    <div className="ml-8 mr-8 flex flex-column gap-[56px] sneakers-card">
                        <div className="border-l-2 border-[#EE5622] pl-6">
                            <p className="font-[400] text-[31px] font-riposte mb-[16px]">Socks</p>
                            <p>Step into your perfect stride with our<br />curated collection of high-<br />performance running shoes.</p>
                        </div>
                        <button className="relative pl-6" onMouseEnter={()=>setIndexImg(5)} onMouseLeave={()=>setIndexImg(null)}>
                                <img src={Socks} alt="Girl in Shorts"/>
                                {imgHovered === 5 && < BtnComponent />}
                        </button>
                    </div>
                    <div className="flex flex-column gap-[56px] last-card-women">
                        <div className="border-l-2 border-[#EE5622] pl-6">
                            <p className="font-[400] text-[31px] font-riposte mb-[16px]">Buffs</p>
                            <p>Discover range of high-performance<br />running shorts and tights, designed<br />for both comfort and speed.</p>
                        </div>
                        <button className="relative pl-6" onMouseEnter={()=>setIndexImg(6)} onMouseLeave={()=>setIndexImg(null)}>
                                <img src={Buf} alt="Girl in Shorts"/>
                                {imgHovered === 6 && < BtnComponent />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}