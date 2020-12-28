import React, { ReactNode } from 'react';
import { CardContainer, CardContent } from './style';

const Card = ({ children, onClick }: { children: ReactNode; onClick?(): void }) => {
    return (
        <CardContainer onClick={onClick}>
            <CardContent>{children}</CardContent>
        </CardContainer>
    );
};

export default Card;
