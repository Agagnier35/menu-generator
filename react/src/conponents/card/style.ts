import styled from 'styled-components';

export const CardContainer = styled.div<{ onClick?(): void }>`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
    }
`;

export const CardContent = styled.div`
    padding: 2px 16px;
`;
