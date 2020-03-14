import React,{useContext} from 'react'
import Router from 'next/router'
import {Context} from '../../../editusermessage/context/ins-context.js'

function Sidebaruserimg({style}) {
    const routerEv = () => {  //路由转化事件
        Router.push({
            pathname:'/edit'
        })
   }
   const {message,email} = useContext(Context);
   
   if(message) {
    return (
        <div className="userimg">
                <div className="photo" onClick={routerEv}>
                    {
                        message.photoId != ''? 
                         <img src='photo-of-tabby-cat-3777622.jpg'/>:
                         <img src="photo-of-tabby-cat-3777622.jpg" alt="头像"/>
                    }
                       
                </div>
                <div className={`message ${style}`} >
                    <div className="name">
                        <h2>{message.name.slice(0,6)}</h2>
                    </div>
                    <div className="email">
                        <h3>{email}</h3>
                    </div>                    
                </div>
                
                <style jsx> {`
                    .userimg {
                        width:100%;                        
                        bottom:0;
                        right:0;
                        display:flex;
                        color:white;                        
                    }                    
                    .photo {
                      height:8vh;
                      width:8vh;
                      border-radius:24px;
                      background:black;
                      overflow:hidden;
                      box-shadow:2px 2px 8px  #555; 
                      cursor:pointer;
                      transition:.2s;
                    }                    
                   .photo:hover {
                       transform:scale(1.1);
                   }                                        
                    .photo img {
                        width:100%;
                        height:100%; 
                    }
                    .message {
                        margin-left:20px;
                        height:100%;            
                        display:flex;
                        flex-direction:column;                        
                    }
                    .hidden {
                        display:none
                    }
                    .name{
                        margin-bottom:1vh;
                    }
                    `}
                </style>
       </div>
    )
   }else{
       return false
   }
   
}

export default Sidebaruserimg
