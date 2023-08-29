import Heard from "./Heard"
import {useState} from 'react'

import Slider from "react-slick";
import netureTShirt from "../img/netureTShirt.png"
import sunSetTshirt from "../img/sunsetTShirt.png"
import forestRun from "../img/forest.png"
import nightTshirt from "../img/nightTShirt.png"
import activeArrow from "../img/arrow-active.svg" //right-default
import nonActiveArrow from "../img/arrow-right-none-active.svg" //rigth-default
import activArrowLeft from "../img/arrow-left-non-active.svg"
import nonActivArrowLeft from "../img/activeArrovLeft.svg"

function NextArrowComponent(props) {
    const { className, onClick } = props;
    const { isHovered, hover } = props;
    return (
      <div>
            {isHovered ?
                <img src={activeArrow} alt="Prev" className={className} onClick={onClick} onMouseEnter={hover} onMouseLeave={hover}/> 
                : 
                <img src={nonActiveArrow} alt="Prev" className={className} onClick={onClick} onMouseEnter={hover} onMouseLeave={hover}/>
            }
      </div>
    );
}

function PrevArrowComponent(props) {
    const { className, onClick } = props;
    const { isHovered, hover } = props;
    return (
      <div>
            {isHovered ?
                <img src={nonActivArrowLeft} alt="Prev" className={className} onClick={onClick} onMouseEnter={hover} onMouseLeave={hover}/> 
                : 
                <img src={activArrowLeft} alt="Prev" className={className} onClick={onClick} onMouseEnter={hover} onMouseLeave={hover}/>
            }
      </div>
    );
}


export default function Bestsellers() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredLeft, setIsHoveredLeft] = useState(false);
    function Hover() {
        setIsHovered(!isHovered);
    }
    function HoverLeft() {
        setIsHoveredLeft(!isHoveredLeft);
    }
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
        mobileFirst: true,
        prevArrow: <PrevArrowComponent isHovered={isHovered} hover={Hover}/>,
        nextArrow: <NextArrowComponent isHovered={isHoveredLeft} hover={HoverLeft}/>,
        responsive: [
            {
                breakpoint: 2001,
                settings: {
                    slidesToShow: 5
                }
            },

            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4
                }
            },

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 495,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
      };

    return (
        
        <>
            <h2 className="text-start carousel-header-styling ml-[142px] mt-24 mb-7">Best Sellers</h2>
            <div className="mx-auto carousel-size">  
                <Slider {...settings}>
                    <div>
                        <div className="relative">
                            <img src={netureTShirt} alt="Women's TShirt" className="w-auto"/>
                            <div className='absolute position-heard'>
                                <Heard />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between width-info mt-1">
                            <h3>City Run</h3>
                            <h3>$35</h3>
                        </div>
                        <p className="mt-1">Women`s running T-shirt</p>
                        <div className="flex flex-row gap-2 mt-3">
                            <button><div className="w-4 h-4 rounded-full bg-[#FFFFFF] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#E9A740] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#448452] border-1 border-[#546070]"></div></button>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={sunSetTshirt} alt="Women's TShirt" className="w-auto"/>
                            <div className='absolute position-heard'>
                                <Heard />
                            </div>
                        </div>
                        <div className="flex flex-row width-info mt-1">
                            <h3>Morning</h3>
                            <h3>$38</h3>
                        </div>
                        <p className="mt-1">Women`s running T-shirts</p>
                        <div className="flex flex-row gap-2 mt-3">
                            <button><div className="w-4 h-4 rounded-full bg-[#0447B6] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#E9A740] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#448452] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#E74D33] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#FFFFFF] border-1 border-[#546070]"></div></button>
                            <span className="style-num">+1</span>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={forestRun} alt="Man's TShirt" className="w-auto"/>
                            <div className='absolute position-heard'>
                                <Heard />
                            </div>
                        </div>
                        <div className="flex flex-row width-info mt-1">
                            <h3>Forest</h3>
                            <h3>$450</h3>
                        </div>
                        <p>Man`s running shoes</p>
                        <div className="flex flex-row gap-2 mt-3">
                            <button><div className="w-4 h-4 rounded-full bg-[#0447B6] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#E9A740] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#448452] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#E74D33] border-1 border-[#546070]"></div></button>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={nightTshirt} alt="Men's TShirt" className="night-t-shirt"/>
                            <div className='absolute position-heard'>
                                <Heard />
                            </div>
                        </div>
                        <div className="flex flex-row width-info mt-1">
                            <h3>Black Heart</h3>
                            <h3>$42</h3>
                        </div>
                        <p>Man`s running T-shirts</p>
                        <div className="flex flex-row gap-2 mt-3">
                            <button><div className="w-4 h-4 rounded-full bg-[#414142] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#FFFFFF] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#E74D33] border-1 border-[#546070]"></div></button>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={netureTShirt} alt="Women's TShirt" className="w-auto"/>
                            <div className='absolute position-heard'>
                                <Heard />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between width-info mt-1">
                            <h3>City Run</h3>
                            <h3>$35</h3>
                        </div>
                        <p className="mt-1">Women`s running T-shirt</p>
                        <div className="flex flex-row gap-2 mt-3">
                            <button><div className="w-4 h-4 rounded-full bg-[#FFFFFF] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#E9A740] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#448452] border-1 border-[#546070]"></div></button>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={sunSetTshirt} alt="Men's TShirt" className="w-auto"/>
                            <div className='absolute position-heard'>
                                <Heard />
                            </div>
                        </div>
                        <div className="flex flex-row width-info mt-1">
                            <h3>Morning</h3>
                            <h3>$38</h3>
                        </div>
                        <p className="mt-1">Women`s running T-shirts</p>
                        <div className="flex flex-row gap-2 mt-3">
                            <button><div className="w-4 h-4 rounded-full bg-[#0447B6] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#E9A740] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#448452] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#E74D33] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#FFFFFF] border-1 border-[#546070]"></div></button>
                            <span className="style-num">+1</span>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={forestRun} alt="Women's TShirt" className="w-auto"/>
                            <div className='absolute position-heard'>
                                <Heard />
                            </div>
                        </div>
                        <div className="flex flex-row width-info mt-1">
                            <h3>Forest</h3>
                            <h3>$450</h3>
                        </div>
                        <p>Man`s running shoes</p>
                        <div className="flex flex-row gap-2 mt-3">
                            <button><div className="w-4 h-4 rounded-full bg-[#0447B6] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#E9A740] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#448452] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#E74D33] border-1 border-[#546070]"></div></button>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src={nightTshirt} alt="Men's TShirt" className="night-t-shirt"/>
                            <div className='absolute position-heard'>
                                <Heard />
                            </div>
                        </div>
                        <div className="flex flex-row width-info mt-1">
                            <h3>Black Heart</h3>
                            <h3>$42</h3>
                        </div>
                        <p>Man`s running T-shirts</p>
                        <div className="flex flex-row gap-2 mt-3">
                            <button><div className="w-4 h-4 rounded-full bg-[#414142] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#FFFFFF] border-1 border-[#546070]"></div></button>
                            <button><div className="w-4 h-4 rounded-full bg-[#E74D33] border-1 border-[#546070]"></div></button>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}