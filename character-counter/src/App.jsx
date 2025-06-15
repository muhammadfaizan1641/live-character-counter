import { useState } from 'react';

function App() {
  const [text, setText] = useState("");

  function handleChange(e){
    setText(e.target.value);
  }

  const charCount = text.length;
  const isOverLimit = charCount >200;

  return (
    <div style={{ padding: "20px" , fontFamily: "Arial"}} >
      <h2>📝 Live Character Counter</h2>

      <textarea
        value={text}
        onChange={handleChange}
        rows="6"
        cols="40"
        placeholder="Type your message..."
        style={{
          padding:"10px",
          border: isOverLimit?"2px solid red" : "1px solid gray",
          outline: "none",
          resize: "none"
        }} 
      />

        <p style={{marginTop:"10px"}}>
          Characters: {" "}
          <span style={{color: isOverLimit? "red": "black"}} >
            {charCount}/200
          </span>
        </p>

        {isOverLimit && (
          <p style={{color:"red", fontWeight:"bold"}} >
            ⚠️ Character limit exceeded!
          </p>
        )}

    </div>
  )
}

export default App;