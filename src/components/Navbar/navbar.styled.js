import styled from "@emotion/styled";

export const NavbarContainer = styled.nav`
    ${({ themeStyles }) => themeStyles}
    padding: 5px;
    padding-bottom: 20px;
    h1 {
        text-decoration: underline;
    }
    ul {
        padding: 0;
        cursor: pointer;
    }
    li {
        display: inline-block;
        margin: 0 10px;
        font-weight: 600;
    }
`;
