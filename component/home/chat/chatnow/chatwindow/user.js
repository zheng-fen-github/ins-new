import React from 'react'
import Photo from '../../../../public/userPhoto'

function User(props) {
    return (
        <div className={`user ${props.select}`}>
                <div className="photo">
                    <Photo>
                        <img src="userphoto.jpg" alt="头像"/>
                    </Photo>
                </div>
                <div className="message">
                   hello xiaoyiling  Do you work ?                                     
                </div> 
                <style jsx> {`
                        .user  {
                            display:flex;
                            width:100%;
                            margin-bottom:3vh;
                        }
                        .right {
                            flex-direction:row-reverse;
                        }
                        .right .message {
                            margin-left:0;
                            margin-right:2vw;
                        }
                        .message {
                            max-width:70%;
                            height:auto;
                            min-height:2vh;
                            margin-left:2vw;
                            padding:20px;
                            font-size:2vh;
                            display:flex;
                            align-items:center;
                            border-radius:24px;                            
                            background:white;
                            box-shadow: 0 0 4px black;
                        }
                        .photo {
                            width:4vw;
                            height:4vw;
                            margin-left:2vh;
                        }
                        .right .photo {
                            margin-left:0;
                            margin-right:2vh;
                        }
                        img {
                            height:4vw;
                            width:4vw;
                        }

                        `}
                </style>
        </div>
    )
}

export default User
