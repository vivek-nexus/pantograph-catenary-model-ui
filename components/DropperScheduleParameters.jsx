import { useEffect, useState } from "react"
import InputField from "./InputFIeld"
import defaultValues from "../constants/defaultsValues"

function DropperScheduleParameters({ parametersObject, setParametersObject }) {
    const [numberOfDroppers, setNumberOfDroppers] = useState(parametersObject["dropper schedule"]["number of droppers"])

    useEffect(() => {
        const oldDropperSchedule = parametersObject["dropper schedule"]
        const oldNumberOfDroppers = oldDropperSchedule["number of droppers"]
        // Add or remove items only if dropper count is more than 0 
        if ((numberOfDroppers > 0)) {
            // Add items since dropper count has increased
            if (oldNumberOfDroppers < numberOfDroppers) {
                setParametersObject({
                    ...parametersObject,
                    "dropper schedule": {
                        ...oldDropperSchedule,
                        "number of droppers": numberOfDroppers,
                        "dropper positions":
                            oldDropperSchedule["dropper positions"].concat(
                                defaultValues["dropper schedule"]["dropper positions"].slice(oldNumberOfDroppers, numberOfDroppers)),
                        "nominal lengths":
                            oldDropperSchedule["nominal lengths"].concat(
                                defaultValues["dropper schedule"]["nominal lengths"].slice(oldNumberOfDroppers, numberOfDroppers)),
                        "target sag":
                            oldDropperSchedule["target sag"].concat(
                                defaultValues["dropper schedule"]["target sag"].slice(oldNumberOfDroppers, numberOfDroppers)),
                    }
                })
            }
            // Remove items since dropper count has decreased
            else {
                const oldDropperSchedule = parametersObject["dropper schedule"]
                setParametersObject({
                    ...parametersObject,
                    "dropper schedule": {
                        ...oldDropperSchedule,
                        "number of droppers": numberOfDroppers,
                        "dropper positions": oldDropperSchedule["dropper positions"].slice(0, numberOfDroppers),
                        "nominal lengths": oldDropperSchedule["nominal lengths"].slice(0, numberOfDroppers),
                        "target sag": oldDropperSchedule["target sag"].slice(0, numberOfDroppers)
                    }
                })
            }
        }
    }, [numberOfDroppers])

    // Set parametersObject with new value
    function handleValueChange(param, i, value) {
        const oldArrayAtParam = parametersObject["dropper schedule"][param]
        console.log(parametersObject["dropper schedule"])
        setParametersObject({
            ...parametersObject,
            ["dropper schedule"]: {
                ...parametersObject["dropper schedule"],
                [param]: oldArrayAtParam.map((item, index) => index === i ? value : item)
            }
        })
    }

    return (
        <>
            <h3 className="mb-6 text-black">Dropper arrangement</h3>
            <div className="grid grid-cols-2 gap-4 items-end mb-6">
                <InputField
                    label="Number of droppers"
                    defaultValue={parametersObject["dropper schedule"]["number of droppers"]}
                    unit="num"
                    className="col-span-1"
                    onChange={(value) => {
                        setNumberOfDroppers(parseInt(value))
                    }}
                />
                <InputField
                    label="Encumbrance"
                    defaultValue={parametersObject["dropper schedule"].encumbrance}
                    unit="m"
                    className="col-span-1"
                    onChange={(value) => {
                        setParametersObject({
                            ...parametersObject,
                            ["dropper schedule"]: {
                                ...parametersObject["dropper schedule"],
                                ["encumbrance"]: parseFloat(value)
                            }
                        })
                    }}
                />
            </div>
            <hr className="my-6" />
            {numberOfDroppers > 0 &&
                <div>
                    {[...Array(parseFloat(numberOfDroppers))].map((element, i) => {
                        return (
                            <div key={i} className="grid grid-cols-19 gap-4 items-end mb-6">
                                <div className="col-span-1 flex items-end">
                                    <p className="mb-3 text-black font-bold">{i + 1}</p>
                                </div>
                                <InputField
                                    label="Position"
                                    defaultValue={parametersObject["dropper schedule"]["dropper positions"][i] ?? defaultValues["dropper schedule"]["dropper positions"][i] ?? 0}
                                    unit="m"
                                    className="col-span-6"
                                    onChange={(value) => {
                                        if (value != "")
                                            handleValueChange("dropper positions", i, parseFloat(value))
                                    }}
                                />
                                <InputField
                                    label="Nominal length"
                                    defaultValue={parametersObject["dropper schedule"]["nominal lengths"][i] ?? defaultValues["dropper schedule"]["nominal lengths"][i] ?? 0}
                                    unit="m"
                                    className="col-span-6"
                                    onChange={(value) => {
                                        if (value != "")
                                            handleValueChange("nominal lengths", i, parseFloat(value))
                                    }}
                                />
                                <InputField
                                    label="Target sag"
                                    defaultValue={parametersObject["dropper schedule"]["target sag"][i] ?? defaultValues["dropper schedule"]["target sag"][i] ?? 0}
                                    unit="m"
                                    className="col-span-6"
                                    onChange={(value) => {
                                        if (value != "")
                                            handleValueChange("target sag", i, parseFloat(value))
                                    }}
                                />
                            </div>
                        )
                    })}
                </div>}
        </>
    )
}

export default DropperScheduleParameters