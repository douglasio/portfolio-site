import * as Styled from './Avatar.styles';
import dougImg from '../assets/doug.jpg';

export const Avatar = () => {
    return (
        <Styled.Avatar className="avatar">
            <img
                alt="Douglas standing in front of a bridge in New York"
                src={dougImg}
            />
        </Styled.Avatar>
    );
};
