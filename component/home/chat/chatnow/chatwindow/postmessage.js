import React from 'react'

function PostMessage() {
    const submitEv = (e) => {
        e.preventDefault();
    }
    return (
        <div className='postMessage'>
            <form onSubmit={submitEv}>
                <input type="text" 
                       name="postMessage" 
                       id="postMessage"
                       placeholder='Type something'
                       />
            </form>
            <style jsx> {`
                        
                        .postMessage {
                            width:90%;                            
                            height:5vh;
                            background:#f4f4f7;
                            box-shadow:0 0 4px black;
                            border-radius:12px;
                            overflow:hidden;
                        }
                        form,input {
                            width:100%;
                            height:100%;
                        }
                        input {
                            background:none;
                            
                            border:none;
                            outline:none;
                            font-size:2vh;
                            padding:0 12px;
                        }
                        input:focus{
                            background:white;
                        }
                        `}
            </style>
        </div>
    )
}

export default PostMessage
