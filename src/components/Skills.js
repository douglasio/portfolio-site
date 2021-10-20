import { useState } from 'react';
import { default as WordCloud } from 'react-wordcloud';
import colors from '../style/colors';
import theme from '../style/theme';
import * as Styled from './Skills.styles';

const VIEWS = {
    CLOUD: 'cloud',
    LIST: 'list',
};

const Skills = ({ items, title }) => {
    const [view, setView] = useState(VIEWS.CLOUD);
    const handleSkillsToggle = () => {
        return view === VIEWS.CLOUD
            ? setView(VIEWS.LIST)
            : setView(VIEWS.CLOUD);
    };

    const parseWords = (words) => {
        return words
            .map(({ name, type }, i) => ({
                text: name,
                type: type,
                value: 100 - i,
            }));
    };

    const words = parseWords(items);

console.log(words)

    return (
        <Styled.Skills>
            <h2>
                {title}
                <button
                    className="toggle"
                    type="button"
                    onClick={handleSkillsToggle}
                >
                    switch to {view}
                </button>
            </h2>
            {view !== VIEWS.CLOUD ? (
                <WordCloud
                callbacks={{getWordColor: word => word.type === 'code' ? "white" : "red",}}
                    options={{
                        rotations: 1,
                        rotationAngles: [0],
                    }}
                    words={words}
                />
            ) : (
                <>
                    <h3>code</h3>
                    <ul>
                        {items
                            .filter(
                                ({ type }) =>
                                    type === 'code'
                            )
                            .map(({ name, type }, i) => {
                                return (
                                    <li
                                        key={`${name.substring(
                                            0,
                                            3
                                        )}${i}`}
                                    >
                                        {name}
                                    </li>
                                );
                            })}
                    </ul>
                    <h3>Software</h3>
                    <ul>
                        {items
                            .filter(
                                ({ type }) =>
                                    type === 'software'
                            )
                            .map(({ name, type }, i) => {
                                return (
                                    <li
                                        key={`${name.substring(
                                            0,
                                            3
                                        )}${i}`}
                                    >
                                        {name}
                                    </li>
                                );
                            })}
                    </ul>
                </>
            )}
        </Styled.Skills>
    );
};

export default Skills;
