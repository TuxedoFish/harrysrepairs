// React Imports
import React from 'react'

// Component Files
import {
  Loader,
} from 'semantic-ui-react'

const __Loader = ({inverted}) => {
    return <Loader active inline='centered' inverted={inverted} className="__harrysrepairs__loader">Loading...</Loader>
}

export default __Loader