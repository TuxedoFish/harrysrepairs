// Importing React
import React from "react"
// Stylings
import * as S from './Container.styles'

const Container = ({ inverted, children }) => {

    return (
        <S.Container inverted={inverted}>
            {children}
        </S.Container>
    )

}

Container.defaultProps = {
    inverted: false
}

export default Container