import styled from 'styled-components';

export const Avatar = styled.figure`
    display: inline-block;
    height: 5rem;
    margin-right: 1rem;
    width: 7rem;

    img {
        border-radius: 50%;
        height: auto;
        object-fit: contain;
        min-width: 100px;
        width: 100%;
    }
`;
