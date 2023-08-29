import DropMenu from "./DropMenu";
import { useState } from "react";
import closeImg from "../../img/x.svg"
export default function LineDropMenu() {
    const [filter_list, setFilter_list] = useState([])
    function clearArray() {
        setFilter_list(() => {
            return []
        })
    }
    function deleteOneItem(itemToRemove) {
        setFilter_list((prevFilterList) => {
            return [...prevFilterList].filter(item => item !== itemToRemove)
        })
    }
    return(
        <>
            <div className="flex justify-between mt-6 mb-4">
                <div className="flex flex-row justify-start gap-8">
                    <DropMenu setFilter_list={setFilter_list} faceText={'Aparel Type'} DropingText={['T-Shirts', 'Sneakers', 'Shorts', 'Hats', 'Buffs']} />
                    <DropMenu setFilter_list={setFilter_list} faceText={'Size'} DropingText={['Man & Woman', 'Man', 'Woman']}/>
                    <DropMenu setFilter_list={setFilter_list} faceText={'Main Material'} DropingText={['Man & Woman', 'Man', 'Woman']}/>
                    <DropMenu setFilter_list={setFilter_list} faceText={'Gender'} DropingText={['Man & Woman', 'Man', 'Woman']}/>
                    <DropMenu setFilter_list={setFilter_list} faceText={'Intended Use'} DropingText={['Man & Woman', 'Man', 'Woman']}/>
                    <DropMenu setFilter_list={setFilter_list} faceText={'Color'} DropingText={['Man & Woman', 'Man', 'Woman']}/>
                    <DropMenu setFilter_list={setFilter_list} faceText={'Sort By'} DropingText={['Man & Woman', 'Man', 'Woman']}/>
                </div>
                <p className="text-[#546070] underline hover:cursor-pointer" onClick={clearArray}>clear all</p>
            </div>
            <div className="flex flex-row gap-3">
                {filter_list.map((item, index) => {
                    return(
                        <div key={index} className="flex flex-row pl-3 pr-1 rounded-xl border-[#546070] border-[1px] gap-1">
                            <p>{item}</p>
                            <img src={closeImg} alt="click-to-close" className="hover:cursor-pointer" onClick={() => deleteOneItem(item)}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}