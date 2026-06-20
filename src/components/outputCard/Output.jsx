import { useContext } from "react";
import { Chatcontext } from "../../context/chatContext";

const Outputfield = () => {
  const { messages } = useContext(Chatcontext);

  return (
    <div className="output">

      {messages.map((msg, idx) => (
        <div key={idx} className="chat-block">

          {/* QUESTION */}
          {msg.type === "question" && (
            <div className="question">
              <p>{msg.text}</p>
            </div>
          )}

          {/* ANSWER */}
          {msg.type === "answer" && (
            <div className="answer">
              <p>{msg.text}</p>
            </div>
          )}

        </div>
      ))}

    </div>
  );
};

export default Outputfield;