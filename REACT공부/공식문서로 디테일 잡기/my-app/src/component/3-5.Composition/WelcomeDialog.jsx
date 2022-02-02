import React from 'react'
import CustomDialog from './CustomDialog'
import Dialog from './Dialog'

export default function WelcomeDialog() {
    // return (
    //     <Dialog>
    //         <h1>Welcome</h1>
    //         <h5>Thankyou</h5>
    //     </Dialog>
    // )

    return(
        <CustomDialog title="Welcome" description="Thankyou"/>
    )
}
