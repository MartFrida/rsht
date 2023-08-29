export default function SearchWindow() {
    return(
        <>
            <div className='z-[3] fixed w-[20%] h-14 bg-slate-600 opacity-80 search-bar top-[24%] right-[19%] rounded-md flex items-center justify-center'>
                <input type="text" placeholder='Tshirt...' className="opacity-100 border rounded-md pl-1"/>
            </div>
        </>
)
}