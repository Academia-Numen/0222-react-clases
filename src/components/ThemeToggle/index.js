import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ToogleButton, ToogleContainer } from "./theme-toggle.styled";

const ThemeToggle = () => {
    const { themeStyles, updateThemeStyles } = useContext(ThemeContext);

    return (
        <ToogleContainer themeStyles={themeStyles}>
            <ToogleButton onClick={updateThemeStyles}>
                Cambiar Tema
            </ToogleButton>
        </ToogleContainer>
    )
}

export default ThemeToggle;