import InputField from "./InputFIeld"

function PantographParameters({ parametersObject, setParametersObject }) {

    // Set parametersObject with new value
    function handleValueChange(pantograph, param, value) {
        setParametersObject({
            ...parametersObject,
            [pantograph]: {
                ...parametersObject[pantograph],
                [param]: value
            }
        })
    }

    return (
        <>
            <h3 className="mb-6 text-black">Pantograph 1</h3>
            <div className="grid grid-cols-2 gap-4 items-end mb-4">
                <InputField
                    label="X initial"
                    defaultValue={parametersObject["pantograph 1"].xinit}
                    unit="m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 1", "xinit", parseFloat(value))
                    }}
                />
                <InputField
                    label="Z base"
                    defaultValue={parametersObject["pantograph 1"].zbase}
                    unit="m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 1", "zbase", parseFloat(value))
                    }}
                />
                <InputField
                    label="Speed"
                    defaultValue={parametersObject["pantograph 1"].speed}
                    unit="m/s"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 1", "speed", parseFloat(value))
                    }}
                />
                <InputField
                    label="Force"
                    defaultValue={parametersObject["pantograph 1"].force}
                    unit="N"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 1", "force", parseFloat(value))
                    }}
                />
            </div>
            <div className="grid grid-cols-3 gap-4 items-end">
                <InputField
                    label="Mass"
                    defaultValue={parametersObject["pantograph 1"].m}
                    unit="kg"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 1", "m", parseFloat(value))
                    }}
                />
                <InputField
                    label="Sprint constant (k)"
                    defaultValue={parametersObject["pantograph 1"].k}
                    unit="N/m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 1", "k", parseFloat(value))
                    }}
                />
                <InputField
                    label="c"
                    defaultValue={parametersObject["pantograph 1"].c}
                    unit="Ns/m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 1", "c", parseFloat(value))
                    }}
                />
            </div>
            <hr className="my-6" />
            <h3 className="mb-6 text-black">Pantograph 3</h3>
            <div className="grid grid-cols-2 gap-4 items-end mb-4">
                <InputField
                    label="X initial"
                    defaultValue={parametersObject["pantograph 3"].xinit}
                    unit="m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 3", "xinit", parseFloat(value))
                    }}
                />
                <InputField
                    label="Z base"
                    defaultValue={parametersObject["pantograph 3"].zbase}
                    unit="m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 3", "zbase", parseFloat(value))
                    }}
                />
                <InputField
                    label="Speed"
                    defaultValue={parametersObject["pantograph 3"].speed}
                    unit="m/s"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 3", "speed", parseFloat(value))
                    }}
                />
                <InputField
                    label="Force"
                    defaultValue={parametersObject["pantograph 3"].force}
                    unit="N"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 3", "force", parseFloat(value))
                    }}
                />
            </div>
            <div className="grid grid-cols-3 gap-4 items-end">
                <InputField
                    label="Mass 1 (m1)"
                    defaultValue={parametersObject["pantograph 3"].m1}
                    unit="kg"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 3", "m1", parseFloat(value))
                    }}
                />
                <InputField
                    label="Sprint constant 1 (k1)"
                    defaultValue={parametersObject["pantograph 3"].k1}
                    unit="N/m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 3", "k1", parseFloat(value))
                    }}
                />
                <InputField
                    label="c1"
                    defaultValue={parametersObject["pantograph 3"].c1}
                    unit="Ns/m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 3", "c1", parseFloat(value))
                    }}
                />
                <InputField
                    label="Mass 2 (m2)"
                    defaultValue={parametersObject["pantograph 3"].m2}
                    unit="kg"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 3", "m2", parseFloat(value))
                    }}
                />
                <InputField
                    label="Sprint constant 2 (k2)"
                    defaultValue={parametersObject["pantograph 3"].k2}
                    unit="N/m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 3", "k2", parseFloat(value))
                    }}
                />
                <InputField
                    label="c2"
                    defaultValue={parametersObject["pantograph 3"].c2}
                    unit="Ns/m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 3", "c2", parseFloat(value))
                    }}
                />
                <InputField
                    label="Mass 3 (m3)"
                    defaultValue={parametersObject["pantograph 3"].m3}
                    unit="kg"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 3", "m3", parseFloat(value))
                    }}
                />
                <InputField
                    label="Sprint constant 3 (k3)"
                    defaultValue={parametersObject["pantograph 3"].k3}
                    unit="N/m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 3", "k3", parseFloat(value))
                    }}
                />
                <InputField
                    label="c3"
                    defaultValue={parametersObject["pantograph 3"].c3}
                    unit="Ns/m"
                    className="col-span-1"
                    onChange={(value) => {
                        handleValueChange("pantograph 3", "c3", parseFloat(value))
                    }}
                />
            </div>
        </>
    )
}

export default PantographParameters