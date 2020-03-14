import React from 'react'

function Top() {
    return (
        <div className='top'>
                <div className="top-left">
                             <div className="photo">
                                 <img src="userphoto.jpg" alt="user"/>
                             </div>
                         </div>
                         <div className="top-right">
                                <div className="username">
                                    <h2>Kopernikin</h2>
                                    <button className='b1'>关注</button>
                                    <button className='b2'>
                                        <svg t="1578984114380" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5234" width="26" height="26"><path d="M102.4 512m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0Z" p-id="5235"></path><path d="M512 512m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0Z" p-id="5236"></path><path d="M921.6 512m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0Z" p-id="5237"></path></svg>
                                    </button>
                                </div>
                                <div className="user-message">
                                    <div className="post">
                                        48 帖子
                                    </div>
                                    <div className="fan">
                                        165 粉丝
                                    </div>
                                     <div className="attention">
                                         18 关注
                                     </div>
                                </div>
                                <div className="user-show">
                                    <p>
                                        i m a good man ,
                                        welcome love me ,
                                        so you can lover me ,
                                        did you can ?
                                        i m a good man ,
                                        welcome love me ,
                                        so you can lover me ,
                                        did you can ? i m a good man ,
                                        welcome love me ,
                                        so you can lover me ,
                                        did you can ?
                                        i m a good man ,
                                        welcome love me ,
                                        so you can lover me ,
                                        did you can ? i m a good man ,
                                      
                                    </p>
                                </div>
                     </div>
            <style jsx> {`
                           .top {
                               width:100%;
                               height:280px;
                               display:flex;
                           } 
                           .top-left {
                               flex:1;
                           }
                           .top-right {
                               flex:3;
                               display:flex;
                               flex-direction:column;
                           }
                           .top-right .username,.top-right .user-message {
                                flex:1;
                                display:flex;
                                align-items:center;
                           }
                           .username h2 {
                               margin:0 20px;                               
                           }
                           .username button {
                              background:#3897f0;
                              color:white;
                              font-weight:700;
                              outline:none;
                              border:none;
                              height:36px;
                              width:60px;
                              border-radius:4px;
                              margin:0 10px;
                              padding:2px;
                            }
                            .username button.b1:hover {
                               background:#005fe6;
                            }
                            .username button.b2 {
                                background:none;
                                height:36px;
                            }
                           .top-right .user-message {                                
                                font-size:20px;
                           }
                           .top-right .user-message div {
                                margin:20px;
                           }

                           .top-right .user-show {
                                flex:2;
                                display:flex;
                                align-items:center;
                                line-height:20px;
                                padding: 0 120px 0 20px;
                           }

                           .photo {
                               height:200px;
                               width:200px;
                               border-radius:50%;
                               background:black;
                               overflow:hidden;
                               
                           }
                           .photo img {
                               height:100%;                                                            
                           }
                            `}
            </style>
        </div>
    )
}

export default Top
