import defaultValues from "../constants/defaultsValues"
import InputField from "./InputFIeld"

function CatenaryCableParameters() {
    return (
        <>
            <h3 className="mb-6 text-black">Catenary cable</h3>
            <div className="grid grid-cols-2 gap-4">
                <InputField
                    label="EI"
                    defaultValue={defaultValues["catenary cable"].EI}
                    unit="N m<sup>2</sup>"
                    className="col-span-1"
                />
                <InputField
                    label="Height"
                    defaultValue={defaultValues["catenary cable"].height}
                    unit="m"
                    className="col-span-1"
                />
                <InputField
                    label="Line density"
                    defaultValue={defaultValues["catenary cable"]["line density"]}
                    unit="kg/m"
                    className="col-span-1"
                />
                <InputField
                    label="Span"
                    defaultValue={defaultValues["catenary cable"].span}
                    unit="m"
                    className="col-span-1"
                />
                <InputField
                    label="Tension"
                    defaultValue={defaultValues["catenary cable"].tension}
                    unit="N"
                    className="col-span-1"
                />
                <InputField
                    label="Gravity"
                    defaultValue={defaultValues["catenary cable"].gravity}
                    unit="m/s<sup>2</sup>"
                    className="col-span-1"
                />
            </div>
        </>
    )
}

export default CatenaryCableParameters