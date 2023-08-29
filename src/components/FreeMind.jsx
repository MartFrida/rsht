import bgWingedPhrase from "../img/bg-winged-phrase.svg"

export default function FreeMind() {
    return(
        <>
            <div className="relative">
                <img src={bgWingedPhrase} alt="background" className="rotate-180"/>
                <div className="top-[31%] left-[12%] absolute">
                    <p className="text-[61px] font-[500] font-riposte winged-comment">“Running allows me to set my  mind free.<br />Nothing seems impossible.<br />Nothing unattainable.”</p>
                    <p className="left-[55%] absolute mt-6">Kara Goucher<br />American long-distance runner</p>
                </div>
            </div>
        </>
    )
}