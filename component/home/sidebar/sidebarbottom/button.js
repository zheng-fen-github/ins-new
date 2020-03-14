import React from 'react'

function Button(props) {
    return (
        <div className='button' onClick={props.Ev}>             
            <button>
                {props.children}
            </button>            
            <div className="title">
               <h3> 
                   {props.title}
               </h3>
            </div>
            <style jsx> {`
                        .button {
                            display:flex;
                            height:6vh;
                            margin-bottom:2vh;
                            font-size:2.5vh;
                            line-height:6vh;
                            cursor:pointer;  
                        }
                        button {
                            border:none;
                            border-radius:8px;
                            outline:none;
                            height:6vh;
                            width:6vh;
                            background:white;  
                            margin-right:20px;
                            display:flex;
                            justify-content:center;
                            box-shadow:1px 1px 2px #999;  
                            transition: .2s;                                      
                        }
                        button:hover {
                            margin-right:40px;
                            box-shadow:1px 1px 2px #666; 
                        }
                        button:active {
                            margin-right:20px;
                            box-shadow:none; 
                        }
                        `}
                    </style>
        </div>
    )
}

export default Button
