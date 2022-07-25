import styled from "@emotion/styled";

export const NavbarContainer = styled.nav`
    ${({ themeStyles }) => themeStyles}
    padding: 5px;
    ul {
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
`;
