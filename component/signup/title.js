import React from 'react'

function Title() {
    return (
        <div className="title">
                <h2>Create Your Account</h2>
                <style jsx>{`
                    .title {
                        color:white;
                        font-size:2vh;
                        width:100%;
                        text-align:center;
                        margin-top:10vh;
                        animation: scale 0.6s;
                    }
                    @keyframes scale {
                    0% {
                        transform:scale(0,0)
                    }
                    100% {
                        transform:scale(1,1)
                    }
                }
                    `}
                </style>
        </div>
    )
}

export default Title
