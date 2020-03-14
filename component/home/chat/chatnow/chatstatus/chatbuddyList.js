import React,{useContext} from 'react'
import Buddy from './buddyname.js'
import {ThemeContext} from '../../context'

function ChatList() {
    let {change} = useContext(ThemeContext);
    let classname = change?'scale':'';
    return (
        <div className={`buddy-chat-list ${classname}`}>
           <Buddy name='jeanette Thornton' number = {2} />
           <Buddy name='Sallie walton' number = {3}/>
           <Buddy name='Sallie' number = {3}/>           
           <style jsx> {`                        
                        .buddy-chat-list {
                            width:100%;
                            height:8%;
                            border-bottom:solid 2px black;
                            display:flex;
                            flex-wrap:no-wrap;
                            align-items:center;
                            overflow:auto;
                            padding-bottom:2vh;
                            margin:2vh 0;
                        }
                        .scale{
                            width:63%;
                        }
                        `}
            </style>
        </div>
    )
}

export default ChatList
