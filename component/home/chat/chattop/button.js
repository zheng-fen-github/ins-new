import React,{useContext} from 'react'
import {ThemeContext} from '../context'


function Button(props) {
    let {change,event} = useContext(ThemeContext); //上下文引用
     
    const Ev = () =>{         
        event();
    }
    return (
        <>
            { !change &&
            <div className='chat-button' onClick={Ev}>
               
                <button>
                    <svg t="1578640454742" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2550" width="30" height="30"><path d="M193.349046 210.094207v130.995519c0.084979 23.530755-6.042025 43.024996-29.555785 43.105726h-0.195452c-23.649726-0.025494-33.940714-19.53673-34.004448-43.207701v-169.916017a41.580349 41.580349 0 0 1 41.784299-41.809792h170.328166c23.641228 0.029743 42.795552 10.707386 42.825294 34.36561 0.029743 23.535004-19.009859 29.445311-42.523618 29.475054H210.344896a16.995851 16.995851 0 0 0-16.99585 16.99585z m620.306058-16.99585H681.992498c-23.513759-0.025494-42.549112-5.935801-42.523618-29.470805 0.029743-23.662473 19.184066-34.335867 42.825294-34.369859H852.78805a41.580349 41.580349 0 0 1 41.618589 41.809792v169.920266c-0.063734 23.666722-10.354722 43.182207-34.000199 43.21195h-0.199701c-23.513759-0.084979-29.636515-19.57922-29.555785-43.109975v-130.995519a16.995851 16.995851 0 0 0-16.99585-16.99585zM210.344896 830.09434H342.007502c23.513759 0.025494 42.553361 5.94005 42.523618 29.470805-0.029743 23.662473-19.184066 34.335867-42.825294 34.369859H171.21195a41.580349 41.580349 0 0 1-41.618589-41.809792v-169.916017c0.063734-23.670971 10.354722-43.186456 34.004448-43.21195h0.195452c23.513759 0.084979 29.636515 19.574971 29.555785 43.105726v130.995519a16.995851 16.995851 0 0 0 16.99585 16.99585z m620.306058-16.859884v-130.991269c-0.084979-23.535004 6.042025-43.024996 29.555785-43.109975h0.199701c23.645477 0.029743 33.936465 19.545228 34.000199 43.21195v169.916016a41.580349 41.580349 0 0 1-41.784299 41.809793h-170.328166c-23.641228-0.029743-42.795552-10.707386-42.825294-34.36561-0.025494-23.535004 19.009859-29.445311 42.523618-29.475054H813.655104a16.995851 16.995851 0 0 0 16.99585-16.995851z" p-id="2551"></path></svg>
                </button>            
            </div>
            }
            
            <style jsx> {`
                            .chat-button{
                                display:flex;
                                justify-content:center;
                                align-items:center;                            
                                margin-right:2vh;
                                border-radius:6px;
                                transition:.2s;
                                height:40px;
                                width:40px;
                            }
                            .chat-button:hover {
                                transform:scale(1.2,1.2);
                                background:white;
                                box-shadow: 0 0 2px #888;
                            }   
                            .chat-button:active{
                                box-shadow:none;
                                transform:scale(1,1)
                            }
                            button {
                                background:none;
                                border:none;
                                outline:none;
                            }
                            `}
            </style>
        </>

    )
}

export default Button