// Importing React
import React from "react"
// Stylings
import * as S from './Column.styles'

const Column = (props) => {

    return (

        <S.Column className={`column ${props.size}`} {...props}>
            {props.children}
        </S.Column>

    )

}

Column.defaultProps = {
    size: ""
}

export default Column