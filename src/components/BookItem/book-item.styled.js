import styled from '@emotion/styled';

export const BookItemContainer = styled.li`
    padding: 10px;
    border-radius: 10px;
    font-weight: 600;
    div + div {
        font-weight: 400;
        font-style: italic;
        margin-top: 5px;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TextContainer = styled.div`
    ${({ isRead }) => isRead && `
        text-decoration: line-through;
        font-weight: 400;
        color: grey;
    `}
    text-align: left;
`;

export const IconContainer = styled.div`
    #check {
        color: #34eb7b;
        cursor: pointer;
        &hover {
            color: #128a42;
        }
    }
    #cross {
        color: #eb3a34;
        cursor: pointer;
        &hover {
            color: #b52621;
        }
    }
`;