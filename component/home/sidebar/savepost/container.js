import React from 'react'
import Post from '../../main/postlist/list/list'

function Container() {
    return (
        <>
           <div className="container">
                <Post/>
            </div>  
            <div className="container">
                <Post/>
            </div>   
            <div className="container">   
                <Post/>
            </div> 
            <style jsx> {`
                       .container {
                            width:80%;
                            margin:0 auto;
                            animation:go 1 1s ;
                        } 
                        @keyframes go {
                            0% {
                                transform:translateX(10%)
                            }
                            20% {
                                transform:translateX(10%)
                            }
                            100% {
                                transform:translateX(0)
                            }
                        }
                        `}
             </style>
        </>
    )
}

export default Container
