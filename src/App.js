// import { useEffect, useState } from 'react';
import { CookiesProvider } from 'react-cookie';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import * as Styled from './App.styles.js';
import Job from './components/Job';
import Skills from './components/Skills';
import resume from './data/resume.json';
import useSelectedTheme from './hooks/useSelectedTheme';
import Button from './components/Button.js';
import { BUTTON } from './constants/index.js';
import Contact from './components/Contact.js';
import dougImg from './assets/doug.jpg';

function App() {
    const { selectedTheme, toggleSelectedTheme } = useSelectedTheme();
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
                                <div className="column1">
                                    <div className="name-lockup">
                                        <figure className="avatar">
                                            <img
                                                alt="Douglas standing in front of a bridge in New York"
                                                src={dougImg}
                                            />
                                        </figure>
                                        <h1>{name}</h1>
                                    </div>
                                    <p className="byline">{byline}</p>
                                </div>
                                <div className="column2">
                                    <Button
                                        className="theme-toggle"
                                        onClick={toggleSelectedTheme}
                                        size={BUTTON.SIZE.MEDIUM}
                                        variant="toggle">
                                        Toggle Theme
                                    </Button>
                                </div>
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
                                <Contact {...contact} />
                                <section>
                                    <Skills {...skills} />
                                </section>
                                <section>
                                    <h2>{certifications.title}</h2>
                                    <ul>
                                        {certifications.items.map((item, i) => {
                                            return (
                                                <li key={i}>
                                                    {item.title && (
                                                        <span>
                                                            {item.title}
                                                        </span>
                                                    )}
                                                    {item.institution && (
                                                        <small>
                                                            {item.institution}
                                                        </small>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </section>
                                <section>
                                    <h2>{education.title}</h2>
                                    <ul>
                                        {education.items.map((item, i) => {
                                            return (
                                                <li key={i}>
                                                    {item.title && (
                                                        <span>
                                                            {item.title}
                                                        </span>
                                                    )}
                                                    {item.institution && (
                                                        <small>
                                                            {item.institution}
                                                        </small>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </section>
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
