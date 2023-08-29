import runner from '../img/runner.png'
import SearchWindow from './SearchWindow'

export default function Header({showSearchWindow}) {
    return(
        <>
            <div className="background-img relative"><img src={runner} alt="runner" />
                <div className="header-text ml-36 absolute top-[128px]">
                    <h1 className="font-normal text-6xl title-header">Sky is the limit.<br/>Unleash Your Potential</h1>
                    <p className="mt-12 ads-clothes font-normal">Discover a high quality clothes for runners.<br />No matter how you are beginners or professional,<br /> we have something special for you</p>
                    <a href="/runners_shop/AllProducts"><button className="shop-btn-header mt-8 rounded-2xl text-xl font-medium text-white">Shop</button></a>
                </div>
                {showSearchWindow ? <SearchWindow /> : ''}
            </div>
        </>
    )
}