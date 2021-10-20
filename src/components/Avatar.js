import * as Styled from './Avatar.styles';
import dougImg from '../assets/doug.jpg';

const Avatar = () => {
    return (
        <Styled.Avatar className="avatar">
            <img
                alt="Douglas standing in front of a bridge in New York"
                src={dougImg}
            />
        </Styled.Avatar>
    );
};

export default Avatar;