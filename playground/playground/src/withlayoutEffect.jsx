import { useRef, useLayoutEffect } from "react";
import "./index.css";


function WithUseLayoutEffect() {
    const boxRef = useRef();
  
    useLayoutEffect(() => {
      const box = boxRef.current;
      console.log("⚡ useLayoutEffect: width =", box.offsetWidth);
      box.style.backgroundColor = box.offsetWidth > 300 ? "lightgreen" : "lightcoral";
    }, []);
  
    return (
      <div
        ref={boxRef}
        className="box"
      >
        useLayoutEffect Box
      </div>
    );
}
  
export default WithUseLayoutEffect;