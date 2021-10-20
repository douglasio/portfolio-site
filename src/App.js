// import { useEffect, useState } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import * as Styled from './App.styles.js';
import Job from './components/Job';
import resume from './data/resume.json';
import useSelectedTheme from './hooks/useSelectedTheme';

function App() {
  const { selectedTheme, toggleSelectedTheme } =
    useSelectedTheme();
  const { name, byline, experience } = resume;

  return (
    <CookiesProvider>
      <HelmetProvider>
        <Helmet>
          <title>Douglas Odell</title>
          <link
            rel="canonical"
            href="https://douglas-odell.netlify.app/"
          />
        </Helmet>
        {selectedTheme && (
          <ThemeProvider theme={selectedTheme}>
            <Styled.App>
              <Styled.GlobalStyle />
              <Styled.Header>
                <h1>{name}</h1>
                <p className="byline">{byline}</p>
              </Styled.Header>
              <Styled.Main>
                <section>
                  <h2>{experience.professional.title}</h2>
                  {experience.professional.entries.map(
                    ( entry ) => {
                      return (
                        <Job details={entry} key={entry.id} />
                      );
                    }
                  )}
                </section>
              </Styled.Main>
              <Styled.Sidebar>
                <button
                  type="button"
                  onClick={toggleSelectedTheme}
                >
                  Toggle Theme
                </button>
                meesa sidebar
              </Styled.Sidebar>
              <Styled.Footer>
                Footer
              </Styled.Footer>
            </Styled.App>
          </ThemeProvider>
        )}
      </HelmetProvider>
    </CookiesProvider>
  );
}

export default App;
