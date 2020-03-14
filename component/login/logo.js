import React from 'react'

function Logo() {
    return (
        <div id='logo'>
            <div className="logobox">
                <div className='logo-left'>
                    <img src="/logo-left.png" alt="logo-left"/>
                </div>
                <div className='logo-right'>
                    <img src="/logo-right.png" alt="logo-right"/>
                </div>
            </div>
            <style jsx>{`
                #logo {
                    height:10%;
                    width:100%;            
                    display:flex;
                    justify-content:center;
                    margin-top:20vh;
                }
                 .logobox {
                     height:100%;
                     
                     display:flex;
                 }
                 .logo-left,.logo-right {                    
                     height:100%;
                 }
                 .logo-left>img,.logo-right>img{
                     height:100%;
                     
                 }
                `}
            </style>
        </div>
    )
}

export default Logo
