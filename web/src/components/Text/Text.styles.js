import styled from 'styled-components'

export const Text = styled.div`
    color: ${({inverted}) => inverted ? "#222" : "#fff"};
    text-align: ${({align}) => align};
`