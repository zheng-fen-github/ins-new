import React from 'react'
import PostContent from '../component/post/left'
import Message from '../component/post/right'

function Post() {
    return (
        <div className='post'>
             <div className="container">
                <PostContent/>
                <Message/>
             </div>
            <style jsx global> {`
                    * {
                                margin:0;
                                padding:0;
                                box-sizing:border-box;
                            }       
                   `} 
             </style>
            <style jsx> {`
                        .post {
                            width:100vw;
                            height:100vh;
                            background:#f5f8fa;
                        }   
                        .container{
                            width:1000px;
                            height:600px;
                            background:red;
                            position:absolute;
                            left:50%;
                            top:50%;
                            transform:translate(-50%,-50%);
                            display:flex;                        
                        }
                        
                        
                            `}
            </style>
        </div>
    )
}

export default Post
