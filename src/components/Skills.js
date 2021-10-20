import { useState } from 'react';
import * as Styled from './Skills.styles';

const VIEWS = {
    CLOUD: 'cloud',
    LIST: 'list',
};

const Skills = ({ code, software, title }) => {
    const [view, setView] = useState(VIEWS.CLOUD);
    const handleSkillsToggle = () => {
        return view === VIEWS.CLOUD
            ? setView(VIEWS.LIST)
            : setView(VIEWS.CLOUD);
    };

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

            {view === VIEWS.CLOUD ? (
                <p>test</p>
            ) : (
                <>
                    <h3>{code.title}</h3>
                    <ul>
                        {code.items.map((item, i) => {
                            return (
                                <li
                                    key={`${item.substring(
                                        0,
                                        3
                                    )}${i}`}
                                >
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                    <h3>{software.title}</h3>
                    <ul>
                        {software.items.map((item, i) => {
                            return (
                                <li
                                    key={`${item.substring(
                                        0,
                                        3
                                    )}${i}`}
                                >
                                    {item}
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
