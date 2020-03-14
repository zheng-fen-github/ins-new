import React from 'react'

function Loadanima() {
    return (
        <>
                <div>
                
                </div>
                <div className="two">
                    
                </div>
                <div className="three">
                        
                </div>
                <style jsx> {`
                    div {
                            width:20px;
                            margin: 0 10px;
                            height:20px;
                            background:#999;
                            border-radius:50%;
                            box-shadow:0 0 2px #999;
                            animation:scale 2 0.8s 5s;
                        }
                         div:nth-child(1) {
                            animation:scale 10 0.6s ;
                        }
                         .two {
                            animation:scale 10 0.6s 0.2s;
                        }
                        .three {
                            animation:scale 10 0.6s 0.4s;
                        }
                        @keyframes scale {
                            0% {
                              transform:scale(1,1)
                            }
                            50% {
                              transform:scale(1.5,1.5)  
                            }
                            100% {
                              transform:scale(1,1)  
                            }
                        }
                        `}
                 </style>
        </>
    )
}

export default Loadanima
