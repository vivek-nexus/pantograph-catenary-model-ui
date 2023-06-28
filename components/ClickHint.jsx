import { useEffect, useState } from "react";
import PopUpContainer from "./PopUpContainer";
import InputField from "./InputFIeld";

function ClickHint({ colour, percentageFromLeft, percentageFromTop, id, children }) {
    const [isPopupVisible, setIsPopupVisible] = useState(false)

    useEffect(() => {
        document.addEventListener("click", (event) => {
            const target = document.querySelector(`#${id}`)
            const withinBoundaries = event.composedPath().includes(target)
            if (!withinBoundaries)
                setIsPopupVisible(false)
        })
    }, [])

    return (
        <div
            id={id}
            className="flex gap-4"
            style={{
                position: "absolute",
                left: percentageFromLeft,
                top: percentageFromTop
            }}
        >
            <div
                className="p-2 cursor-pointer"
                onClick={() => setIsPopupVisible(!isPopupVisible)}>
                <div
                    className="w-2 h-2 rounded-full animate-ping"
                    style={{ backgroundColor: colour }}
                ></div>
            </div>

            {isPopupVisible &&
                <div className={id == "pantograph-parameters" ? `-mt-64` : ``}>
                    <PopUpContainer
                        colour={colour}
                    >
                        {children}
                    </PopUpContainer>
                </div>
            }
        </div>
    )
}

export default ClickHint;