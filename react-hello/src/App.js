import React from "react";

export default function AppComponent() {
  return (
    <>
      <HelloWorld isLeaving={true} message="</> empty enclosing tags!" />
      <HelloWorld isLeaving={false} message="<div/> enclosing tags!" />
    </>
  );
}

function HelloWorld({ isLeaving, message }) {
  return (
    <>
      {/* comment: say Goodbye if leaving otherwise say hello */}
      <h1>
        <span>{isLeaving ? "Hello, " : "Goodbye, "}</span>
        <span>{message}</span>
      </h1>
    </>
  );
}

// export default function AppComponent() {
//   return (
//     <h1>
//       <HelloWorld/>
//     </h1>
//   );
// }

// function HelloWorld() {
//   return (
//     <>
//       <Hello/>
//       <World/>
//     </>
//   );
// }

// function Hello() {
//   return <span>Hello, </span>
// }

// function World() {
//   return <span>World!!!</span>
// }
