import styled from 'styled-components';

export const Job = styled.div`
    margin-bottom: 3rem;

    ul {
        margin: 1rem 0;

        li::marker {
            color: ${({ theme }) => theme.body.marker};
        }
    }
`;
