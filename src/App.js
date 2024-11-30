import { useEffect, useRef, useState } from "react";

function App() {
  // const firstName = useRef("avin esmaili");
  // console.log(firstName);
  // console.log(firstName.current);
  // firstName.current = "sali esp";
  // console.log(firstName);
  // console.log(firstName.current);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  useEffect(()=>{
    // console.log(inputRef.current)
    inputRef.current.focus()
  })
  // const clickHandler = ()=>{
  //   inputRef.current.focus()
  // }
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        ref={inputRef}
      />

      {/* <button onClick={clickHandler}>Click</button> */}
    </>
  );
}

export default App;
