import WomenRunner from "../img/women-runner.png"
import WomenRunnerBig from "../img/women-runner-big.png"
import girlShorts from "../img/girl-t-shirt.png"
import girlSneakers from "../img/girl-sneakers.png"
import girlShortsAndTights from "../img/girl-shorts.png"
import { useState } from "react"

function BtnComponent(){
    return (
        <>
            <button className="btn-grab-your absolute top-[50%] right-[25%] rounded-2xl text-xl font-medium text-white">Grab Your</button>
        </>
    )
}

export default function WomenSection() {
    const [isHovered, setIsHovered] = useState(false)
    function changeHover() {
        setIsHovered(!isHovered)
    }

    const [imgHovered, setImgHovered] = useState(null);
    const setIndexImg = (index) => setImgHovered(index);

    return(
        <>
            <div className="margin-top-women-section">
                <div className="info-women-section">
                    <h2 className="women-collectio-header">Women Collection</h2>
                    <p className="comfort-running">Choose our stylish and comfortable running<br></br>clothes to be a strong and fashionable during<br></br>the training and race.</p>
                    <button className="shop-btn-women flex flex-row items-center" onMouseEnter={changeHover} onMouseLeave={changeHover}>
                        Discover
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
                            <path d="M11 10.3783L1 2L7.87338 10.3783L1 19L11 10.3783Z" fill={`${isHovered ? '#EE5622' : 'white'}`} stroke={`${isHovered ? '#EE5622' : 'white'}`} strokeWidth="0.8"/>
                            <path d="M19 10.364L6 1L14.9354 10.364L6 20L19 10.364Z" fill={`${isHovered ? '#EE5622' : 'white'}`} stroke={`${isHovered ? '#EE5622' : 'white'}`} strokeWidth="0.8"/>
                        </svg>
                    </button>
                </div>
                <div className="p-6 bg-section">
                    <div className="images-container-bg flex flex-row gap-4">
                        <div className="women-runner-big"><img src={WomenRunnerBig} alt="Women Runner" /></div>
                        <div className="women-runner"><img src={WomenRunner} alt="Women Runner Closer"/></div>
                    </div>
                </div>
            </div>
            <div className="pl-14 pr-14 mt-[16px] exampes-clothes">
                <div className="describtion-clothes flex flex-row justify-between w-[100%] flex-wrap">
                    <div className="flex flex-column gap-[56px] t-shirt-card">
                        <div className="border-l-2 border-[#EE5622] pl-6">
                            <p className="font-[400] text-[31px] font-riposte mb-[16px]">T-shirts</p>
                            <p>Perfect blend of comfort and<br />functionality engineered to keep you<br />cool and focused on your stride.</p>
                        </div>
                        <button className="relative pl-6"  onMouseEnter={()=>setIndexImg(1)} onMouseLeave={()=>setIndexImg(null)}>
                                <img src={girlShorts} alt="Girl in Shorts"/>
                                {imgHovered === 1 && < BtnComponent />}
                        </button>
                    </div>
                    <div className="ml-8 mr-8 flex flex-column gap-[56px] sneakers-card">
                        <div className="border-l-2 border-[#EE5622] pl-6">
                            <p className="font-[400] text-[31px] font-riposte mb-[16px]">Sneakers</p>
                            <p>Step into your perfect stride with our<br />curated collection of high-<br />performance running shoes.</p>
                        </div>
                        <button className="relative pl-6" onMouseEnter={()=>setIndexImg(2)} onMouseLeave={()=>setIndexImg(null)}>
                                <img src={girlSneakers} alt="Girl in Shorts"/>
                                {imgHovered === 2 && < BtnComponent />}
                        </button>
                    </div>
                    <div className="flex flex-column gap-[56px] last-card-women">
                        <div className="border-l-2 border-[#EE5622] pl-6">
                            <p className="font-[400] text-[31px] font-riposte mb-[16px]">Shorts & tights</p>
                            <p>Discover range of high-performance<br />running shorts and tights, designed<br />for both comfort and speed.</p>
                        </div>
                        <button className="relative pl-6" onMouseEnter={()=>setIndexImg(3)} onMouseLeave={()=>setIndexImg(null)}>
                                <img src={girlShortsAndTights} alt="Girl in Shorts"/>
                                {imgHovered === 3 && < BtnComponent />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}