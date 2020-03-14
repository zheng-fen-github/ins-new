import React from 'react'

function Loading() {
    return (        
        <div className="content">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>        
            <style jsx>
                  {`
                  
                  .content {
                        height:100%;
                        width:100%;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .content>div {
                        width:40px;
                        height:40px;
                        border-radius:20px;
                        background:#72BDE8;
                        margin:0 6px;
                        
                    }
                    .one {
                        animation: go 2s  infinite;
                    }
                    .two {
                        animation: go 2s 0.2s infinite;
                    }
                    .three {
                        animation: go 2s 0.4s infinite;
                    }
                    @keyframes go {
                        0% {
                            transform:scale(0);
                        }
                        50% {
                            transform:scale(1);
                        }
                        100% {
                            transform:scale(0);
                        }
                    }
                  `}
            </style>
        </div>
    )
}

export default Loading
