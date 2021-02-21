import styled from 'styled-components'

export const Container = styled.div`

    background-image: url("../../images/bg-darken.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    padding: 5rem 0;

    ${({ inverted }) => inverted && `
        background-color: #fff;
        background-image: unset;
    `}
`