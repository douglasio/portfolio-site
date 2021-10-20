import styled, {
    createGlobalStyle,
} from 'styled-components';

const bodyPadding = `3rem`;

export const GlobalStyle = createGlobalStyle`
    :root, body {
        font-size: 18px;
    }

    body { 
        background-color: ${({ theme }) =>
            theme.body.background};
        box-sizing: border-box;
        color: ${({ theme }) => theme.body.paragraph};
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        transition: all 200ms;
    }

    h1 {
        color: ${({ theme }) => theme.body.h1};
        font-family: 'Barlow', sans-serif;
        font-size: 3rem;
        font-weight: 700;
        margin: 0;
    }

    h2 {
        color: ${({ theme }) => theme.body.h2};
        font-size: 1.5rem;
        font-weight: 600;
    }

    h3 {
        color: ${({ theme }) => theme.body.h3};
        font-size: 1.1rem;
        font-weight: 600;
        margin: 0;
    }

    h4 {
        color: ${({ theme }) => theme.body.h4};
        font-size: 0.8rem;
        font-weight: 400;
        margin: 0;
    }

    p, li {
        font-size: 1rem;
    }

    p, ul > li {
        margin: 0.5rem 0;
    }

    ul {
        margin: 0;
        padding: 0 1rem;
    }

    a {
        color: ${({ theme }) => theme.body.a.text};
        display: inline-block;
        position: relative;
        text-decoration: none;

        :before {
            content: "";
            background-color: transparent;
            display: block;
            height: 2em;
            left: -1em;
            position: absolute;
            top: -25%;
            width: calc(100% + 2em);
            transform: translateX(1em);    
            transition: all 200ms;
            z-index: -1;
        }

        &:hover {
            color: ${({ theme }) =>
                theme.body.a.hover.text};
            text-decoration: underline;

            :before {
                background-color: ${({ theme }) =>
                    theme.body.a.hover.background};
                display: block;
                transform: translateX(0);
            }
        }
    }
`;

export const App = styled.div`
    display: grid;
    grid-template-areas:
        'header header'
        'body sidebar'
        'body sidebar'
        'body sidebar'
        'footer footer';
    grid-template-columns: 70% 30%;
    grid-template-rows: repeat(4, auto);

    h2 {
        text-transform: capitalize;
    }
`;

export const Header = styled.header`
    background-color: ${({ theme }) =>
        theme.header.background};
    color: ${({ theme }) => theme.header.paragraph};
    font-size: 2rem;
    grid-area: header;
    padding: ${bodyPadding};

    h1 {
        color: ${({ theme }) => theme.header.h1};
    }

    .byline {
        font-size: 1rem;
        margin: 0;
    }
`;

export const Main = styled.main`
    font-size: 3rem;
    grid-area: body;
    box-sizing: border-box;
    padding: ${bodyPadding};
`;

export const Sidebar = styled.aside`
    grid-area: sidebar;
    padding: ${bodyPadding};

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

    a {
        .sprite {
            position: absolute;
            left: -1.5em;
            width: 1em;
            transform: translateX(0);
            transition: transform 200ms;

            path {
                fill: ${({ theme }) => theme.body.a.sprite};
            }
        }

        &:hover .sprite {
            transform: translateX(-1em);

            path {
                fill: ${({ theme }) =>
                    theme.body.a.hover.sprite};
            }
        }
    }
`;

export const Footer = styled.footer`
    grid-area: footer;
    padding: ${bodyPadding};
`;
