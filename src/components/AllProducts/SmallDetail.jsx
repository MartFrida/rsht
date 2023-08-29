import RightChevron from "../../img/chevron-right.svg"
import RunningManWhite from "../../img/running-man-white.png"
import SearchWindow from '../SearchWindow'
export default function SmallDetail({showSearchWindow}) {
    return (
        <>
            <div className="pt-[126px]">
                <div className="flex flex-row ">
                    <p className="text-[#160C28]">Home</p>
                    <img src={RightChevron} alt="Right Arrow" />
                    <p className="text-[#EE5622]">All Products</p>
                </div>
                <p className="text-[#160C28]">134 products</p>
            </div>
            <div className="mt-6 relative">
                <img src={RunningManWhite} alt="Background 'Running Man in White T-Shirt'" className="w-[100%]"/>
                <div className="absolute top-[31%] left-[10%] font-[300] text-[#FAFAFF]">
                    <p className="mb-[9px]">Upgrade Your Style with a <b>10% Discount</b><br />on Your Total Purchase! </p>
                    <p>Shop Clothing and Accessories Together!</p>
                </div>
            </div>
            {showSearchWindow ? <SearchWindow /> : ''}
        </>
    )
}