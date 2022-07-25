import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [isLightTheme, setIsLightTheme] = useState(true);

    const updateThemeStyles = () => setIsLightTheme(!isLightTheme);
  
    const themeStyles = `
      color: ${isLightTheme ? '#555' : '#ddd' };
      background: ${isLightTheme ? '#eee' : '#555' };
    `;

    return(
        <ThemeContext.Provider value={{ updateThemeStyles, themeStyles }}>
            { props.children }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;