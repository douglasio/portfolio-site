import { useState } from 'react';
import { useTheme } from 'styled-components';
import { default as WordCloud } from 'react-wordcloud';
import colors from '../style/colors';
// import theme from '../style/theme';
import * as Styled from './Skills.styles';
import Button from './Button';
import { BUTTON } from '../constants';

const VIEWS = {
    CLOUD: 'cloud',
    LIST: 'list',
};

const Skills = ({ items, title }) => {
    const [view, setView] = useState(VIEWS.CLOUD);
    const theme = useTheme();

    const handleSkillsToggle = () => {
        return view === VIEWS.CLOUD
            ? setView(VIEWS.LIST)
            : setView(VIEWS.CLOUD);
    };

    const parseWords = (words) => {
        return words.map(({ name, type }, i) => ({
            text: name,
            type: type,
            value: 100 - i,
        }));
    };

    const words = parseWords(items);

    return (
        <Styled.Skills>
            <h2>
                {title}
                <Button
                    className="toggle"
                    onClick={handleSkillsToggle}
                    size={BUTTON.SIZE.SMALL}
                    variant={BUTTON.VARIANT.TOGGLE}
                >
                    switch to {view}
                </Button>
            </h2>
            {view !== VIEWS.CLOUD ? (
                <WordCloud
                    callbacks={{
                        getWordColor: (word) =>
                            word.type === 'code'
                                ? theme.wordcloud.color1
                                : theme.wordcloud.color2,
                    }}
                    className="wordcloud"
                    options={{
                        deterministic: true,
                        enableTooltip: false,
                        fontFamily: 'Source Sans Pro',
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
