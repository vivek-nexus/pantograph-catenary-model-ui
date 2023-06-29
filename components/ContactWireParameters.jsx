import InputField from "./InputFIeld"

function ContactWireParameters({ parametersObject, setParametersObject }) {

    // Set parametersObject with new value
    function handleValueChange(param, value) {
        setParametersObject({
            ...parametersObject,
            "contact wire": {
                ...parametersObject["contact wire"],
                [param]: value
            }
        })
    }

    return (
        <>
            <h3 className="mb-6 text-black">Contact wire</h3>
            <div className="grid grid-cols-2 gap-4">
                <InputField
                    label="EI"
                    defaultValue={parametersObject["contact wire"].EI}
                    unit="N m<sup>2</sup>"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("EI", parseFloat(value))
                    }}
                />
                <InputField
                    label="Height"
                    defaultValue={parametersObject["contact wire"].height}
                    unit="m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("height", parseFloat(value))
                    }}
                />
                <InputField
                    label="Line density"
                    defaultValue={parametersObject["contact wire"]["line density"]}
                    unit="kg/m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("line density", parseFloat(value))
                    }}
                />
                <InputField
                    label="Span"
                    defaultValue={parametersObject["contact wire"].span}
                    unit="m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("span", parseFloat(value))
                    }}
                />
                <InputField
                    label="Tension"
                    defaultValue={parametersObject["contact wire"].tension}
                    unit="N"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("tension", parseFloat(value))
                    }}
                />
                <InputField
                    label="Gravity"
                    defaultValue={parametersObject["contact wire"].gravity}
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

export default ContactWireParameters