import React from "react"
import{useState} from "react"

const SwitchButton = ({initialText, afterText, color}) => {
    const [buttonText, setButtonText] = useState(initialText);
    return (
        <button className={`${color} text-3xl`} onClick={() => setButtonText(afterText)}>{buttonText}</button>
    );
}
export default SwitchButton