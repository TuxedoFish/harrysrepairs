import styled from 'styled-components'
import parallax_image from '../../images/bg-darken.jpg'

export const Container = styled.div`

    background-image: url(${parallax_image});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    padding: ${({padding}) => padding};
    display: flex;

    ${({ inverted }) => inverted && `

        background-color: #fff;
        background-image: unset;

    `}

    ${({ hero }) => hero && `

        justify-content: center;
        align-items: center;
        min-height: 55vh;

    `}

`

export const Row = styled.div`

    width: ${({ width }) => width};
    margin: auto;
    

    ${({ popout }) => popout && `

        margin-top: -13rem;
        margin-bottom: 5rem;

    `}

    ${({ hero }) => hero && `

        display: flex;
        align-items: center;
        flex-direction: column;

    `}

    @media (max-width: 968px) {

        & .columns:not(:last-child) {
            padding-bottom: 4rem;
        }
    }

`