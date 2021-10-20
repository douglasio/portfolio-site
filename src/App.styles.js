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
        font-weight: 700;
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
`;

export const Header = styled.header`
  background-color: ${({ theme }) =>
    theme.header.background};
  color: ${({ theme }) => theme.header.paragraph};
  font-size: 2rem;
  grid-area: header;
  padding: ${bodyPadding};

  h1 {
    color: ${({ theme }) =>
    theme.header.h1};
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
`;

export const Footer = styled.footer`
  grid-area: footer;
  padding: ${bodyPadding};
`;
