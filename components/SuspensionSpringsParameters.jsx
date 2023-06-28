import InputField from "./InputFIeld"

function SuspensionSpringsParameters() {
    return (
        <>
            <h3 className="mb-6 text-black">Suspension springs</h3>
            <div className="grid grid-cols-1 gap-4">
                <InputField
                    label="Contact wire suspension spring stiffness"
                    defaultValue="195"
                    unit="N m<sup>2</sup>"
                    className="col-span-1"
                />
                <InputField
                    label="Catenary cable suspension spring stiffness"
                    defaultValue="195"
                    unit="N m<sup>2</sup>"
                    className="col-span-1"
                />
            </div>
        </>
    )
}

export default SuspensionSpringsParameters