import React from 'react'

function Signup({event}) {
    return (
        <div className='signuoOpen'>
             <h3>
                 Don't have an account ? 
                 <p onClick={event}>Sign up</p>                
             </h3>
            <style jsx>{`
                 .signuoOpen {
                     position:fixed;
                     bottom:20px;
                     right:40px;
                     color:white;
                 }
                 p {
                     color:#5c52ff;
                     margin-left:10px;
                     display:inline-block;
                     padding:5px;
                 }
                 p:hover  {
                    background:white;
                    border-radius:6px;
                 }
                `}
            </style>
        </div>
    )
}

export default Signup
