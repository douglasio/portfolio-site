import * as Styled from './Skills.styles';

export const Skills = ({ items, title }) => {
    return (
        <Styled.Skills>
            <h2>{title}</h2>

            <h3>code</h3>
            <ul>
                {items
                    .filter(({ type }) => type === 'code')
                    .map(({ name }, i) => {
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
