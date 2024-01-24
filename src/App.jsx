import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("#000000");

  const divStyle = {
    margin: "0 auto",
    backgroundColor: color,
    height: "100vh",
    width: "100vh",
    position: "relative",
  };

  const buttonStyle = {
    top: "50%",
    margin: "0 auto",
    display: "block",
  };

  console.log(color);

  const switchColor = () => {
    let str = "abcdef0123456789";
    let colorReady = "";
    for (let i = 0; i < 6; i++) {
      let indx = Math.floor(Math.random() * str.length + 1);
      console.log(indx);
      colorReady += str.charAt(indx);
    }
    setColor("#" + colorReady);
  };

  return (
    <div style={divStyle}>
      <button style={buttonStyle} onClick={switchColor}>
        Switch
      </button>
    </div>
  );
}

export default App;
