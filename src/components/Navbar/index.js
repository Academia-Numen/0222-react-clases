import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { NavbarContainer } from "./navbar.styled";

const Navbar = () => {
    const books = useContext(BooksContext);
    const { themeStyles } = useContext(ThemeContext);

    return (
        <NavbarContainer themeStyles={themeStyles}>
            <h1>Libros Disponibles: {books.length} </h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </NavbarContainer>
    )
}

export default Navbar;