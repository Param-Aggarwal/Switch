import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const ThemeSwitcher = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}> 
            Change Theme
        </button>
    );
}

export default ThemeSwitcher;