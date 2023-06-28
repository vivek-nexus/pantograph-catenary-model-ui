import defaultValues from "../constants/defaultsValues"
import InputField from "./InputFIeld"

function PantographParameters() {
    return (
        <>
            <h3 className="mb-6 text-black">Pantograph 1</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <InputField
                    label="X initial"
                    defaultValue={defaultValues["pantograph 1"].xinit}
                    unit="m"
                    className="col-span-1"
                />
                <InputField
                    label="Z base"
                    defaultValue={defaultValues["pantograph 1"].zbase}
                    unit="m"
                    className="col-span-1"
                />
                <InputField
                    label="Speed"
                    defaultValue={defaultValues["pantograph 1"].speed}
                    unit="m/s"
                    className="col-span-1"
                />
                <InputField
                    label="Force"
                    defaultValue={defaultValues["pantograph 1"].force}
                    unit="N"
                    className="col-span-1"
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <InputField
                    label="Mass"
                    defaultValue={defaultValues["pantograph 1"].m}
                    unit="kg"
                    className="col-span-1"
                />
                <InputField
                    label="Sprint constant (k)"
                    defaultValue={defaultValues["pantograph 1"].k}
                    unit="N/m"
                    className="col-span-1"
                />
                <InputField
                    label="c"
                    defaultValue={defaultValues["pantograph 1"].c}
                    unit="Ns/m"
                    className="col-span-1"
                />
            </div>
            <hr className="my-6" />
            <h3 className="mb-6 text-black">Pantograph 3</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <InputField
                    label="X initial"
                    defaultValue={defaultValues["pantograph 3"].xinit}
                    unit="m"
                    className="col-span-1"
                />
                <InputField
                    label="Z base"
                    defaultValue={defaultValues["pantograph 3"].zbase}
                    unit="m"
                    className="col-span-1"
                />
                <InputField
                    label="Speed"
                    defaultValue={defaultValues["pantograph 3"].speed}
                    unit="m/s"
                    className="col-span-1"
                />
                <InputField
                    label="Force"
                    defaultValue={defaultValues["pantograph 3"].force}
                    unit="N"
                    className="col-span-1"
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <InputField
                    label="Mass 1 (m1)"
                    defaultValue={defaultValues["pantograph 3"].m1}
                    unit="kg"
                    className="col-span-1"
                />
                <InputField
                    label="Sprint constant 1 (k1)"
                    defaultValue={defaultValues["pantograph 3"].k1}
                    unit="N/m"
                    className="col-span-1"
                />
                <InputField
                    label="c1"
                    defaultValue={defaultValues["pantograph 3"].c1}
                    unit="Ns/m"
                    className="col-span-1"
                />
                <InputField
                    label="Mass 2 (m2)"
                    defaultValue={defaultValues["pantograph 3"].m2}
                    unit="kg"
                    className="col-span-1"
                />
                <InputField
                    label="Sprint constant 2 (k2)"
                    defaultValue={defaultValues["pantograph 3"].k2}
                    unit="N/m"
                    className="col-span-1"
                />
                <InputField
                    label="c2"
                    defaultValue={defaultValues["pantograph 3"].c2}
                    unit="Ns/m"
                    className="col-span-1"
                />
                <InputField
                    label="Mass 3 (m3)"
                    defaultValue={defaultValues["pantograph 3"].m3}
                    unit="kg"
                    className="col-span-1"
                />
                <InputField
                    label="Sprint constant 3 (k3)"
                    defaultValue={defaultValues["pantograph 3"].k3}
                    unit="N/m"
                    className="col-span-1"
                />
                <InputField
                    label="c3"
                    defaultValue={defaultValues["pantograph 3"].c3}
                    unit="Ns/m"
                    className="col-span-1"
                />
            </div>
        </>
    )
}

export default PantographParameters