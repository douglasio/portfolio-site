import { useEffect, useState } from 'react';

// external
import ReactGA from 'react-ga4';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

// internal
import { useSelectedTheme } from 'hooks';
import { Avatar, Button, Contact, Job, Skills } from 'components';
import { resume } from 'data';
import { BUTTON, GA_MEASUREMENT_ID } from 'constants';
import * as Styled from './App.styles.js';

const App = () => {
    const [mobileView, setMobileView] = useState(false);
    const { selectedTheme, selectedThemeName, toggleSelectedTheme } =
        useSelectedTheme();

    ReactGA.initialize(GA_MEASUREMENT_ID);

    const mql = window.matchMedia('(max-width: 762px)');

    const {
        name,
        byline,
        intro,
        experience,
        contact,
        skills,
        certifications,
        education,
    } = resume;

    const currentYear = new Date().getFullYear();

    const pdf = process.env.PUBLIC_URL + '/Resume_DougOdell.pdf';

    const handlePDFButton = () => {
        return window.open(pdf);
    };

    useEffect(() => {
        mql.matches ? setMobileView(true) : setMobileView(false);

        mql.addEventListener('change', (e) => {
            e.matches ? setMobileView(true) : setMobileView(false);
        });
        return () => {
            mql.removeEventListener('change', (e) => {
                return false;
            });
        };
    }, [mql]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Douglas Odell - Resume and Portfolio</title>
                <meta
                    name="title"
                    content="Douglas Odell - Resume and Portfolio"
                />
                <meta name="description" content={intro} />
                <meta name="keywords" content="douglas odell, doug odell" />
                <meta name="robots" content="index, follow" />
                <meta
                    http-equiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
                <meta name="language" content="English" />
                <meta name="author" content="Douglas Odell" />
                {selectedTheme && (
                    <meta
                        name="theme-color"
                        content={selectedTheme.header.background}
                    />
                )}
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
                            <div className="utility">
                                <Button
                                    className="theme-toggle"
                                    onClick={toggleSelectedTheme}
                                    size={
                                        mobileView
                                            ? BUTTON.SIZE.SMALL
                                            : BUTTON.SIZE.MEDIUM
                                    }
                                    title="Toggle theme"
                                    variant="toggle">
                                    {selectedThemeName === 'light' ? (
                                        <FontAwesomeIcon icon={faSun} />
                                    ) : (
                                        <FontAwesomeIcon icon={faMoon} />
                                    )}
                                </Button>
                            </div>
                            <div className="lockup">
                                <Avatar />
                                <div className="text">
                                    <h1>{name}</h1>
                                    <p className="byline">{byline}</p>
                                    <Contact {...contact} horizontal />
                                </div>
                            </div>
                        </Styled.Header>
                        <Styled.Main>
                            <section>
                                <p>{intro}</p>
                            </section>
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
                            <Skills {...skills} />
                            <section>
                                <h2>{certifications.title}</h2>
                                <ul>
                                    {certifications.items.map((item, i) => {
                                        return (
                                            <li key={i}>
                                                {item.title && (
                                                    <span>{item.title}</span>
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
                                                    <span>{item.title}</span>
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
                        <Styled.Footer>
                            <section className="lockup">
                                <Avatar />
                                <h1>{name}</h1>
                            </section>
                            <Contact {...contact} />
                            <section>
                                <h2>this website</h2>
                                <ul className="has-sprites">
                                    <li>
                                        <a
                                            href="https://xd.adobe.com/view/9a02cf8d-fe55-4126-9bf2-3bda833ee87b-cf51/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Design System
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/douglasio/portfolio-site"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Source Code
                                        </a>
                                    </li>
                                    <li>
                                        Built with{' '}
                                        <a
                                            href="https://reactjs.org/"
                                            rel="noreferrer"
                                            target="_blank">
                                            React{' '}
                                            <FontAwesomeIcon icon={faReact} />
                                        </a>
                                    </li>
                                    <li>Hosted with Netlify</li>

                                    <li>
                                        <Button
                                            download="Resume"
                                            onClick={handlePDFButton}
                                            size={BUTTON.SIZE.LARGE}>
                                            Download Resume (PDF)
                                        </Button>
                                    </li>
                                </ul>
                            </section>
                        </Styled.Footer>
                        <Styled.SubFooter>
                            &copy; {currentYear} Douglas Odell
                        </Styled.SubFooter>
                    </Styled.App>
                </ThemeProvider>
            )}
        </HelmetProvider>
    );
};

export default App;
