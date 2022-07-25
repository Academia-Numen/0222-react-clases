import styled from "@emotion/styled";

export const ToogleContainer = styled.div`
    ${({ themeStyles }) => themeStyles}
    padding: 1rem;
    padding-top: 0;
`;

export const ToogleButton = styled.button`
    background: skyblue;
    color: #555;
    border: none;
    border-radius: 5px;
    padding: .3rem .5rem;
`