import { useState } from "react";
const ColorPicker = (props) => {
    const { handleSubmit } = props;
    const [newBox, setNewBox] = useState({
        color: "",
        width: "",
        height: ""
    })

    const handleOnChange = (e) => {
        setNewBox({
            ...newBox,
            [e.target.name]: e.target.value
        })
    }

    // This will deconstruct the box
    const { color, width, height } = newBox;
    return (
        <form onSubmit={(e) => handleSubmit(e, newBox)}>
            <input
                type="text"
                placeholder="color"
                name="color"
                onChange={handleOnChange}
                value={color}
            />
            <input
                type="text"
                placeholder="width"
                name="width"
                onChange={handleOnChange}
                value={width}
            />
            <input
                type="text"
                placeholder="height"
                name="height"
                onChange={handleOnChange}
                value={height}
            />
            <input
                type="submit"
                value="Add Box"
            />
        </form>
    )
}

export default ColorPicker;