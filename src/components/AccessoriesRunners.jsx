import { useState } from "react"

import ManRunner from "../components/man-runner.png"
import GroupRunners from "../components/group-runners.png"

export default function AccessoriesRunners() {
    const [isHovered, setIsHovered] = useState(false)
    function changeHover() {
        setIsHovered(!isHovered)
    }
    return (
        <>
            <div className="margin-top-man-section">
                <div className="info-man-section">
                    <h2 className="women-collectio-header text-black">Accessories for<br />Runners</h2>
                    <p className="comfort-running-man text-black">Choose our accessories that allow you to<br />concentrate on running and not think about<br />gears.</p>
                    <button className="shop-btn-man flex flex-row items-center" onMouseEnter={changeHover} onMouseLeave={changeHover}>
                        <span className="">Discover</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
                            <path d="M11 10.3783L1 2L7.87338 10.3783L1 19L11 10.3783Z" fill={`${isHovered ? '#EE5622' : 'black'}`} stroke={`${isHovered ? '#EE5622' : 'black'}`} strokeWidth="0.8"/>
                            <path d="M19 10.364L6 1L14.9354 10.364L6 20L19 10.364Z" fill={`${isHovered ? '#EE5622' : 'black'}`} stroke={`${isHovered ? '#EE5622' : 'black'}`} strokeWidth="0.8"/>
                        </svg>
                    </button>
                </div>
                <div className="p-6 bg-section">
                    <div className="images-container-bg flex flex-row gap-4">
                        <div className="women-runner"><img src={ManRunner} alt="Women Runner" /></div>
                        <div className="women-runner-big"><img src={GroupRunners} alt="Women Runner Closer"/></div>
                    </div>
                </div>
            </div>
        </>
    )
}
