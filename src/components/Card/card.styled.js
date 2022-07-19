import styled from "@emotion/styled";

export const CardContainer = styled.li`
    background: ${({ option, rival }) => option === rival ? 'yellow' : 'skyblue' };
    padding: 10px;
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 112px;
`;

export const Text = styled.h2`
    font-size: ${({ size }) => size}px;
`;

export const TimeContainer = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 1;
`;