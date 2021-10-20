// import { useEffect, useState } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faCoffee, faPhone } from '@fortawesome/free-solid-svg-icons'
import * as Styled from './App.styles.js';
import Job from './components/Job';
import Skills from './components/Skills';
import resume from './data/resume.json';
import useSelectedTheme from './hooks/useSelectedTheme';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  const { selectedTheme, toggleSelectedTheme } =
    useSelectedTheme();
  const {
    name,
    byline,
    experience,
    contact,
    skills,
    certifications,
    education,
  } = resume;

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
                <button
                  type="button"
                  onClick={toggleSelectedTheme}
                >
                  Toggle Theme
                </button>
              </Styled.Header>
              <Styled.Main>
                <section>
                  <h2>{experience.professional.title}</h2>
                  {experience.professional.entries.map(
                    (entry) => {
                      return (
                        <Job
                          details={entry}
                          key={entry.id}
                        />
                      );
                    }
                  )}
                </section>
              </Styled.Main>
              <Styled.Sidebar>
                <section>
                  <h2>{contact.title}</h2>
                  <ul>
                    <li><a href={`tel:+${contact.items.phone.replace(/[^\d.-]/g, '')}`}><FontAwesomeIcon className="sprite" icon={faPhone} />{contact.items.phone}</a></li>
                    <li><a href={`mailto:+${contact.items.email}`}><FontAwesomeIcon className="sprite" icon={faAt} />{contact.items.email}</a></li>
                    <li><a href={contact.items.linkedin} target="_blank"><FontAwesomeIcon className="sprite" icon={faLinkedin} />{contact.items.linkedin}</a></li>
                    <li><a href={contact.items.github} target="_blank"><FontAwesomeIcon className="sprite" icon={faGithub} />{contact.items.github}</a></li>
                  </ul>
                </section>
                <section>
                    <Skills {...skills} />
                </section>

                <h2>{education.title}</h2>
              </Styled.Sidebar>
              <Styled.Footer>Footer</Styled.Footer>
            </Styled.App>
          </ThemeProvider>
        )}
      </HelmetProvider>
    </CookiesProvider>
  );
}

export default App;
