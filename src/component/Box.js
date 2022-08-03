import React from "react";
import ReactDOM from "react-dom";
export default function Box(props) {
  //console.logs(id);
  //const [on, setOn] = React.useState(props.on); //initialsing state
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };
  // function toggle() {        //state change
  //   setOn((prevOn) => !prevOn);
  // }
  return (
    <div
      style={styles}
      className="box"
      onClick={() => props.toggle(props.id)}
    ></div>
  ); //event Listener
}
