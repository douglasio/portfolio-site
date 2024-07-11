import { useState } from 'react';
import { BUTTON } from '../constants';
import * as Styled from './Button.styles';

export const Button = ({
    children,
    className,
    download,
    onClick,
    size,
    variant,
}) => {
    const [animate, setAnimate] = useState();

    const handleClick = (onClick, variant) => {
        variant === BUTTON.VARIANT.TOGGLE && setAnimate(variant);
        return onClick();
    };

    return (
        <Styled.Button
            className={`${className}${animate ? ' toggle-active' : ''}`}
            download={download}
            onAnimationEnd={() => setAnimate(null)}
            onClick={(e) => handleClick(onClick, variant)}
            size={size}
            type="button"
            variant={variant}>
            {children}
        </Styled.Button>
    );
};
