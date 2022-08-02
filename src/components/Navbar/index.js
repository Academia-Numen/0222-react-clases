import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { NavbarContainer } from "./navbar.styled";

const Navbar = () => {
    const { books } = useContext(BooksContext);
    const { themeStyles } = useContext(ThemeContext);

    return (
        <NavbarContainer themeStyles={themeStyles}>
            <h1>Reading List</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <span>Hoy, tu tienes {books.length} libros por leer </span>
        </NavbarContainer>
    )
}

export default Navbar;