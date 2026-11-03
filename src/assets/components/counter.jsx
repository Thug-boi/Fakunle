import { useState } from "react";

const CounterApp = () => {
  let [count, setCount] = useState(0);
  let [change, setChange] = useState("count is even");

  const handleAdd = () => {
    if (count >= 0 && count < 100) {
      setCount(count + 1);
    }
  };
  const handleSubtract = () => {
    if (count > 0 && count < 100) {
      setCount(count - 1);
    }
  };

  const toggleChange = () => {
    if (count >= count + 2) {
      setChange("count is even");
    } else {
      setChange("count is odd");
    }
  };

  return (
    <div
      className="count"
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "blue",
        padding: "20px",
        marginTop: "2rem",
        border: "1px solid",
      }}
    >
      <h1
        style={{
          fontWeight: "700",
          color: "white",
          textAlign: "center",
        }}
      >
        {count}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          className="increment"
          onClick={handleAdd}
          style={{
            marginRight: "7px",
            border: "none",
          }}
        >
          Add
        </button>
        <button
          className="decrement"
          onClick={handleSubtract}
          style={{
            border: "none",
          }}
        >
          subtract
        </button>
      </div>

      <h2
        style={{
          textAlign: "center",
          color: "white",
        }}
        onChange={toggleChange}
      >
        {change}
      </h2>
    </div>
  );
};

export default CounterApp;
