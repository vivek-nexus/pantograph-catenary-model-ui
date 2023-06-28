import defaultValues from "../constants/defaultsValues"
import InputField from "./InputFIeld"

function DropperParameters() {
    return (
        <>
            <h3 className="mb-6 text-black">Droppers</h3>
            <div className="grid grid-cols-2 gap-4">
                <InputField
                    label="EA"
                    defaultValue={defaultValues.droppers.EA}
                    unit="N m<sup>2</sup>"
                    className="col-span-1"
                />
                <InputField
                    label="Line density"
                    defaultValue={defaultValues.droppers["line density"]}
                    unit="kg/m"
                    className="col-span-1"
                />
                <InputField
                    label="Catenary cable clamp mass"
                    defaultValue={defaultValues.droppers["catenary cable clamp mass"]}
                    unit="kg"
                    className="col-span-1"
                />
                <InputField
                    label="Contact wire clamp mass"
                    defaultValue={defaultValues.droppers["contact wire clamp mass"]}
                    unit="kg"
                    className="col-span-1"
                />
                <InputField
                    label="Gravity"
                    defaultValue={defaultValues.droppers.gravity}
                    unit="m/s<sup>2</sup>"
                    className="col-span-1"
                />
            </div>
        </>
    )
}

export default DropperParameters