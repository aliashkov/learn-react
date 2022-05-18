import React from 'react'
import './MyInput.css'

const MyInput = React.forwardRef((props : any, ref : any) => {

    return (
        <input  {...props} ref={ref} className='myInput'> 
        </input>
    )
})

export default MyInput;