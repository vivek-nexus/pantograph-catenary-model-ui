function PopUpContainer({ colour, children }) {
    return (
        <div
            className="p-8 max-w-[40vmax] max-h-[30vmax] rounded-lg overflow-auto animate__animated animate__fadeIn animate__faster"
            style={{
                borderLeft: `8px solid ${colour}`,
                background: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(8px)"
            }}
        >
            {children}
        </div>
    )
}

export default PopUpContainer