// Importing React
import React from "react"
// Stylings
import * as S from './Container.styles'

const Container = (props) => {
console.log(props)
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
    width: "66.7%",
    popout: false,
    padding: "5rem 0"
}

export default Container