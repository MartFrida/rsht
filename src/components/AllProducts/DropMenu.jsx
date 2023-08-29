export default function DropMenu({faceText, DropingText, setFilter_list}) {
  function pushItem(item) {
    setFilter_list((prevFilterList) => {
    return [...prevFilterList, item]
  })
  }
  return(
    <>
      <div className="dropdown">
        <button className="text-[18px] text-black bg-[#FAFAFF] border-[#FAFAFF] active:border-[#FAFAFF] dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {faceText}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {DropingText.map((item, index) => {
            return(<span key={index} className="dropdown-item" onClick={()=>pushItem(faceText + ' - ' + item)}>{item}</span>)
          })}
        </div>
      </div>
    </>
  )
}