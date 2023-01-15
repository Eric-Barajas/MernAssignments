import { useState } from "react";

const CreateBoxes = (props) => {
    const { handleSubmit } = props;
    const [color, setColor] = useState('')
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')

    return (
        <form onSubmit={(e) => handleSubmit(e, color, width, height)}>
            <input
                type="text"
                placeholder="color"
                onChange={(e) => setColor(e.target.value)}
                value={color}
            />
            <input
                type="text"
                placeholder="width"
                onChange={(e) => setWidth(e.target.value)}
                value={width}
            />
            <input
                type="text"
                placeholder="height"
                onChange={(e) => setHeight(e.target.value)}
                value={height}
            />
            <input
                type="submit"
                value="Add Box"
            />
        </form>
    )
}

export default CreateBoxes;