import { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import { SendHorizontal } from 'lucide-react';
import { Chatcontext } from "../../context/chatContext";
const Inputfield = () => {
    const [input, setinput] = useState("")
    const { addMessage } = useContext(Chatcontext)
    const handlesubmit = (e) => {
        e.preventDefault()
        if (input.trim() === "") return;

        addMessage(input);
        setinput("");


    }
    return (
        <>
            <div className="inputfield">
                <form onSubmit={handlesubmit}>
                    <input value={input} onChange={(e) => setinput(e.target.value)} type="text" placeholder="Ask..." />
                    <button type="submit" className="send-btn">
                        <SendHorizontal size={18} />

                    </button>
                </form>


            </div>

        </>
    )
}
export default Inputfield;