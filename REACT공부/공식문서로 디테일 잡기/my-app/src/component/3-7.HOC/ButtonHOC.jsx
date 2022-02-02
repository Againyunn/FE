import React from 'react'
import withLoading from './withLoading'

 function ButtonHOC() {
    return <button>Button</button>;
}
export default withLoading(ButtonHOC);
