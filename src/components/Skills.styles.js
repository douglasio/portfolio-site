import styled from 'styled-components';

export const Skills = styled.section`
    .toggle {
        background-color: ${({theme}) => theme.button.secondary.background};
        margin-left: 1rem;
        margin-top: -0.5em;
        text-transform: capitalize;
        vertical-align: middle;

        &:hover {
            background-color: ${({theme}) => theme.button.secondary.hover.background};
        }
    }

    h3 {
        margin: 0.5em 0;
        text-transform: uppercase;
    }

    ul {
        margin: 0.5rem 0 1rem;

        > li {
            display: inline;
            list-style-type: none;

            &:not(:last-of-type) {
                :after {
                    content: ', ';
                    display: inline;
                }
            }
        }
    }

    .wordcloud {
        transform: scale(1.2);
    }
`;
