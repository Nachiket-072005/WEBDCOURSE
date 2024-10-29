import React from "react";

// React.memo -> It is a higher order component. It is similar to PureComponent in class components. It is used to prevent unnecessary re-renders of the component. It is used to optimize the performance of the functional component.
// If you are using funciton inside component then React.memo will not work. It will only work if you are using functional component.
const ChildComp = React.memo((props) => {
  console.log("Child Component Rendered");
  return (
    <div>
      <button onClick={props.handleIncrement}>{props.buttonName}</button>
    </div>
  );
});

export default ChildComp;
