import styled from 'styled-components';

export const Contact = styled.section`
    ul {
        margin: 0;
        padding: 0;

        li:first-of-type {
            margin-top: 0;
        }

        li {
            list-style-type: none;
        }
    }

    span + small {
        display: block;
    }

    @media screen and (min-width: 762px) {
        .has-sprites {
            margin-left: 0;
        }
    }
`;

export const ContactHorizontal = styled.nav`
    ul {
        align-items: center;
        margin-left: -1.5rem;

        li {
            list-style-type: none;

            a {
                text-transform: lowercase;

                &.sprite {
                    font-size: 0.8rem;
                    margin-left: 2.5rem;
                }
            }
        }
    }

    @media screen and (min-width: 762px) {
        ul {
            display: flex;
        }
    }
`;
