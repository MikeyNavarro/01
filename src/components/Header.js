import { useState } from "react";

const Header = () => {
  const [backgroundColor, setBackGroundColor] = useState("mediumblue");

  const headerStyle = {
    backgroundColor: backgroundColor,
    color: "#fff",
  };

  const backgroundColorChangeHandler = () => {
    setBackGroundColor("red");
  };

  return (
    <header style={headerStyle}>
      <h1>Groceries List</h1>
      <button
        onDoubleClick={() => setBackGroundColor("mediumblue")}
        onClick={backgroundColorChangeHandler}
      >
        {backgroundColor === "mediumblue" ? "Make Red" : "Make Blue"}
      </button>
    </header>
  );
};

export default Header;
