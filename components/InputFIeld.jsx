import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function InputField({ label, defaultValue, unit, className, onChange }) {
    return (
        <>
            <style jsx global>
                {`
                    label {
                        // font-weight: bold;
                        color: black;
                        margin-bottom: 0.25rem;
                    }

                    input {
                        padding: 0.75rem 3rem 0.75rem 0.75rem;
                        border-radius: 0.5rem;
                        border: 2px solid #DADADA;
                        background: #FFF;
                        // box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
                        font-size: 1rem;
                        font-family: 'Lato', sans-serif;
                    }
                    input:focus{
                        outline:none;
                        border: 2px solid #555555;
                        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
                    }
                `}
            </style>
            <div className={`flex flex-col w-full ${className}`}>
                <label>{label}</label>
                <div className="relative" style={{ boxSizing: "border-box" }}>
                    <input
                        type="number"
                        defaultValue={defaultValue}
                        className="w-full box-border transition-all duration-300"
                        onChange={(event) => {
                            if (onChange)
                                onChange(event.target.value);
                        }}
                    />
                    <p className="absolute right-[0.75rem] top-[30%]">{ReactHtmlParser(unit)}</p>
                </div>
            </div>
        </>

    )
}
export default InputField