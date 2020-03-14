import React,{useContext} from 'react'
import User from './user'
import PostMs from './postmessage'
import {ThemeContext} from '../../context'


function ChatWindow() {
    let {change} = useContext(ThemeContext);
    let classname = change?'scale':'';
    return (
        <div className={`chat-window ${classname}`}>
            <div className="messageList">
                <User/>
                <User select='right'/>              
                <User select='right'/>
            </div>
            <div className="sendmessage">
                <PostMs/>
            </div>
            <style jsx> {`                        
                        .chat-window {
                            height:50%;
                            width:100%;
                            background:#fafafb;
                            border-radius:12px;
                            padding-top:1vh;
                            overflow:auto;
                            position:relative;
                            transition: 0.4s;
                        }
                        .scale {
                            height:78%;
                            width:63%;
                        }
                        .messageList {
                            padding-top:1vh;
                            height:80%;
                            width:100%;
                            overflow:auto;
                        }
                        .sendmessage {
                            height:20%;
                            width:100%;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            box-shadow:0 -1px 2px #adadad;
                        }
                        `}
            </style>
        </div>
    )
}

export default ChatWindow
