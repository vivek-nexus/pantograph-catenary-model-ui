import defaultValues from "../constants/defaultsValues"
import InputField from "./InputFIeld"

function ContactWireParameters() {
    return (
        <>
            <h3 className="mb-6 text-black">Contact wire</h3>
            <div className="grid grid-cols-2 gap-4">
                <InputField
                    label="EI"
                    defaultValue={defaultValues["contact wire"].EI}
                    unit="N m<sup>2</sup>"
                    className="col-span-1"
                />
                <InputField
                    label="Height"
                    defaultValue={defaultValues["contact wire"].height}
                    unit="m"
                    className="col-span-1"
                />
                <InputField
                    label="Line density"
                    defaultValue={defaultValues["contact wire"]["line density"]}
                    unit="kg/m"
                    className="col-span-1"
                />
                <InputField
                    label="Span"
                    defaultValue={defaultValues["contact wire"].span}
                    unit="m"
                    className="col-span-1"
                />
                <InputField
                    label="Tension"
                    defaultValue={defaultValues["contact wire"].tension}
                    unit="N"
                    className="col-span-1"
                />
                <InputField
                    label="Gravity"
                    defaultValue={defaultValues["contact wire"].gravity}
                    unit="m/s<sup>2</sup>"
                    className="col-span-1"
                />
            </div>
        </>
    )
}

export default ContactWireParameters