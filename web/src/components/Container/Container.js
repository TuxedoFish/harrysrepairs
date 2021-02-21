// Importing React
import React from "react"
// Stylings
import * as S from './Container.styles'

const Container = (props) => {

    return (

        <S.Container {...props}>
            {props.children}
        </S.Container>

    )

}

Container.defaultProps = {
    inverted: false,
    hero: false
}

export default Container