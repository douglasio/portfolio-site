import styled, { createGlobalStyle } from 'styled-components';

const bodyPadding = `3rem`;
const bodyPaddingSm = `1.5rem`;
const bodyPaddingLg = `10rem`;

export const GlobalStyle = createGlobalStyle`
    :root, body {
        font-size: 18px;
    }

    body { 
        background-color: ${({ theme }) => theme.body.background};
        box-sizing: border-box;
        color: ${({ theme }) => theme.body.paragraph};
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1rem;
        font-weight: 300;
        transition: all 200ms;
    }

    h1 {
        color: ${({ theme }) => theme.body.h1};
        font-family: 'Barlow', sans-serif;
        font-size: 3rem;
        font-weight: 700;
        line-height: 3rem;
        margin: 0;
    }

    h2 {
        background-color: ${({ theme }) => theme.body.h2.background};
        color: ${({ theme }) => theme.body.h2.text};
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
        font-size: 0.85rem;
        font-weight: 400;
        margin: 0;
    }

    p, li {
        font-size: 1rem;
    }

    p, ul > li {
        margin: 0.5rem 0;
        z-index: 1;
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
        z-index: 1;

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
            color: ${({ theme }) => theme.body.a.hover.text};
            mix-blend-mode: ${({ theme }) => theme.body.a.hover.blend};
            text-decoration: underline;

            :before {
                background-color: ${({ theme }) =>
                    theme.body.a.hover.background};
                display: block;
                transform: translateX(0);
            }
        }
    }

    button {
        cursor: pointer;
    }

    figure {
        margin: 0;
        padding: 0;
    }
`;

export const App = styled.div`
    @media screen and (min-width: 762px) {
        display: grid;
        grid-template-areas:
            'header header'
            'body sidebar'
            'footer footer'
            'subfooter subfooter';
        grid-template-columns: 70% 30%;
        grid-template-rows: repeat(4, auto);
    }

    h2 {
        text-transform: capitalize;
    }

    ul.has-sprites,
    ul.no-bullets {
        padding-left: 0;

        > li {
            list-style-type: none;
        }
    }

    .sprite {
        align-items: center;
        display: inline-flex;
        position: relative;

        > svg {
            position: absolute;
            left: -1.25em;
            width: 1em;
            transform: translateX(0);
            transition: transform 200ms;

            path {
                fill: ${({ theme }) => theme.body.a.sprite};
            }
        }
    }

    a.sprite:hover > svg {
        transform: translateX(-1em);

        path {
            fill: ${({ theme }) => theme.body.a.hover.sprite};
        }
    }
`;

export const Header = styled.header`
    align-items: center;
    background-color: ${({ theme }) => theme.header.background};
    color: ${({ theme }) => theme.header.paragraph};
    font-size: 2rem;
    grid-area: header;
    justify-content: space-between;
    position: relative;

    .lockup {
        align-items: flex-start;
        display: flex;
        padding: 0 ${bodyPaddingSm} ${bodyPaddingSm};
    }

    .utility {
        align-items: right;
        display: flex;
        justify-content: flex-end;
        margin: 0 ${bodyPaddingSm} 1rem;
    }

    .text {
        display: inline-block;
    }

    h1 {
        display: inline-block;
        color: ${({ theme }) => theme.header.h1};
    }

    .byline {
        display: block;
        font-size: 1rem;
        margin: 0;
    }

    @media screen and (min-width: 762px) {
        .lockup {
            padding: 1rem ${bodyPadding} ${bodyPadding};
        }

        .utility {
            margin: 0 ${bodyPadding};
        }
    }

    @media screen and (min-width: 2000px) {
        .lockup {
            padding: 3rem ${bodyPaddingLg};
        }
    }
`;

export const Main = styled.main`
    box-sizing: border-box;
    font-size: 3rem;
    grid-area: body;
    padding: ${bodyPaddingSm};

    h2 {
        background-color: ${({ theme }) => theme.main.h2.background};
        padding: 1rem;
        padding-left: ${bodyPaddingSm};
        margin: 0 -${bodyPaddingSm} 1rem -${bodyPaddingSm};
    }

    @media screen and (min-width: 762px) {
        padding: ${bodyPadding};

        h2 {
            padding-left: ${bodyPadding};
            margin: 0 -${bodyPadding} 1rem -${bodyPadding};
        }
    }

    @media screen and (min-width: 2000px) {
        padding: ${bodyPadding} ${bodyPaddingLg};

        h2 {
            padding-left: ${bodyPaddingLg};
            margin: 0 -${bodyPaddingLg} 1rem -${bodyPaddingLg};
        }
    }
`;

export const Sidebar = styled.aside`
    grid-area: sidebar;
    padding: ${bodyPaddingSm};

    .contact-section {
        background-color: ${({ theme }) => theme.body.backgroundAlt};
        padding: 0.5rem 3rem 2rem;
    }

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
        padding: ${bodyPadding};
    }

    @media screen and (min-width: 2000px) {
        padding: ${bodyPadding} ${bodyPaddingLg};
    }
`;

export const Footer = styled.footer`
    align-items: flex-start;
    background-color: ${({ theme }) => theme.footer.background};
    grid-area: footer;
    padding: ${bodyPaddingSm};

    > *:not(:last-child) {
        margin-bottom: 2rem;
        margin-right: 4rem;
    }

    .lockup {
        align-items: center;
        display: flex;
    }

    h1 {
        color: ${({ theme }) => theme.footer.h1.text};
        display: flex;
        white-space: pre-line;
        width: 10rem;
    }

    h2 {
        margin-top: 0;
    }

    .contact-section ul {
        margin-left: 1.5rem;
    }

    button {
        margin-top: 1rem;
    }

    @media screen and (min-width: 762px) {
        display: flex;
        padding: ${bodyPadding};
    }

    @media screen and (min-width: 2000px) {
        padding: ${bodyPadding} ${bodyPaddingLg};
    }
`;

export const SubFooter = styled.footer`
    color: ${({ theme }) => theme.body.muted};
    font-size: 0.8em;
    grid-area: subfooter;
    background-color: ${({ theme }) => theme.footer.background};
    padding: ${bodyPaddingSm};

    @media screen and (min-width: 762px) {
        padding: 1rem ${bodyPadding};
    }

    @media screen and (min-width: 2000px) {
        padding: 1rem ${bodyPaddingLg};
    }
`;
