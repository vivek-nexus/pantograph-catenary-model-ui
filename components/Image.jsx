function Image(props) {
    return (
        <img src={`${process.env.LINK_PREFIX}/${props.src}`} className={props.className} />
    )
}

export default Image;