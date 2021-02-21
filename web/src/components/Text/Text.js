// Importing React
import React from "react"
// Stylings
import * as S from './Text.styles'

const Text = (props) => {
    
    return (

        <S.Text {...props}>
            {props.children}
        </S.Text>

    )

}

Text.defaultProps = {
    as: "p",
    inverted: false,
    align: "unset"
}

export default Text