const Box = (props) => {
    const { box } = props;
    const { width, height, color } = box
    return (
        <div
            style={{
                width: width + "px",
                height: height + "px",
                backgroundColor: color,
                margin: "10px"
            }}
        ></div>
    )
}

export default Box;