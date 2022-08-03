//import logo from "./logo.svg";
import "./App.css";
import React from "react";
//import ReactDOM from "react-dom";
import Boxes from "./component/Boxes";
import Box from "./component/Box";
import "./style.css";

function App(props) {
  const [squares, setSquares] = React.useState(Boxes); //maintain state

  function toggle(id) {
    console.log(id);
    //state change
    //setOn((prevOn) => !prevOn);
    //updating new items
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }
  // const styles = {
  //   backgroundColor: props.darkMode ? "#222222" : "#cccccc",
  // };

  const squareElements = squares.map((item) => (
    <Box key={item.id} id={item.id} on={item.on} toggle={toggle} /> //rendering box component
  ));
  return <div>{squareElements}</div>;
}

export default App;
