import styled from 'styled-components'

export const Column = styled.div`

    ${({ centered }) => centered && `

        display: flex;
        flex-direction: column;
        align-items: center;

    `}

    @media (max-width: 968px) {

        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

    }

`