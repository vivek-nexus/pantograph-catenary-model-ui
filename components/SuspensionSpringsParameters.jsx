import InputField from "./InputFIeld"

function SuspensionSpringsParameters({ parametersObject, setParametersObject }) {
    function handleValueChange(param, value) {
        setParametersObject({
            ...parametersObject,
            [param]: {
                "stiffness": value
            }
        })
    }

    return (
        <>
            <h3 className="mb-6 text-black">Suspension springs</h3>
            <div className="grid grid-cols-1 gap-4">
                <InputField
                    label="Contact wire suspension spring stiffness"
                    defaultValue={parametersObject["contact wire suspension spring"]["stiffness"]}
                    unit="N m<sup>2</sup>"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("contact wire suspension spring", value)
                    }}
                />
                <InputField
                    label="Catenary cable suspension spring stiffness"
                    defaultValue={parametersObject["catenary cable suspension spring"]["stiffness"]}
                    unit="N m<sup>2</sup>"
                    className="col-span-1"
                    onChange={(value) => {
                        setParametersObject({
                            ...parametersObject,
                            "catenary cable suspension spring": {
                                "stiffness": value
                            }
                        })
                    }}
                />
            </div>
        </>
    )
}

export default SuspensionSpringsParameters