import React from 'react'


function BuddyChat(props) {
    return (
        <div className={'buddy-chat '+props.select}>
           <div className="message-number">
               <p>
                   {props.number}
               </p>
           </div>
           <div className="buddy-name">
               <h3>
                  {props.name}
               </h3>
           </div>
           <div className="closeBu">
              <svg t="1577522468145" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2589"><path d="M633.749333 390.250667a21.333333 21.333333 0 0 0-30.165333 0L512 481.834667l-91.584-91.584a21.333333 21.333333 0 0 0-30.165333 30.165333L481.834667 512l-91.584 91.584a21.333333 21.333333 0 1 0 30.165333 30.165333L512 542.165333l91.584 91.584a21.333333 21.333333 0 0 0 30.165333-30.165333L542.165333 512l91.584-91.584a21.333333 21.333333 0 0 0 0-30.165333z" fill="#2c2c2c" p-id="2591"></path></svg>
           </div>
           <style jsx> {`
               .buddy-chat { 
                   width:auto;
                   background:#f4f5f7;
                   margin-right:1vh;
                   padding:12px;
                   display:flex;
                   align-items:center;
                   border-radius:24px;
                   position:relative;
               }
               .buddy-chat:hover>.closeBu {
                   display:flex;
                   transform:scale(1);
               }
               .closeBu {
                   position:absolute;
                   right:2%;
                   top:0%;
                   background:red;
                   color:white;
                   height:2vh;
                   width:2vh;
                   display:flex;
                   justify-content:center;
                   align-items:center;
                   border-radius:50%;
                   transform:scale(0);
                   transition:.4s;
                   cursor:pointer;
               }
               .closeBu>svg {
                   width:280%;
                   height:280%;
               }
               .select {
                   background:white;
               }
               .message-number {
                 color:white;
                 height:2.4vh;
                 width:2.4vh;
                 display:flex;
                 justify-content:center;
                 align-items:center;
                 background:#238cff;
                 border-radius:50%;
                 margin:0 1vh;
               }
               .buddy-name {
                   font-size:1vh;
                   white-space: nowrap;
                   wdith:auto;
                   padding-right:1vh;
               }

                        `}
            </style>
        </div>
    )
}

export default BuddyChat
