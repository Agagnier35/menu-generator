import React, { ReactNode } from 'react';
import { CardContainer, CardContent, CardTitle } from './style';

interface CardProps {
    children?: ReactNode;
    onClick?(): void;
    title?: string;
    actions?: ReactNode;
}
const Card = ({ children, onClick, title, actions }: CardProps) => {
    return (
        <CardContainer onClick={onClick}>
            {(title || actions) && (
                <CardTitle>
                    <h2>{title}</h2>
                    {actions}
                </CardTitle>
            )}
            <CardContent>{children}</CardContent>
        </CardContainer>
    );
};

export default Card;
