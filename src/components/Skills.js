import { useTheme } from 'styled-components';
import * as Styled from './Skills.styles';
import Button from './Button';
import { BUTTON } from '../constants';

const skillsViewCookie = 'skillsView';

const Skills = ({ items, title }) => {
    const theme = useTheme();

    return (
        <Styled.Skills>
            <h2>{title}</h2>

            <h3>code</h3>
            <ul>
                {items
                    .filter(({ type }) => type === 'code')
                    .map(({ name, type }, i) => {
                        return (
                            <li key={`${name.substring(0, 3)}${i}`}>{name}</li>
                        );
                    })}
            </ul>
            <h3>software</h3>
            <ul>
                {items
                    .filter(({ type }) => type === 'software')
                    .map(({ name, type }, i) => {
                        return (
                            <li key={`${name.substring(0, 3)}${i}`}>{name}</li>
                        );
                    })}
            </ul>
        </Styled.Skills>
    );
};

export default Skills;
