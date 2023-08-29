import { useState } from "react"
import boySneakers from "../img/man-sneakers.png"
import boyTShirt from "../img/man-t-shirt.png"
import boyShortsAndTights from "../img/man-shorts-tights.png"
import ManRunCity from "../img/run-man-in-city.png"
import ManRunOutCity from "../img/run-man-out-of-city.png"

function BtnComponent(){
    return (
        <>
            <button className="btn-grab-your absolute top-[50%] right-[25%] rounded-2xl text-xl font-medium text-white">Grab Your</button>
        </>
    )
}
export default function ManCollection() {
    const [isHovered, setIsHovered] = useState(false)
    function changeHover() {
        setIsHovered(!isHovered)
    }

    const [imgHovered, setImgHovered] = useState(null);
    const setIndexImg = (index) => setImgHovered(index);
    return (
        <>
            <div className="grid grid-cols-2 gap-[142px] mx-auto pl-[142px] pr-[24px]">
                <div className="flex flex-column gap-[168.6px] h-[761px]">
                    <div>
                        <h2 className="font-[400] text-[48px] man-collection-header font-riposte mb-8">Man Collection</h2>
                        <p className="mb-6">Embrace both strength and style in your training<br />and races with our collection of running attire,<br />ensuring utmost comfort and fashion-forward<br />performance.</p>
                        <button className="shop-btn-man flex flex-row items-center" onMouseEnter={changeHover} onMouseLeave={changeHover}>
                            <span className="">Discover</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
                                <path d="M11 10.3783L1 2L7.87338 10.3783L1 19L11 10.3783Z" fill={`${isHovered ? '#EE5622' : 'black'}`} stroke={`${isHovered ? '#EE5622' : 'black'}`} strokeWidth="0.8"/>
                                <path d="M19 10.364L6 1L14.9354 10.364L6 20L19 10.364Z" fill={`${isHovered ? '#EE5622' : 'black'}`} stroke={`${isHovered ? '#EE5622' : 'black'}`} strokeWidth="0.8"/>
                            </svg>
                        </button>
                    </div>
                    <div className="w-100% h-[337px]"><img src={ManRunOutCity} alt="Running Man" className="h-[100%] object-cover w-[100%]"/></div>
                </div>
                <div className="h-[761px] w-[100%]"><img src={ManRunCity} alt="Running Man" className="h-[100%] w-[100%] object-cover"/></div>
            </div>

            <div className="pl-14 pr-14 mt-[76px] exampes-clothes">
                <div className="describtion-clothes flex flex-row justify-between w-[100%] flex-wrap">
                    <div className="flex flex-column gap-[56px] t-shirt-card">
                        <div className="border-l-2 border-[#EE5622] pl-6">
                            <p className="font-[400] text-[31px] font-riposte mb-[16px]">T-shirts</p>
                            <p>Perfect blend of comfort and<br />functionality engineered to keep you<br />cool and focused on your stride.</p>
                        </div>
                        <button className="relative pl-6"  onMouseEnter={()=>setIndexImg(4)} onMouseLeave={()=>setIndexImg(null)}>
                                <img src={boyTShirt} alt="Man in T-Short"/>
                                {imgHovered === 4 && < BtnComponent />}
                        </button>
                    </div>
                    <div className="ml-8 mr-8 flex flex-column gap-[56px] sneakers-card">
                        <div className="border-l-2 border-[#EE5622] pl-6">
                            <p className="font-[400] text-[31px] font-riposte mb-[16px]">Sneakers</p>
                            <p>Step into your perfect stride with our<br />curated collection of high-<br />performance running shoes.</p>
                        </div>
                        <button className="relative pl-6" onMouseEnter={()=>setIndexImg(5)} onMouseLeave={()=>setIndexImg(null)}>
                                <img src={boySneakers} alt="Man Sneakers"/>
                                {imgHovered === 5 && < BtnComponent />}
                        </button>
                    </div>
                    <div className="flex flex-column gap-[56px] last-card-women">
                        <div className="border-l-2 border-[#EE5622] pl-6">
                            <p className="font-[400] text-[31px] font-riposte mb-[16px]">Shorts & tights</p>
                            <p>Discover range of high-performance<br />running shorts and tights, designed<br />for both comfort and speed.</p>
                        </div>
                        <button className="relative pl-6" onMouseEnter={()=>setIndexImg(6)} onMouseLeave={()=>setIndexImg(null)}>
                                <img src={boyShortsAndTights} alt="Man Shorts And Tights"/>
                                {imgHovered === 6 && < BtnComponent />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}