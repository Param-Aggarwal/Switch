
import { useState } from "react";
import ThemeContext from "./ThemeContext";
import { useCallback } from "react";
import { useMemo } from "react";

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        console.log("toggletheme triggered !!")
        setTheme(prev => prev === "light" ? "dark" : "light");
    },[])

    const value = useMemo(() => { return { theme, toggleTheme } },[theme,toggleTheme])
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );

}

export default ThemeProvider;

