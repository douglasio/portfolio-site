import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        font-size: 16px;
    }

    body { 
        background-color: ${({ theme }) => theme.body.background};
        box-sizing: border-box;
        color: ${({ theme }) => theme.body.paragraph};
        font-family: 'Source Sans Pro', sans-serif;
        padding: 2rem 5rem;
    }

    h1 {
        color: ${({ theme }) => theme.body.h1};
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 3em;
        margin: 0;
    }

    h2 {
        color: ${({ theme }) => theme.body.h2};
        font-size: 1.5em;
    }

    h3 {
        color: ${({ theme }) => theme.body.h3};
        font-size: 1.1em;
    }

    p, ul {
        font-size: 1em;
    }
`;

export const App = styled.div``;

export const Header = styled.header`
	font-size: 2rem;

	.byline {
		font-size: 1rem;
		margin: 0;
	}
`;

export const Main = styled.main`
	font-size: 2rem;
`;

export const Footer = styled.footer``;
