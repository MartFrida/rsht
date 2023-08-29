import bgWingedPhrase from "../img/bg-winged-phrase.svg"

export default function WingPhrase() {
    return(
        <>
            <div className="overflow-hidden relative">
                <img src={bgWingedPhrase} alt="background" />
                <h2 className="text-[#221E22] text-[61px] font-[Riposte] absolute top-[40%] left-[16%]">
                    Run with our high-quality <br /> running clothes
                    <div className="overflow-hidden absolute mx-auto w-[700px] flex justify-end top-[50%] h-[84px]">
                        <div className="text-[#EE5622] text-[61px] font-[Riposte] top-animation absolute">
                            <span>faster</span><br />
                            <span>comfortable</span><br />
                            <span>pleasure</span>
                        </div>
                    </div>
                </h2>

            </div>
        </>
    )
}