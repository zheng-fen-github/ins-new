import React from 'react'
import Photo from '../../../public/userPhoto'

function Buddy({status}) {
    return (
        <div className='buddy'>
            <div className="message">
                <div className="photo">
                    <Photo>
                        <img src="userphoto.jpg" alt="buddyphoto"/>
                    </Photo>
                </div>
                <div className="buddy-name">
                    <h4> name</h4>
                </div>
            </div>
            <div className={"buddy-status "+status}>
               {status ?<div className="deng">                 
                </div>:  <div></div>
                }
            </div>
            <style jsx> {`
                    .buddy {
                        width:100%;
                        margin-bottom:1vh;
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        padding:2vh 0;
                        border-bottom:1px solid rgba(0,0,0,0.3);
                    }    
                    .message {
                         display:flex;
                    }
                    .buddy-name {                        
                        margin-left:2vh;
                    }
                    .photo,img,.buddy-name {
                        width:60px;
                        height:60px;
                    }
                    .buddy-status {
                        width:15px;
                        height:15px;
                        background:#2ad32d;
                        border-radius:50%;
                    }
                    .dow {
                        background:red;
                    }
                        `}
            </style>
        </div>
    )
}

export default Buddy
