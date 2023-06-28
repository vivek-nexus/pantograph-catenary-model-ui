import InputField from "./InputFIeld"

function DropperParameters({ parametersObject, setParametersObject }) {

    function handleValueChange(param, value) {
        setParametersObject({
            ...parametersObject,
            "droppers": {
                ...parametersObject["droppers"],
                [param]: value
            }
        })
    }

    return (
        <>
            <h3 className="mb-6 text-black">Droppers</h3>
            <div className="grid grid-cols-2 gap-4">
                <InputField
                    label="EA"
                    defaultValue={parametersObject.droppers.EA}
                    unit="N m<sup>2</sup>"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("EA", value)
                    }}
                />
                <InputField
                    label="Line density"
                    defaultValue={parametersObject.droppers["line density"]}
                    unit="kg/m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("line density", value)
                    }}
                />
                <InputField
                    label="Catenary cable clamp mass"
                    defaultValue={parametersObject.droppers["catenary cable clamp mass"]}
                    unit="kg"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("catenary cable clamp mass", value)
                    }}
                />
                <InputField
                    label="Contact wire clamp mass"
                    defaultValue={parametersObject.droppers["contact wire clamp mass"]}
                    unit="kg"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("contact wire clamp mass", value)
                    }}
                />
                <InputField
                    label="Gravity"
                    defaultValue={parametersObject.droppers.gravity}
                    unit="m/s<sup>2</sup>"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("gravity", value)
                    }}
                />
            </div>
        </>
    )
}

export default DropperParameters