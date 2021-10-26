import { useEffect, useState } from 'react';
import { CookiesProvider } from 'react-cookie';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import * as Styled from './App.styles.js';
import Avatar from './components/Avatar';
import Job from './components/Job';
import Skills from './components/Skills';
import resume from './data/resume.json';
import useSelectedTheme from './hooks/useSelectedTheme';
import Button from './components/Button.js';
import { BUTTON } from './constants/index.js';
import Contact from './components/Contact.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import pdf from './assets/Resume - 2021-10 - Doug Odell.pdf';

const App = () => {
    const [mobileView, setMobileView] = useState(false);
    const { selectedTheme, toggleSelectedTheme } = useSelectedTheme();

    const mql = window.matchMedia('(max-width: 762px)');

    const {
        name,
        byline,
        experience,
        contact,
        skills,
        certifications,
        education,
    } = resume;

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
        <CookiesProvider>
            <HelmetProvider>
                <Helmet>
                    <title>Douglas Odell</title>
                    <link
                        rel="canonical"
                        href="https://douglas-odell.netlify.app/"
                    />
                    {selectedTheme && (
                        <meta
                            name="theme-color"
                            content={selectedTheme.header.background}
                        />
                    )}
                    <meta
                        name="description"
                        content="Douglas is a user experience-driven front-end web developer, technology strategist, and team leader"
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
                                        variant="toggle">
                                        Toggle Theme
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
                                                <FontAwesomeIcon
                                                    icon={faReact}
                                                />
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
                                &copy; 2021 Douglas Odell
                            </Styled.SubFooter>
                        </Styled.App>
                    </ThemeProvider>
                )}
            </HelmetProvider>
        </CookiesProvider>
    );
};

export default App;
