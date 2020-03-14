import React from 'react'
import Title from './title'
import CloseBu from './closebu'

function AddPhototop() {
    return (
        <div className='top'>
            <CloseBu/>
            <Title/>
            <style jsx> {`                        
                .top {
                   display:flex;
                   justify-content:center;
                   position:relative;
                   height:10%;
                   margin-top:2vh;
                }
                        `}
            </style>
        </div>
    )
}

export default AddPhototop
