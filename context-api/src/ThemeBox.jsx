import ThemeContext from "./context/ThemeContext";
import { useContext } from 'react';

const ThemeBox = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        border: "1px solid black",
        backgroundColor: theme === "light" ? "red" : "blue"
      }}
      >
          This is theme box component
    </div>
  );
};

export default ThemeBox;