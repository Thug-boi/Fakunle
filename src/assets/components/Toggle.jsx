import { useState } from "react";

const ToggleApp = () => {
  const [name, setName] = useState("");
  const [buttonText, setButtonText] = useState("review");

  const handleToggle = () => {
    if (name === "") {
      setName("AHMED");
      setButtonText("unreview");
    } else {
      setName("");
      setButtonText("review");
    }
  };

  return (
    <div
      className="toggle-app"
      style={{
        backgroundColor: "grey",
        width: "200px",
        height: "200px",
        color: "red",
        fontFamily: "cursive",
        margin: "0px auto",
        //    text align center
        padding: "20px",
        borderRadius: "11px",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <h1>{name}</h1>
      <button
        className="toggle"
        style={{ padding: "5px 20px" }}
        onClick={handleToggle}
      >
        {" "}
        {buttonText}
      </button>
    </div>
  );
};

export default ToggleApp;
