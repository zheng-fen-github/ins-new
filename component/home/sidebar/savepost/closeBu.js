import React from 'react'

function CloseBu({event,css}) {
    return (
        <div className={`close ${css}`} onClick={event}>                
          <svg t="1578051469441" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3872" width="30" height="30"><path d="M294.13376 512c0-13.70112 5.23264-27.40224 15.6672-37.84704l328.704-328.69376c20.91008-20.91008 54.80448-20.91008 75.70432 0 20.89984 20.89984 20.89984 54.79424 0 75.70432L423.36256 512l290.83648 290.83648c20.89984 20.89984 20.89984 54.80448 0 75.70432-20.89984 20.91008-54.79424 20.91008-75.70432 0l-328.704-328.69376C299.35616 539.40224 294.13376 525.70112 294.13376 512z" p-id="3873"></path></svg>
                <style jsx> {`
                    .close {
                            position:absolute;
                            top:2%;
                            left:2%;
                            height:40px;
                            width:40px;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            border-radius:50%;
                    }
                    .rotate {
                        transform:rotate(-90deg);
                    }
                        .close:hover {
                            background:#238cff;                                                        
                        }  
                                
                                `}
                </style>
        </div>
    )
}

export default CloseBu
