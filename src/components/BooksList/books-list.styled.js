import styled from "@emotion/styled";

export const BooksContainer = styled.div`
    ${({ themeStyles }) => themeStyles}
    padding: 20px;
`;

export const BooksUnorderedList = styled.ul`
    padding: 0;
    list-style-type: none;
`;

export const BookItem = styled.li`
    padding: 10px;
    border-radius: 10px;
`;