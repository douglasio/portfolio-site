import { Fragment, useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import * as Styled from './App.styles.js';
import resume from './data/resume.json';

function App() {
	const [selectedTheme, setSelectedTheme] = useState('light');
	const userPrefersDark =
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches;
	const { name, byline, experience } = resume;

	const handleThemeToggle = () => {
		return selectedTheme === 'light'
			? setSelectedTheme('dark')
			: setSelectedTheme('light');
	};

	useEffect(() => {
		userPrefersDark && setSelectedTheme('dark');
		// return () => {
		//   cleanup
		// }
	}, [userPrefersDark]);

	return (
		<HelmetProvider>
			<Helmet>
				<title>Douglas Odell</title>
				<link rel="canonical" href="https://douglas-odell.netlify.app/" />
			</Helmet>
			<ThemeProvider theme={theme[selectedTheme]}>
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
								({ id, title, accomplishments }) => {
									return (
										<Fragment key={id}>
											<h3>{title}</h3>
											<ul>
												{accomplishments.map((accomplishment, i) => {
													return <li>{accomplishment}</li>;
												})}
											</ul>
										</Fragment>
									);
								}
							)}
						</section>
						<button onClick={handleThemeToggle}>Toggle Theme</button>
					</Styled.Main>
				</Styled.App>
			</ThemeProvider>
		</HelmetProvider>
	);
}

export default App;
