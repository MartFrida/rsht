import { useEffect, useState } from "react";
import Heard from "../Heard"
import womanAndManRunners from "../../img/womanAndManRunners.png"
import happyRunnerMan from "../../img/happyRunnerMan.png"
export default function Catalog() {
    const [posts, setPosts] = useState([])
    /*Back Part:
        request data and push to posts with help "setPosts"
    */


   useEffect(() =>{
       const backData = [
    {
        img: '/src/img/netureTShirt.png',
        alt: "Women's TShirt",
        name: "City Run",
        price: '$35',
        describtion: "Women's running T-shirt",
        colors: ['bg-[#FFFFFF]', 'bg-[#E9A740]', 'bg-[#448452]']
    },
    {
        img: '/src/img/sunsetTShirt.png',
        alt: "Women's TShirt",
        name: "Morning",
        price: '$38',
        describtion: "Women`s running T-shirt",
        colors: ['bg-[#E9A740]', 'bg-[#448452]', 'bg-[#E74D33]', 'bg-[#0447B6]']
    },
    {
        img: '/src/img/forest.png',
        alt: "Sneakers",
        name: "Forest",
        price: '$450',
        describtion: "Man`s running shoes",
        colors: ['bg-[#FFFFFF]', 'bg-[#E9A740]', 'bg-[#448452]', 'bg-[#E74D33]', 'bg-[#0447B6]']
    },
    {
        img: '/src/img/nightTShirt.png',
        alt: "Sneakers",
        name: "Black Heart",
        price: '$42',
        describtion: "Man`s running shoes",
        colors: ['bg-[#FFFFFF]', 'bg-[#414142]', 'bg-[#E74D33]']
    },
    {
        img: '/src/img/netureTShirt.png',
        alt: "Women's TShirt",
        name: "City Run",
        price: '$35',
        describtion: "Women's running T-shirt",
        colors: ['bg-[#FFFFFF]', 'bg-[#E9A740]', 'bg-[#448452]']
    },
    {
        img: '/src/img/sunsetTShirt.png',
        alt: "Women's TShirt",
        name: "Morning",
        price: '$38',
        describtion: "Women`s running T-shirt",
        colors: ['bg-[#E9A740]', 'bg-[#448452]', 'bg-[#E74D33]', 'bg-[#0447B6]']
    },
    {
        img: '/src/img/forest.png',
        alt: "Sneakers",
        name: "Forest",
        price: '$450',
        describtion: "Man`s running shoes",
        colors: ['bg-[#FFFFFF]', 'bg-[#E9A740]', 'bg-[#448452]', 'bg-[#E74D33]', 'bg-[#0447B6]']
    },
    {
        img: '/src/img/nightTShirt.png',
        alt: "Sneakers",
        name: "Black Heart",
        price: '$42',
        describtion: "Man`s running shoes",
        colors: ['bg-[#FFFFFF]', 'bg-[#414142]', 'bg-[#E74D33]']
    },
    {
        img: '/src/img/netureTShirt.png',
        alt: "Women's TShirt",
        name: "City Run",
        price: '$35',
        describtion: "Women's running T-shirt",
        colors: ['bg-[#FFFFFF]', 'bg-[#E9A740]', 'bg-[#448452]']
    },
    {
        img: '/src/img/sunsetTShirt.png',
        alt: "Women's TShirt",
        name: "Morning",
        price: '$38',
        describtion: "Women`s running T-shirt",
        colors: ['bg-[#E9A740]', 'bg-[#448452]', 'bg-[#E74D33]', 'bg-[#0447B6]']
    },
    {
        img: '/src/img/forest.png',
        alt: "Sneakers",
        name: "Forest",
        price: '$450',
        describtion: "Man`s running shoes",
        colors: ['bg-[#FFFFFF]', 'bg-[#E9A740]', 'bg-[#448452]', 'bg-[#E74D33]', 'bg-[#0447B6]']
    },
    {
        img: '/src/img/nightTShirt.png',
        alt: "Sneakers",
        name: "Black Heart",
        price: '$42',
        describtion: "Man`s running shoes",
        colors: ['bg-[#FFFFFF]', 'bg-[#414142]', 'bg-[#E74D33]']
    }
   ]

   const postElement = backData.map((data1, index) => {
    return (
        <div  key={index}>
            <div className="relative">
                <img src={data1.img} alt={data1.alt} className="w-auto"/>
                <div className='absolute position-heard'>
                    <Heard />
                </div>
            </div>
            <div className="flex flex-row justify-between width-info mt-1">
                <h3>{data1.name}</h3>
                <h3>{data1.price}</h3>
            </div>
            <p className="mt-1">{data1.describtion}</p>
            <div className="flex flex-row gap-2 mt-3">
                {
                    data1.colors.map((color, index) => {
                        return(<button key={index}><div className={`w-4 h-4 rounded-full ${color} border-1 border-[#546070]`}></div></button>)
                    })
                }
            </div>
        </div>
    )
   })
    setPosts(postElement)
    console.log(postElement)
   }, [])


    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(12);
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPosts = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPosts,  indexOfLastPost)
    const firstLinePosts = currentPosts.slice(0, 4)
    const secondLinePosts = currentPosts.slice(4, 6)
    const thirdLinePosts = currentPosts.slice(6, 10)
    const fourthLinePosts = currentPosts.slice(10, 13)
    console.log(firstLinePosts)
    console.log(secondLinePosts)
    console.log(thirdLinePosts)
    console.log(fourthLinePosts)
    return(
        <>
            <div className="flex flex-column mt-8 gap-[84px]">
                <div className="flex flex-row gap-7">
                    {firstLinePosts.map((post, index) => {
                        return(
                        <div key={index}>
                            {post}
                        </div>
                        )
                    })}
                </div>

                <div className="flex flex-row gap-7 relative">
                    {secondLinePosts.map((post, index) => {
                        return(
                        <div key={index}>
                            {post}
                        </div>
                        )
                    })}
                    <div><img src={womanAndManRunners} alt="running Man & Women" /></div>
                </div>

                <div className="flex flex-row gap-7">
                    {thirdLinePosts.map((post, index) => {
                        return(
                        <div key={index}>
                            {post}
                        </div>
                        )
                    })}
                </div>

                <div className="flex flex-row gap-7">
                    <div><img src={happyRunnerMan} alt="Man runner with smilimg face" /></div>
                    {fourthLinePosts.map((post, index) => {
                        return(
                        <div key={index}>
                            {post}
                        </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}