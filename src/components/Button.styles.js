import styled from 'styled-components';
import { BUTTON } from '../constants';

export const Button = styled.button`
    background-color: ${({ theme }) => theme.button.standard.background};
    border: 0;
    cursor: pointer;
    font-family: 'Barlow', sans-serif;
    font-size: ${({ size }) => {
        switch (size) {
            case BUTTON.SIZE.SMALL:
                return `0.6rem`;
            case BUTTON.SIZE.MEDIUM:
                return `0.8rem`;
            case BUTTON.SIZE.LARGE:
                return `1rem`;
            default:
                break;
        }
    }};
    font-weight: 400;
    padding: 0.5em 1em;
    transition: all 200ms;
    white-space: nowrap;

    &:hover {
        background-color: ${({ theme }) =>
            theme.button.standard.hover.background};
        text-decoration: underline;
    }

    &.toggle-active {
        animation-duration: 500ms;
        animation-direction: normal;
        animation-name: flip;
    }

    @keyframes flip {
        0% {
            opacity: 1;
            transform: rotateY(0) scale3d(1, 1, 1);
        }

        50% {
            opacity: 0.3;
            transform: rotateY(270deg) scale3d(1.5, 1.5, 1.5);
        }

        100% {
            opacity: 1;
            transform: rotateY(360deg) scale3d(1, 1, 1);
        }
    }
`;
