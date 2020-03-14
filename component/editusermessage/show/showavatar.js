import React,{useState, useEffect} from 'react'
import LoadPhoto from './avatarLoadPhoto.js'
import dataContext from '../context/ins-context.js'


function Showavatar(props) {
        
        const [src, setSrc] = useState(null);
        useEffect(() => {
           (async () => {
             let request = await  fetch(`http://localhost:3001/getphoto/${props.data.message.photoId}`)
             let blob = await  request.blob()
             let src = URL.createObjectURL(blob);
             setSrc(src)          
            })()
            return () => {
                URL.revokeObjectURL(src)
            }
        },[])
        return (
            <div className="avatar">
                    <div className="photo">
                      { src && <img src={src} alt="cat"/>}
                    </div>
                    <div className="avatarmessage">
                        <div className="username">
                            <h3>{props.name?props.name:false }</h3>
                        </div>
                        
                        <LoadPhoto data = {props.data}/>      
                         
                    </div>
                    <style jsx> {`
                            .avatar {
                                width:100%;
                                height:10%;
                                overflow:hidden;
                                display:flex;
                                margin-bottom:2vh;
                                align-items:center;
                            }
                            .photo {
                                width:25%;
                                height:100%;
                                display:flex;
                                justify-content:flex-end;
                                align-items:center;
                                overflow:hidden;
                            }
                            .photo img {
                                height:6vh;
                                width:6vh;
                                border-radius:50%;
                                border:solid 1px #d3d3d3;
                            }
                            .avatarmessage {
                               padding-left:2vh;
                               width:75%;
                               height:80%;                          
                            }
                            
                            `}
                    </style>
            </div>
        )
    
    }
    

export default Showavatar
