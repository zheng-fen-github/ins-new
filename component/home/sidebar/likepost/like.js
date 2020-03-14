import React,{useEffect} from 'react'
import Container from '../savepost/container.js'
import CloseBu from '../savepost/closeBu'

const Like = React.forwardRef((props,ref) => {  
    const closeEv = () => {
        ref.current.classList.add('back')
    } 
    return (
        <div className='like' ref= {ref}>
                <CloseBu event={closeEv} css='rotate'/>  
                <Container/>
                <style jsx> {`
               .like {
                            height:100%;
                            width:250%;
                            background:white;
                            position:absolute;
                            z-index:5;
                            opacity:1;
                            top:0;                            
                            transform:translate(40%,0%);
                            transition:0.2s;
                            padding:4vh 6vh;
                            overflow:auto;
                        }       
                 .back {
                    transform:translate(40%,100%);
                 }       
                    .close {
                        transform:translate(40%,10%);
                    }        
                        .like::-webkit-scrollbar {
                            display:none;
                        }
                     .close {
                            position:absolute;
                            top:2%;
                            left:2%;
                            height:60px;
                            width:60px;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            border-radius:50%;
                        }
                     .close:hover {
                            background:#238cff;                                                        
                        }
                        svg{
                            width:60px;
                            height:60px;                    
                        }     
                                `}
                </style>
        </div>
    )
})

export default Like
