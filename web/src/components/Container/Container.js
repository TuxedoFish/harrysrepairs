// Importing React
import React from "react"
// Stylings
import * as S from './Container.styles'

const Container = (props) => {

    return (

        <S.Container {...props}>
            <S.Row {...props}>
                {props.children}
            </S.Row>
        </S.Container>

    )

}

Container.defaultProps = {
    inverted: false,
    hero: false,
    width: "66.7%"
}

export default Container