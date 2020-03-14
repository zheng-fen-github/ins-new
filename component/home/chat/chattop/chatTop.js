import React,{useContext} from 'react'
import Title from './title.js'
import Button from './button.js'
import {ThemeContext} from '../context'

function ChatTop() {
    let {change} = useContext(ThemeContext);
    let classname = change?'scale':'';
    return (
        <div className={`chat-top ${classname}`}>
            <Title/>
            <Button/>
            <style jsx> {`
                    .chat-top {
                         width:100%;
                         height:8%;                  
                         display:flex;
                         justify-content:space-between;
                         align-items:center;
                         transition: 0.4s;
                    }    
                    .scale {
                        width:65%;
                    }
                        `}
            </style>    
        </div>
    )
}

export default ChatTop
