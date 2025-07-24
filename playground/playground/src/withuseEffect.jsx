
import { useRef, useEffect } from "react";
import "./index.css";

function WithUseEffect() {
    const boxRef = useRef();
  
    useEffect(() => {
      const box = boxRef.current;
      console.log("🎯 useEffect: width =", box.offsetWidth);
      box.style.backgroundColor = box.offsetWidth > 300 ? "lightgreen" : "lightcoral";
    }, []);
  
    return (
      <div
        ref={boxRef}
        className="box"
      >
        useEffect Box
      </div>
    );
  }
  
  export default WithUseEffect;