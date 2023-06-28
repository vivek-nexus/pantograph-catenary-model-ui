import InputField from "./InputFIeld"

function CatenaryCableParameters({ parametersObject, setParametersObject }) {

    function handleValueChange(param, value) {
        setParametersObject({
            ...parametersObject,
            "catenary cable": {
                ...parametersObject["catenary cable"],
                [param]: value
            }
        })
    }

    return (
        <>
            <h3 className="mb-6 text-black">Catenary cable</h3>
            <div className="grid grid-cols-2 gap-4">
                <InputField
                    label="EI"
                    defaultValue={parametersObject["catenary cable"].EI}
                    unit="N m<sup>2</sup>"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("EI", parseFloat(value))
                    }}
                />
                <InputField
                    label="Height"
                    defaultValue={parametersObject["catenary cable"].height}
                    unit="m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("height", parseFloat(value))
                    }}
                />
                <InputField
                    label="Line density"
                    defaultValue={parametersObject["catenary cable"]["line density"]}
                    unit="kg/m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("line density", parseFloat(value))
                    }}
                />
                <InputField
                    label="Span"
                    defaultValue={parametersObject["catenary cable"].span}
                    unit="m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("span", parseFloat(value))
                    }}
                />
                <InputField
                    label="Tension"
                    defaultValue={parametersObject["catenary cable"].tension}
                    unit="N"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("tension", parseFloat(value))
                    }}
                />
                <InputField
                    label="Gravity"
                    defaultValue={parametersObject["catenary cable"].gravity}
                    unit="m/s<sup>2</sup>"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("gravity", parseFloat(value))
                    }}
                />
            </div>
        </>
    )
}

export default CatenaryCableParameters