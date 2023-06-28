import { useState } from "react"
import defaultValues from "../constants/defaultsValues"
import InputField from "./InputFIeld"

function DropperScheduleParameters() {
    const [numberOfDroppers, setNumberOfDroppers] = useState(defaultValues["dropper schedule"]["number of droppers"])

    return (
        <>
            <h3 className="mb-6 text-black">Dropper arrangement</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <InputField
                    label="Number of droppers"
                    defaultValue={defaultValues["dropper schedule"]["number of droppers"]}
                    unit="num"
                    className="col-span-1"
                    onChange={(value) => {
                        console.log(value)
                        setNumberOfDroppers(value)
                    }}
                />
                <InputField
                    label="Encumbrance"
                    defaultValue={defaultValues["dropper schedule"].encumbrance}
                    unit="m"
                    className="col-span-1"
                />
            </div>
            <hr className="my-6" />
            {numberOfDroppers > 0 &&
                <div>
                    {[...Array(parseInt(numberOfDroppers))].map((element, i) => {
                        console.log("Rendering " + (i + 1))
                        return (
                            <div key={i} className="grid grid-cols-19 gap-4 mb-6">
                                <div className="col-span-1 flex items-end">
                                    <p className="mb-3 text-black font-bold">{i + 1}</p>
                                </div>
                                <InputField
                                    label="Position"
                                    defaultValue={defaultValues["dropper schedule"]["dropper positions"][i] ?? 0}
                                    unit="m"
                                    className="col-span-6"
                                />
                                <InputField
                                    label="Nominal length"
                                    defaultValue={defaultValues["dropper schedule"]["nominal lengths"][i] ?? 0}
                                    unit="m"
                                    className="col-span-6"
                                />
                                <InputField
                                    label="Target sag"
                                    defaultValue={defaultValues["dropper schedule"]["target sag"][i] ?? 0}
                                    unit="m"
                                    className="col-span-6"
                                />
                            </div>
                        )
                    })}
                </div>}
        </>
    )
}

export default DropperScheduleParameters