import React from 'react'

function Right() {
    return (
        <div className="right-message">
                      <div className="post-avthor">
                           <div className="avthoe-photo">
                               <img src="userphoto.jpg" alt="photo"/>
                           </div>
                           <div className="name">
                               hello word
                           </div>
                           <div className="attention">
                               关注
                           </div>
                      </div>
                      <div className="commentList">
                            <div className="conment">
                               <div className="conment-photo">

                               </div>
                               <div className="comment-message">

                               </div>
                               <div className="comment-send-message">

                               </div>
                               <div className="comment-liek">

                               </div>
                            </div>
                      </div>
                      <div className="features">
                          <div className="icon">
                                <svg t="1578988081191" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1679" width="30" height="30"><path d="M696.37 223.76c49.05 0 95.16 19.1 129.84 53.78 71.59 71.59 71.59 188.08 0.8 258.89l-10.39 10.05L512 851.4 207.11 546.8l-9.5-9.5c-71.39-71.64-71.39-188.2-0.08-259.75 34.68-34.68 80.79-53.78 129.84-53.78 49.04 0 95.15 19.1 129.84 53.78l9.57 9.57 46.06 46.06 45.24-46.86 8.45-8.77c34.69-34.69 80.8-53.79 129.84-53.79m0-64c-63.37 0-126.74 24.18-175.09 72.53l-9.24 9.57-9.57-9.57c-48.35-48.35-111.72-72.53-175.09-72.53s-126.74 24.18-175.09 72.53c-96.38 96.71-96.38 253.48 0 350.19l9.57 9.57 326.83 326.53c6.44 6.44 14.89 9.66 23.33 9.66 8.45 0 16.9-3.23 23.35-9.68L861.9 591.72l9.57-9.24c96.7-96.71 96.7-253.48 0-350.19-48.35-48.35-111.73-72.53-175.1-72.53z" p-id="1680"></path></svg>
                                <svg t="1578988095974" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1931" width="30" height="30"><path d="M544.32 107.91h0.16-0.16M512 173.39l83.56 169.3 14.89 30.17 33.3 4.84 186.84 27.15-135.2 131.78-24.09 23.49 5.69 33.16 31.92 186.08L541.8 691.5 512 675.85l-29.78 15.66-167.11 87.85 31.92-186.08 5.69-33.16-24.09-23.49-135.2-131.78 186.84-27.15 33.3-4.84 14.89-30.17L512 173.39M512 64c-9.97 0-19.95 5.2-25.07 15.59L371.05 314.37l-259.1 37.65c-22.93 3.33-32.09 31.52-15.5 47.69l187.49 182.75-44.26 258.05c-3.1 18.07 11.26 32.75 27.55 32.75 4.3 0 8.73-1.02 13.02-3.27L512 748.16 743.75 870c4.28 2.25 8.72 3.27 13.02 3.27 16.29 0 30.65-14.68 27.55-32.75l-44.26-258.05 187.49-182.75c16.6-16.18 7.44-44.36-15.5-47.69l-259.1-37.65L537.07 79.59C531.95 69.2 521.97 64 512 64z" p-id="1932"></path></svg>    
                                <svg t="1578988131573" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2183" width="30" height="30"><path d="M864 512c-17.67 0-32 14.33-32 32v288H192V192h368c17.67 0 32-14.33 32-32s-14.33-32-32-32H160c-17.67 0-32 14.33-32 32v704c0 17.67 14.33 32 32 32h704c17.67 0 32-14.33 32-32V544c0-17.67-14.33-32-32-32z" p-id="2184"></path><path d="M817.82 256.69c-244.03 7.27-446.8 199.46-464.55 444.12-1.27 17.62 11.98 32.95 29.61 34.23 0.78 0.05 1.56 0.08 2.34 0.08 16.62 0 30.66-12.84 31.89-29.69 15.33-211.45 190.2-377.65 400.96-384.76l-103.9 103.9c-12.5 12.5-12.5 32.75 0 45.25 6.25 6.25 14.44 9.38 22.62 9.38s16.38-3.12 22.62-9.38l135.77-135.77c24.95-24.95 24.95-65.56 0-90.52L759.42 107.78c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l103.65 103.66z" p-id="2185"></path></svg>
                         </div>
                         <div className="count">
                             <p>1998 次赞</p>
                             <p>1天前</p>
                         </div>
                      </div>
                      <div className="sendcomment">
                          <input type="text" 
                          name="sendmessage" 
                          id="send" 
                          placeholder='添加评论'/>
                          <button>发送</button>
                      </div>
                      <style jsx> {`
                      .right-message {
                            min-width:400px;
                            height:600px;
                            background:#adadad;
                            dispaly:flex;
                            flex-direction:column;
                            
                        }
                        .right-message .post-avthor {
                            width:400px;
                            min-height:75px;
                            background:white;
                            color:black;
                            display:flex;
                            align-items:center;
                            border-top:solid 1px #d2d2d2;
                        }
                        
                        .post-avthor img {
                            height:60px;
                            width:60px;
                            margin:0 10px;
                            border-radius:50%;
                        }
                        .post-avthor .name,.post-avthor .attention {
                            margin:0 4px;
                        }
                        .post-avthor .attention {
                            color:#3897f0;
                            font-weight:700;
                        }
                        .right-message .commentList {
                            width:400px;
                            min-height:375px;
                            overflow:auto;
                            background:#fefefe;                            
                            border-top:solid 1px #d2d2d2;
                            border-bottom:solid 1px #d2d2d2;
                        }
                        .right-message .features {
                            width:400px;
                            min-height:90px;
                            overflow:hidden;
                            background:white;                        
                        }
                        .features .icon {
                            height:45px;
                            display:flex;
                            align-items:center;
                        }
                        .icon svg {
                            margin : 0 8px;
                            height:26px;
                            width:26px;
                        }
                        .features .count {
                            height:45px;
                            padding-left:8px;
                            line-height:22.5px;
                            align-items:center;
                        }
                        .right-message .sendcomment {
                            width:400px;
                            min-height:60px;
                            overflow:hidden;
                            background:white;
                            border-top:solid 1px #d2d2d2;
                            display:flex;
                            position:relative;
                        }
                        .sendcomment input {
                            width:80%;
                            padding:12px;
                            border:none;
                        }
                        .sendcomment button {
                            background:#3897f0;
                            border:none;
                            outline:none;
                            color:white;                        
                            width:60px;
                            height:30px;
                            border-radius:4px;
                            position:absolute;
                            right:10px;
                            top:50%;
                            transform:translateY(-50%);
                        }
                        `}
                       </style>
       </div>
    )
}

export default Right
