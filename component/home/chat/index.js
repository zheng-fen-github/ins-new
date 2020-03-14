import React,{useState,useEffect} from 'react'
import Top from './chattop/chatTop'
import ChatBuddy from './chatnow/chatstatus/chatbuddyList'
import Window from './chatnow/chatwindow/window'
import Buddy from './buddy/buddyList'

//上下文对象引用
import {ThemeContext} from './context'

function ChatIndex() {
    
    const [change, setChange] = useState(true);
    const closeEv = () => {        
        setChange(prevState => !prevState)
    }
    let classname = change?'scale':'';
    
    return (
        
        <div className={`Chat ${classname}`} >
            <ThemeContext.Provider value={{
              change,
              event:() => {
                setChange(prevState =>!prevState)
              }
            }}>
                <div className="chat-container">            
                    <Top/>
                    <ChatBuddy/>
                    <Window/>
                    <Buddy/>
                    {
                        change &&    
                        <div className="back" onClick={closeEv}>
                            <svg t="1578835015370" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1284" id="mx_n_1578835015372" width="40" height="40"><path d="M666.624 171.690667a25.6 25.6 0 0 0-36.181333-36.181334l-358.4 358.4a25.6 25.6 0 0 0 0 36.181334l358.4 358.4a25.6 25.6 0 0 0 36.181333-36.181334L326.314667 512l340.309333-340.309333z" fill="#13227a" p-id="1285"></path></svg>
                        </div>
                    }
                </div>
            </ThemeContext.Provider>
            <style jsx> {`
                            .Chat {                        
                                height:100%;
                                width:30%;
                                padding:2vw;
                                background:white;
                                position:absolute;
                                z-index:30;
                                right:0;
                                transition: 0.4s;
                            }
                            .chat-container {
                                height:100%;
                                width:100%;
                                border-radius:3vh;
                                overflow:hidden;
                            }
                            .scale {
                                 width:80%;
                            }
                            .back {
                                height:100%;
                                position:absolute;
                                left:0;
                                top:0;                              
                                display:flex;
                                align-items:center;
                                transform: rotate(180deg);                                
                            }    
                            .back svg {
                                transition:.2s;
                            }
                            .back:hover {
                                background:#238cff;                                
                            }
                            .back:hover>svg {
                                transform: scale(1.2,1.2);
                            }

                                `}

            </style>
        </div>
    )
}

export default ChatIndex
