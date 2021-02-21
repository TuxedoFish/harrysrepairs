import styled from 'styled-components'
import parallax_image from '../../images/bg-darken.jpg'

export const Container = styled.div`

    background-image: url(${parallax_image});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    padding: 5rem 0;
    display: flex;

    ${({ inverted }) => inverted && `

        background-color: #fff;
        background-image: unset;

    `}

    ${({ hero }) => hero && `

        justify-content: center;
        align-items: center;
        height: 55vh;

    `}

`

export const Row = styled.div`

    width: ${({ width }) => width};
    margin: auto;
    

    ${({ popout }) => popout && `

        margin-top: -13rem;
        margin-bottom: 5rem;

    `}

    @media (max-width: 968px) {

        & .column:not(:last-child) {
            padding-bottom: 4rem;
        }
    }

`